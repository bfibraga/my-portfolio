import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { preprocess } from 'svelte/compiler';

/** @type {import('@sveltejs/kit').Config} */
const config = {
 // Consult https://kit.svelte.dev/docs/integrations#preprocessors
 // for more information about preprocessors
 preprocess: [
	vitePreprocess()
 ],
 kit: {
  adapter: adapter(),
  alias: {
	$components: './src/components',
	$lib: './src/lib',	
  },
 }
};

export default config;