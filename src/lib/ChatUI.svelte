<script lang="ts">
	import { writable } from 'svelte/store';
	import { tick } from 'svelte';
	import "./ChatUI.svelte.css";

	const messages = writable<{ text: string; sender: 'user' | 'server' }[]>([]);
	let userMessage = '';
	let messagesContainer: HTMLDivElement;

	function sendMessage() {
		if (!userMessage.trim()) return;

		messages.update((msgs) => [...msgs, { text: userMessage, sender: 'user' }]);
		scrollToBottom();

		messages.update((msgs) => [
			...msgs,
			{
				text: "Hello! This is a test answer from server to check if all CSS is correct.",
				sender: 'server'
			}
		]);
		scrollToBottom();

		userMessage = '';
	}

	function copyToClipboard(text: string) {
		navigator.clipboard.writeText(text).then(() => {
			console.log("Скопировано:", text);
		}).catch(err => {
			console.error("Ошибка копирования:", err);
		});
	}

	function speakMessage(text: string) {
		console.log("Озвучивание текста:", text);
	}

	async function scrollToBottom() {
		await tick();
		if (messagesContainer) {
			messagesContainer.scrollTo({ top: messagesContainer.scrollHeight, behavior: "smooth" });
		}
	}
</script>

<div class="chat-box">
	<img src="/logo_black.png" alt="Chat Logo" class="chat-logo" />
	<h2>This is a place for slogan or another call-to-action text!</h2>

	<div class="messages-container" bind:this={messagesContainer}>
		{#each $messages as message}
			<div class="message-wrapper {message.sender === 'user' ? 'user-message' : 'server-message'}">
				<div class="message-container">
					<div class="message">
						<p>{message.text}</p>
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
