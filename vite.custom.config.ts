import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [
		svelte({
			compilerOptions: {
				customElement: true,
			},
		}),
	],
	build: {
		lib: {
			entry: 'src/ChatWC.svelte',
			name: 'ChatComponent',
			fileName: (format) => `chat-component.${format}.js`,
			formats: ['es', 'umd'],
		},
	},
});
