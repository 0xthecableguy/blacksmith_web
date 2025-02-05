import DOMPurify from 'dompurify';
import { sendTextToSpeech } from '$lib/api';
import type { Writable } from 'svelte/store';
import { type Message, TypingIndicator } from '$lib/typing-indicator';

export function copyToClipboard(text: string) {
	navigator.clipboard.writeText(text)
		.then(() => console.log("Copied:", text))
		.catch(err => console.error("Error copying:", err));
}

export async function speakMessage(text: string, userId: string, messages: Writable<Message[]>, scrollToBottom: () => Promise<void>) {
	const typingIndicator = new TypingIndicator({
		messages,
		baseText: "записывает"
	});

	typingIndicator.start();
	await scrollToBottom();

	try {
		const response = await sendTextToSpeech({
			text,
			user_id: userId,
			app_name: "w3a_web"
		});

		messages.update(msgs => {
			const index = msgs.findIndex(m => 'id' in m && m.id === typingIndicator.getTempMessageId());
			if (index !== -1) {
				return [
					...msgs.slice(0, index),
					{
						text: "🔊 Аудиосообщение готово",
						sender: 'server',
						audioData: response.audio_data,
						// format: response.format
					},
					...msgs.slice(index + 1)
				];
			}
			return msgs;
		});

		await scrollToBottom();

	} catch (error) {
		console.error('Error in TTS request:', error);
		typingIndicator.stop("Произошла ошибка при озвучивании сообщения");

		await scrollToBottom();
	}
}

export function sanitize(html: string) {
	return DOMPurify.sanitize(html);
}

export function getUserId(): string {
	const existingUserId = getCookie("userId");
	if (existingUserId) return existingUserId;

	const newUserId = generateUserId();
	setCookie("userId", newUserId, 365);
	return newUserId;
}

function generateUserId(): string {
	return crypto.randomUUID();
}

function setCookie(name: string, value: string, days: number) {
	const expires = new Date();
	expires.setDate(expires.getDate() + days);
	document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}

function getCookie(name: string): string | null {
	const match = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
	return match ? match[2] : null;
}

export function acceptCookies(): boolean {
	localStorage.setItem("cookie_consent", "true");
	return false;
}