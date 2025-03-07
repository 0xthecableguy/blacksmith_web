import DOMPurify from 'dompurify';
import { requestTextToSpeech } from '$lib/utils/api';
import type { Writable } from 'svelte/store';
import { TypingIndicator } from '$lib/utils/typing-indicator';
import { type Message } from '$lib/types/types';
import { tick } from 'svelte';

export function copyToClipboard(text: string) {
	navigator.clipboard.writeText(text)
		.then(() => console.log("Copied:", text))
		.catch(err => console.error("Error copying:", err));
}

export async function speakMessage(
	text: string,
	userId: string,
	messages: Writable<Message[]>,
	scrollToBottom: () => Promise<void>,
	app_name: string,
) {
	const typingIndicator = new TypingIndicator({
		messages,
		baseText: "🔊 записывает аудио-сообщение"
	});

	typingIndicator.start();
	await scrollToBottom();

	try {
		const response = await requestTextToSpeech({
			text,
			user_id: userId,
			app_name,
		});

		const audioBlob = base64ToBlob(response.audio_data, 'audio/mpeg');
		const audioUrl = URL.createObjectURL(audioBlob);

		messages.update(msgs => {
			const index = msgs.findIndex(m => 'id' in m && m.id === typingIndicator.getTempMessageId());
			if (index !== -1) {
				const newMessages = [...msgs];

				newMessages[index] = {
					text: '',
					sender: 'server',
					type: 'audio',
					audioUrl
				};

				return newMessages;
			}
			return msgs;
		});

		await tick();
		setTimeout(scrollToBottom, 50);

	} catch (error) {
		console.error('Error in TTS request:', error);
		typingIndicator.stop("Произошла ошибка при озвучивании сообщения");

		await scrollToBottom();
	}
}

function base64ToBlob(base64: string, mimeType: string): Blob {
	try {
		const byteCharacters = atob(base64);
		const byteArrays = [];

		for (let offset = 0; offset < byteCharacters.length; offset += 512) {
			const slice = byteCharacters.slice(offset, offset + 512);
			const byteNumbers = new Array(slice.length);

			for (let i = 0; i < slice.length; i++) {
				byteNumbers[i] = slice.charCodeAt(i);
			}

			const byteArray = new Uint8Array(byteNumbers);
			byteArrays.push(byteArray);
		}

		return new Blob(byteArrays, { type: mimeType });
	} catch (error) {
		console.error('Base64 decoding error:', error);
		throw new Error('Invalid base64 string');
	}
}

export function sanitize(html: string) {
	return DOMPurify.sanitize(html);
}

export function getUserId(): string {
	const localStorageId = localStorage.getItem("userId");
	if (localStorageId) return localStorageId;

	const cookieId = getCookie("userId");
	if (cookieId) {
		localStorage.setItem("userId", cookieId);
		return cookieId;
	}

	const newUserId = generateUserId();

	try {
		localStorage.setItem("userId", newUserId);
	} catch (e) {
		console.error("Failed to save to localStorage:", e);
	}

	try {
		setCookie("userId", newUserId, 365);
	} catch (e) {
		console.error("Failed to set cookie:", e);
	}

	return newUserId;
}

function generateUserId(): string {
	if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
		return crypto.randomUUID();
	}

	if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
		const array = new Uint8Array(16);
		crypto.getRandomValues(array);

		return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
			.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');
	}

	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		const r = Math.random() * 16 | 0;
		const v = c === 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

function setCookie(name: string, value: string, days: number) {
	const expires = new Date();
	expires.setDate(expires.getDate() + days);
	document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=None; Secure`;
}

function getCookie(name: string): string | null {
	const match = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
	return match ? match[2] : null;
}

export function acceptCookies(): boolean {
	localStorage.setItem("cookie_consent", "true");
	return false;
}