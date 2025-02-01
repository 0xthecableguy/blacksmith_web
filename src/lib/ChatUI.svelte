<script lang="ts">
	import { writable } from 'svelte/store';
	import { tick } from 'svelte';

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

<style>
    .chat-box {
        width: min(85%, 800px);
        height: 90%;
        /*border-radius: 10px;*/
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.6));
				padding: 20px;
    }

    .chat-logo {
        margin-top: 30px;
				width: 220px;
        height: auto;
				align-self: center;
				margin-bottom: 20px;
    }

    h2 {
        text-align: center;
        color: rgba(0, 0, 0, 0.8);
				font-size: 16px;
        font-family: 'Advent Pro', sans-serif;
        margin-bottom: 20px;
    }

    .messages-container {
				height: 65%;
        padding: 10px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 16px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .message-wrapper {
        display: flex;
        width: 100%;
    }

    .message-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: fit-content;
        max-width: 75%;
    }

    .message-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 5px;
    }

    .message-actions {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        margin-top: 5px;
        gap: 8px;
    }

    .user-message {
        justify-content: flex-end;
    }

    .server-message {
        position: relative;
        /*padding-bottom: 5px;*/
    }

    .message {
        min-width: 30%;
				padding: 10px;
        word-wrap: break-word;
    }

		.server-message .message {
				background: #282a36;
				color: white;
        border-radius: 15px 15px 15px 0px;
		}

    .user-message .message {
        background: rgba(255, 255, 255, 0.6);
        color: black;
        border-radius: 15px 15px 0px 15px;
    }

    .copy-btn, .speak-btn {
        cursor: pointer;
        opacity: 0.6;
        transition: opacity 0.2s ease-in-out;
        background: none;
        border: none;
        padding: 0;
        display: flex;
        align-items: center;
    }

    .copy-btn:hover, .speak-btn:hover {
        opacity: 1;
    }

    .copy-btn img,
    .speak-btn img {
        width: 18px;
        height: 18px;
    }

    .bottom-row {
        display: flex;
        align-items: center;
        /*padding: 10px;*/
        background: transparent;
        margin-top: auto;
				height: 4%;
        justify-content: space-between;
        gap: 2%;
    }

    .input-field {
        height: 100%;
				flex: 1;
        border: none;
        outline: none;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        border-radius: 5px;
        padding-left: 10px;
        padding-right: 10px;
        font-family: 'Advent Pro', sans-serif;
    }

    .mic-btn {
        border: none;
        background: rgba(0, 0, 0, 0.8);
        cursor: pointer;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1 / 1;
        height: 100%;
    }

    .mic-btn img {
        width: 27px;
        height: 27px;
    }

    .send-btn {
        border: none;
        background: rgba(166, 0, 0, 0.8);
        color: white;
        cursor: pointer;
        border-radius: 5px;
        width: 10%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Advent Pro', sans-serif;
    }

    .send-btn:hover {
        background: #0056b3;
    }

		.mic-btn:hover {
				background: #0056b3;
		}

</style>

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
