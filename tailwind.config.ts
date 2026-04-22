import type { Config } from "tailwindcss";
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/modules/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			fontFamily: {
				ASRegular: ['ASRegular', 'system-ui', 'sans-serif'],
				GilroyBold: ['GilroyBold', 'system-ui', 'sans-serif'],
				GilroySemibold: ['GilroySemibold', 'system-ui', 'sans-serif']
			},
			animation: {
				'shiny-text': 'shiny-text 6s infinite',
				'meteor-effect': 'meteor 5s linear infinite'
			},
			keyframes: {
				'shiny-text': {
					'0%, 90%, 100%': {
						'background-position': 'calc(-100% - var(--shiny-width)) 0'
					},
					'30%, 60%': {
						'background-position': 'calc(100% + var(--shiny-width)) 0'
					}
				},
				meteor: {
					'0%': {
						transform: 'rotate(215deg) translateX(0)',
						opacity: '1'
					},
					'70%': {
						opacity: '1'
					},
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: '0'
					}
				}
			},
			transitionDuration: {
				'400': '400ms'
			}
		}
	},
	plugins: [tailwindcssAnimate, require('@tailwindcss/typography')]
} satisfies Config
