<script lang="ts">
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import { sendMessageToServer, fetchChatHistory } from '$lib/utils/api';
	import type { BlacksmithServerResponse, ContentLink, MessageSender } from '$lib/types/types';
	import { tick } from 'svelte';
	import { copyToClipboard, speakMessage, sanitize, getUserId, acceptCookies } from '$lib/utils/utils';
	import { TypingIndicator } from '$lib/utils/typing-indicator';
	import WaveSurfer from 'wavesurfer.js';
	import type { Message } from '$lib/types/types';
	import { getCookie } from '$lib/utils/utils';
	import { config } from '$lib/config'

	export let app_name: string = config.app_name;
	export let basePath: string = config.basePath;

	const messages = writable<Message[]>([]);
	let userMessage = '';
	let messagesContainer: HTMLDivElement;
	let userId: string;
	let showCookieNotice = true;
	let wavesurfers: WaveSurfer[] = [];
	let micNotice = false;
	let currentContentLinks: ContentLink[] = [];

	onMount(async () => {
		console.log("app_name:", app_name);
		console.log("basePath:", basePath);
		console.log("cssPath:", config.cssPath);

		const linkElement = document.createElement('link');
		linkElement.rel = 'stylesheet';
		linkElement.href = config.cssPath;
		document.head.appendChild(linkElement);

		const currentDomain = window.location.hostname;

		const isDev = currentDomain === 'localhost' || currentDomain === '127.0.0.1';

		if (!isDev && currentDomain !== "0xthecableguy.github.io") {
			basePath = "https://0xthecableguy.github.io" + basePath;
			console.log("Using absolute path for resources:", basePath);
		}

		userId = getUserId();
		console.log("User ID:", userId);

		const urlParams = new URLSearchParams(window.location.search);
		const urlCookieConsent = urlParams.get('cookieConsent');

		if (urlCookieConsent === "true") {
			showCookieNotice = false;
			try {
				localStorage.setItem("cookie_consent", "true");
				sessionStorage.setItem("cookie_consent", "true");
			} catch (e) {
				console.error("Error saving cookie consent from URL:", e);
			}
		} else {
			const isInIframe = window.self !== window.top;
			const localStorageConsent = localStorage.getItem("cookie_consent");
			const sessionStorageConsent = isInIframe ? sessionStorage.getItem("cookie_consent") : null;
			const cookieConsent = getCookie("cookie_consent");

			if (localStorageConsent === "true" || sessionStorageConsent === "true" || cookieConsent === "true") {
				showCookieNotice = false;
			}
		}

		try {
			const chatHistory = await fetchChatHistory(userId, app_name);
			const formattedHistory = chatHistory.map(msg => ({
				text: msg.message,
				sender: msg.sender as MessageSender,
				type: 'text' as const
			}));

			if (formattedHistory.length === 0) {
				messages.set([{
					text: "Привет! Я ваш виртуальный помощник. 🫡\nЧем я могу вам помочь сегодня?",
					sender: 'server',
					type: 'text' as const
				}]);
			} else {
				messages.set([
					...formattedHistory,
					{
						text: "С возвращением!\nЧем могу быть полезен? 😁️",
						sender: 'server',
						type: 'text' as const
					}
				]);
			}

			await scrollToBottom();
		} catch (error) {
			console.error("Error fetching chat history:", error);

			messages.set([{
				text: "Привет! Я ваш виртуальный помощник.\nК сожалению, мне не удалось загрузить историю сообщений, давайте попробуем начать общение сначала.",
				sender: 'server',
				type: 'text' as const
			}]);
		}
	});

	async function sendMessage() {
		if (!userMessage.trim()) return;

		messages.update((msgs) => [...msgs, {
			text: userMessage,
			sender: 'user',
			type: 'text'
		}]);
		await scrollToBottom();

		const userText = userMessage;
		userMessage = '';

		const typingIndicator = new TypingIndicator({ messages });
		typingIndicator.start();
		await scrollToBottom();

		try {
			const response: BlacksmithServerResponse = await sendMessageToServer({
				text: userText,
				user_id: userId,
				app_name
			});

			if (response.extra_data_parsed && Object.keys(response.extra_data_parsed).length > 0) {
				currentContentLinks = Object.entries(response.extra_data_parsed)
					.map(([title, url]) => ({ title, url }))
					.slice(0, 3);
			} else {
				currentContentLinks = [];
			}

			typingIndicator.stop(response.text);
			await scrollToBottom();
		} catch (error) {
			console.error('Error sending request to server:', error);
			typingIndicator.stop("На сервере ведутся технические работы 🛠️<br><br>Пожалуйста, повторите ваш запрос через несколько минут.<br>Мы работаем над улучшением сервиса для вас!");
		}
	}

	export async function scrollToBottom() {
		await tick();
		if (messagesContainer) {
			messagesContainer.scrollTo({ top: messagesContainer.scrollHeight, behavior: "smooth" });
		}
	}

	function handleAcceptCookies() {
		acceptCookies(() => {
			showCookieNotice = false;
		});
	}

	function initAudioPlayer(container: HTMLDivElement, audioUrl: string) {
		if (!audioUrl) return;

		const options = {
			container: container,

			waveColor: '#5608fe',
			progressColor: '#6578f1',
			cursorColor: '#ffffff',
			backgroundColor: '#d5deff',
			mediaControls: true,
			height: 64,
			interact: true,
			dragToSeek: false,
			hideScrollbar: false,
			autoScroll: true,
			autoCenter: true,
			normalize: true,
			fillParent: true,
		}

		const wavesurfer = WaveSurfer.create(options);

		wavesurfer.load(audioUrl);
		wavesurfers.push(wavesurfer);

		return wavesurfer;
	}

	function showMicNotice() {
		micNotice = true;
		setTimeout(() => micNotice = false, 3000);
	}
