import type { Writable } from 'svelte/store';

interface Message {
	id?: number;
	text: string;
	sender: 'user' | 'server';
}

interface TypingIndicatorConfig {
	messages: Writable<Message[]>;
	dotsUpdateInterval?: number;
	baseText?: string;
}

export class TypingIndicator {
	private messages: Writable<Message[]>;
	private isAnimating: boolean = false;
	private intervalId?: number;
	private tempMessageId: number;
	private dotsUpdateInterval: number;
	private baseText: string;

	constructor({
								messages,
								dotsUpdateInterval = 500,
								baseText = "печатает"
							}: TypingIndicatorConfig) {
		this.messages = messages;
		this.tempMessageId = Date.now();
		this.dotsUpdateInterval = dotsUpdateInterval;
		this.baseText = baseText;
	}

	start(): void {
		this.isAnimating = true;
		let dots = 1;

		this.messages.update(msgs => [
			...msgs,
			{
				id: this.tempMessageId,
				text: `${this.baseText} .`,
				sender: 'server'
			}
		]);

		this.intervalId = setInterval(() => {
			if (!this.isAnimating) return;
			dots = (dots % 3) + 1;
			this.messages.update(msgs => {
				const index = msgs.findIndex(m => 'id' in m && m.id === this.tempMessageId);
				if (index !== -1) {
					msgs[index] = {
						id: this.tempMessageId,
						text: `${this.baseText} ${'.'.repeat(dots)}`,
						sender: 'server'
					};
				}
				return msgs;
			});
		}, this.dotsUpdateInterval);
	}

	stop(replacementMessage: string): void {
		this.isAnimating = false;
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}

		this.messages.update(msgs => {
			const index = msgs.findIndex(m => 'id' in m && m.id === this.tempMessageId);
			if (index !== -1) {
				return [
					...msgs.slice(0, index),
					{ text: replacementMessage, sender: 'server' },
					...msgs.slice(index + 1)
				];
			}
			return msgs;
		});
	}
}