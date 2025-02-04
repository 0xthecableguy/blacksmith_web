import DOMPurify from 'dompurify';

export function copyToClipboard(text: string) {
	navigator.clipboard.writeText(text)
		.then(() => console.log("Copied:", text))
		.catch(err => console.error("Error copying:", err));
}

export function speakMessage(text: string) {
	console.log("TTS:", text);
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
