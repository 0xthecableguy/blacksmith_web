import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

export default defineConfig({
	plugins: [
		svelte({
			compilerOptions: {
				customElement: true
			},
			emitCss: true
		})
	],
	resolve: {
		alias: {
			$lib: resolve('./src/lib')
		}
	},
	build: {
		lib: {
			entry: 'src/lib/components/ChatUI.svelte',
			name: 'BlacksmithLabChatUI',
			fileName: (format) => `blacksmithlab-chat-ui.${format}.js`
		},
		outDir: 'static/chat-component',
		emptyOutDir: true
	}
});