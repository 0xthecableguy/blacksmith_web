import DOMPurify from 'dompurify';
import { requestTextToSpeech } from '$lib/utils/api';
import type { Writable } from 'svelte/store';
import { TypingIndicator } from '$lib/utils/typing-indicator';
import { type Message } from '$lib/types/types';
import { tick } from 'svelte';

export function copyToClipboard(text: string) {
	const tempDiv = document.createElement('div');
	tempDiv.innerHTML = text;
	const plainText = tempDiv.textContent || tempDiv.innerText || '';

	if (navigator.clipboard && navigator.clipboard.writeText) {
		navigator.clipboard.writeText(plainText)
			.then(() => console.log("Copied:", plainText))
			.catch(err => {
				console.error("Clipboard API error:", err);
				fallbackCopy(plainText);
			});
	} else {
		fallbackCopy(plainText);
	}
}

function fallbackCopy(text: string) {
	const textarea = document.createElement('textarea');
	textarea.value = text;
	textarea.style.position = 'fixed';
	textarea.style.opacity = '0';
	document.body.appendChild(textarea);
	textarea.focus();
	textarea.select();

	try {
		// Using deprecated execCommand as fallback for contexts where Clipboard API is not available
		const successful = document.execCommand('copy');
		if (successful) {
			console.log("Copied (fallback):", text);
		} else {
			console.error("Fallback copy failed");
		}
	} catch (err) {
		console.error("Error in fallback copy:", err);
	}

	document.body.removeChild(textarea);
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
	const isInIframe = window.self !== window.top;
	console.log("Component initialized in iframe:", isInIframe);

	if (isInIframe) {
		const urlParams = new URLSearchParams(window.location.search);
		const urlUserId = urlParams.get('userId');
		if (urlUserId) {
			console.log("Using userId from URL parameter:", urlUserId);

			try {
				localStorage.setItem("userId", urlUserId);
				sessionStorage.setItem("userId", urlUserId);
			} catch (e) {
				console.error("Error saving userId to storage:", e);
			}

			return urlUserId;
		}
	}

	const sessionId = isInIframe ? sessionStorage.getItem("userId") : null;
	const localStorageId = localStorage.getItem("userId");
	const cookieId = getCookie("userId");

	const existingId = sessionId || localStorageId || cookieId;

	if (existingId) {
		console.log("Using existing userId:", existingId);

		try {
			localStorage.setItem("userId", existingId);
			if (isInIframe) {
				sessionStorage.setItem("userId", existingId);
			}
		} catch (e) {
			console.error("Error saving to storage:", e);
		}

		return existingId;
	}

	const newUserId = generateUserId();
	console.log("Created new userId:", newUserId);

	try {
		localStorage.setItem("userId", newUserId);
		if (isInIframe) {
			sessionStorage.setItem("userId", newUserId);
		}
		setCookie("userId", newUserId, 365);
	} catch (e) {
		console.error("Error saving userId:", e);
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

export function getCookie(name: string): string | null {
	const match = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
	return match ? match[2] : null;
}

export function acceptCookies(onAccepted?: () => void) {
	localStorage.setItem("cookie_consent", "true");
	sessionStorage.setItem("cookie_consent", "true");

	if (window.self !== window.top) {
		try {
			window.parent.postMessage({
				type: "cookieConsentAccepted",
				value: true
			}, "https://www.blacksmith-lab.com");
		} catch (e) {
			console.error("Error sending message to parent:", e);
		}
	}

	if (onAccepted) {
		onAccepted();
	}
}