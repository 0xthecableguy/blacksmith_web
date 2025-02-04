<script lang="ts">
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import { sendMessageToServer, fetchChatHistory } from '$lib/api';
	import type { BlacksmithServerResponse } from '$lib/types';
	import { tick } from 'svelte';
	import "./ChatUI.svelte.css";
	import { copyToClipboard, speakMessage, sanitize, getUserId } from '$lib/utils';


	const messages = writable<{ text: string; sender: 'user' | 'server' }[]>([]);
	let userMessage = '';
	let messagesContainer: HTMLDivElement;
	let userId: string;
	let app_name = "w3a_web";

	onMount(async () => {
		userId = getUserId();
		console.log("User ID:", userId);

		try {
			const chatHistory = await fetchChatHistory(userId, app_name);
			messages.set(chatHistory.map(msg => ({
				text: msg.message,
				sender: msg.sender as 'user' | 'server'
			})));
		} catch (error) {
			console.error("Error processing chat history fetching request:", error);
		}
	});

	async function sendMessage() {
		if (!userMessage.trim()) return;

		messages.update((msgs) => [...msgs, { text: userMessage, sender: 'user' }]);
		await scrollToBottom();

		const userText = userMessage;
		userMessage = '';

		try {
			const response: BlacksmithServerResponse = await sendMessageToServer({
				text: userText,
				user_id: userId,
				app_name: "w3a_web"
			});

			messages.update((msgs) => [...msgs, { text: response.text, sender: 'server' }]);
			await scrollToBottom();
		} catch (error) {
			console.error('Error sending request to server:', error);
		}
	}

	async function scrollToBottom() {
		await tick();
		if (messagesContainer) {
			messagesContainer.scrollTo({ top: messagesContainer.scrollHeight, behavior: "smooth" });
		}
	}
</script>

<div class="chat-box">
	<img src="/w3a_logo.png" alt="Chat Logo" class="chat-logo" />
	<h2>This is a place for slogan or another call-to-action text!</h2>

	<div class="messages-container" bind:this={messagesContainer}>
		{#each $messages as message}
			<div class="message-wrapper {message.sender === 'user' ? 'user-message' : 'server-message'}">
				<div class="message-container">
					<div class="message">
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						<p>{@html sanitize(message.text)}</p>
					</div>

					{#if message.sender === 'server'}
						<div class="message-actions">
							<button class="copy-btn" on:click={() => copyToClipboard(message.text)} aria-label="Копировать сообщение" title="Копировать сообщение">
								<img src="/copy-icon-white.png" alt="Copy"/>
							</button>


							<button class="speak-btn" on:click={() => speakMessage(message.text)} aria-label="Озвучить сообщение" title="Озвучить сообщение">
								<img src="/speak-icon.png" alt="Speak"/>
							</button>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>

	<div class="bottom-row">
		<button class="mic-btn">
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
</div>
