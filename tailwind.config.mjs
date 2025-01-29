import { sys } from 'typescript'

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// Aquí puedes agregar tus personalizaciones si lo deseas
		},
	},
	plugins: [],
}
