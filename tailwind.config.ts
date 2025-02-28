import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary-color) / <alpha-value>)',
        'primary-dark': 'rgb(var(--primary-dark) / <alpha-value>)',
        'primary-light': 'rgb(var(--primary-light) / <alpha-value>)',
        secondary: 'rgb(var(--secondary-color) / <alpha-value>)',
        'light-text': 'rgb(var(--light-text) / <alpha-value>)',
        'light-gray': 'rgb(var(--light-gray) / <alpha-value>)',
        'medium-gray': 'rgb(var(--medium-gray) / <alpha-value>)',
        'dark-bg': 'rgb(var(--dark-bg) / <alpha-value>)'
      },
      textColor: {
        DEFAULT: 'rgb(var(--text-color) / <alpha-value>)'
      }
    },
  },
  plugins: [],
} satisfies Config