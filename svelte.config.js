import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			strict: true,
			fallback: null
		}),
		paths: {
			base: '/blacksmith_web'
		}
	},
	preprocess: vitePreprocess()
};

export default config;