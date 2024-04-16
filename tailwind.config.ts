import type { Config } from "tailwindcss"
const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: "",
	theme: {
		darkMode: 'selector',
		screens: {
			xs: '390px',
			sm: '435px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		},
		extend: {

			animation: {
				reveal: 'reveal 0.7s ease-in-out'
			},
			fontFamily: {
				sans: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
				mono: ['var(--font-jetbrains-mono)', ...defaultTheme.fontFamily.mono]
			},
			keyframes: {
				reveal: {
					'0%': { opacity: "0", filter: 'brightness(1) blur(15px)', scale: '1.0125' },
					'10%': { opacity: "1", filter: 'brightness(1.25) blur(10px)' },
					'100%': { opacity: "1", filter: 'brightness(1) blur(0)', scale: '1' }
				}
			},
			lineHeight: {
				slacker: '1.75'
			},
			height: {
				'dynamic-screen': '100dvh'
			},
			minHeight: {
				'dynamic-screen': '100dvh'
			},
			maxHeight: {
				'dynamic-screen': '100dvh'
			}
		},
	},
	plugins: [require('@tailwindcss/container-queries'), require('tailwindcss-animate')],
	future: {
		hoverOnlyWhenSupported: true
	}
} satisfies Config

export default config