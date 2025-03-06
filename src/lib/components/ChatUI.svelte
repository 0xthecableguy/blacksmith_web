<script lang="ts">
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import { sendMessageToServer, fetchChatHistory } from '$lib/utils/api';
	import type { BlacksmithServerResponse, MessageSender } from '$lib/types/types';
	import { tick } from 'svelte';
	import "../styles/ChatUI.svelte.css";
	import { copyToClipboard, speakMessage, sanitize, getUserId, acceptCookies } from '$lib/utils/utils';
	import { TypingIndicator } from '$lib/utils/typing-indicator';
	import WaveSurfer from 'wavesurfer.js';
	import type { Message } from '$lib/types/types';

	export let app_name: string = "blacksmith_web";
	export let basePath: string = "/blacksmith_web/chat_component_res";

	const messages = writable<Message[]>([]);
	let userMessage = '';
	let messagesContainer: HTMLDivElement;
	let userId: string;
	let showCookieNotice = true;
	let wavesurfers: WaveSurfer[] = [];
	let micNotice = false;

	onMount(async () => {
		console.log("basePath:", basePath);

		const currentDomain = window.location.hostname;

		if (currentDomain !== "0xthecableguy.github.io") {
			basePath = "https://0xthecableguy.github.io/blacksmith_web/chat_component_res";
			console.log("Using absolute path for resources:", basePath);
		}

		userId = getUserId();
		console.log("User ID:", userId);

		const cookieConsent = localStorage.getItem("cookie_consent");
		if (cookieConsent === "true") {
			showCookieNotice = false;
		}

		try {
			const chatHistory = await fetchChatHistory(userId, app_name);
			messages.set(chatHistory.map(msg => ({
				text: msg.message,
				sender: msg.sender as MessageSender,
				type: 'text'
			})));

			await scrollToBottom();
		} catch (error) {
			console.error("Error fetching chat history:", error);
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

			typingIndicator.stop(response.text);
			await scrollToBottom();
		} catch (error) {
			console.error('Error sending request to server:', error);
			typingIndicator.stop("Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже");
		}
	}

	export async function scrollToBottom() {
		await tick();
		if (messagesContainer) {
			messagesContainer.scrollTo({ top: messagesContainer.scrollHeight, behavior: "smooth" });
		}
	}

	function handleAcceptCookies() {
		showCookieNotice = acceptCookies();
	}

	function initAudioPlayer(container: HTMLDivElement, audioUrl: string) {
		if (!audioUrl) return;

		const options = {
			container: container,

			waveColor: '#6578fe',
			progressColor: '#bec5fc',
			cursorColor: '#d5deff',
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

	<div class="basement">
		<img src="{basePath}/logo_black.png" alt="Chat Basement Logo" class="basement-logo" />
	</div>

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