</script>

<div class="chat-box">
	<div class="header-banner-container">
		{#if app_name === "blacksmith_web"}
			<img src="{basePath}/person-icon.png" alt="Person" class="banner-person" />
		{/if}
	</div>

	<div class="messages-container" bind:this={messagesContainer}>
		{#each $messages as message}
			<div class="message-wrapper {message.sender === 'user' ? 'user-message' : 'server-message'}">
				<div class="message-container">
					<div class="message">
						{#if message.type === 'text'}
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							<p>{@html sanitize(message.text)}</p>
						{:else if message.type === 'audio'}
							<div class="audio-message">
								<div
									class="wavesurfer-container"
									use:initAudioPlayer={message.audioUrl}
								>
									<div class="wave"></div>
								</div>
							</div>
						{/if}
					</div>

					{#if message.sender === 'server' && message.type === 'text'}
						<div class="message-actions">
							<button class="copy-btn" on:click={() => copyToClipboard(message.text)} aria-label="Copy" title="Copy message">
								<img src="{basePath}/copy_icon.png" alt="Copy"/>
							</button>

							<button class="speak-btn" on:click={() => speakMessage(message.text, userId, messages, scrollToBottom, app_name)} aria-label="Voice message" title="Voice message">
								<img src="{basePath}/speak_icon.png" alt="Speak"/>
							</button>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>

	{#if currentContentLinks.length > 0}
		<div class="content-links-container">
			<p class="content-links-title">• УРОКИ ПО ТЕМЕ ВАШЕГО ЗАПРОСА •</p>
			<p class="content-links-subtitle">функция рекомендаций находится в стадии тестирования</p>
			<div class="content-links-buttons">
				{#each currentContentLinks as link}
					<button class="content-link-btn" on:click={() => window.open(link.url, '_blank')} aria-label="Open in a new tab" title="Open in a new tab">
						{link.title}
					</button>
				{/each}
			</div>
		</div>
	{/if}

	<div class="bottom-row">
		<button class="mic-btn" on:click={showMicNotice}>
			<img src="{basePath}/mic_icon.png" alt="Voice Message"/>
		</button>

		<input
			type="text"
			bind:value={userMessage}
			placeholder="Type your message here..."
			class="input-field"
			on:keydown={(e) => e.key === 'Enter' && sendMessage()}
		/>

		<button on:click={sendMessage} class="send-btn">
			<img src="{basePath}/mini_logo.png" alt="Send" />
		</button>
	</div>

	{#if app_name === "blacksmith_web"}
		<div class="basement">
			<img src="{basePath}/logo_black.png" alt="Chat Basement Logo" class="basement-logo" />
		</div>
	{/if}

	{#if micNotice}
		<div class="mic-notice">
			<p>
				🎤<br />Терпение, мой друг<br />Эта функция будет доступна<br />чуть позже
			</p>
		</div>
	{/if}
</div>

{#if showCookieNotice}
	<div class="cookie-notice">
		<p>
			Мы используем файлы cookie для улучшения работы приложения<br />
			Продолжая использование, вы соглашаетесь с нашей политикой cookie
		</p>
		<button on:click={handleAcceptCookies}>Ok</button>
	</div>
{/if}
