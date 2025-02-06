<script lang="ts">
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import { sendMessageToServer, fetchChatHistory } from '$lib/api';
	import type { BlacksmithServerResponse, MessageSender } from '$lib/types';
	import { tick } from 'svelte';
	import "./ChatUI.svelte.css";
	import { copyToClipboard, speakMessage, sanitize, getUserId, acceptCookies } from '$lib/utils';
	import { TypingIndicator } from '$lib/typing-indicator';
	import WaveSurfer from 'wavesurfer.js';
	import type { Message } from '$lib/types';


	const messages = writable<Message[]>([]);
	let userMessage = '';
	let messagesContainer: HTMLDivElement;
	let userId: string;
	let app_name = "w3a_web";
	let showCookieNotice = true;
	let wavesurfers: WaveSurfer[] = [];

	let micNotice = false;

	onMount(async () => {
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
			console.error("Error processing chat history fetching request:", error);
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
				app_name: "w3a_web"
			});

			typingIndicator.stop(response.text);
			await scrollToBottom();
		} catch (error) {
			console.error('Error sending request to server:', error);
			typingIndicator.stop("Произошла ошибка при отправке сообщения");
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

		const wavesurfer = WaveSurfer.create({
			container,
			height: 48,
			waveColor: 'rgba(62, 73, 101, 0.4)',
			progressColor: 'rgba(62, 73, 101, 0.8)',
			cursorColor: 'rgba(62, 73, 101, 0.8)',
			barWidth: 2,
			barGap: 1,
			barRadius: 3,
			normalize: true,
			fillParent: true,
			autoplay: false,
			interact: true,
			dragToSeek: true,
			mediaControls: true
		});

		wavesurfer.load(audioUrl);
		wavesurfers.push(wavesurfer);

		return wavesurfer;
	}

	function showMicNotice() {
		micNotice = true;
		setTimeout(() => micNotice = false, 2000);
	}
</script>

<div class="chat-box">
	<div class="header-banner-container">
		<h2>This is a place for slogan<br />or another call-to-action text!</h2>
		<img src="/logo_black.png" alt="Chat Logo" class="chat-logo" />
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
							<button class="copy-btn" on:click={() => copyToClipboard(message.text)} aria-label="Копировать сообщение" title="Копировать сообщение">
								<img src="/copy-icon-white.png" alt="Copy"/>
							</button>

							<button class="speak-btn" on:click={() => speakMessage(message.text, userId, messages, scrollToBottom)} aria-label="Озвучить сообщение" title="Озвучить сообщение">
								<img src="/speak-icon.png" alt="Speak"/>
							</button>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>

	<div class="bottom-row">
		<button class="mic-btn" on:click={showMicNotice}>
			<img src="/mic.png" alt="voice message"/>
		</button>

		<input
			type="text"
			bind:value={userMessage}
			placeholder="Type your message here..."
			class="input-field"
			on:keydown={(e) => e.key === 'Enter' && sendMessage()}
		/>

		<button on:click={sendMessage} class="send-btn">Send</button>
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
