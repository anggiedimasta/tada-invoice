/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	mode: 'jit',
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: ['./index.html', './src/**/*.{vue,ts}'],
	},
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Work Sans',
					'sans-serif',
					...defaultTheme.fontFamily.sans,
				],
			},
		},
	},
	plugins: [],
}
