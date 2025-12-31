/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0a192f',
        'secondary': '#112240',
        'accent': '#5dade2',
        'text-primary': '#ffffff',
        'text-secondary': '#8892b0',
        'terminal-border': 'rgba(93, 173, 226, 0.3)',
        'terminal-bg': 'rgba(10, 25, 47, 0.9)',
        'terminal-prompt': '#50fa7b',
        'terminal-user': '#ff79c6',
      },
      fontFamily: {
        'mono': ['SF Mono', 'Fira Code', 'Roboto Mono', 'monospace'],
        'sans': ['Calibre', 'Inter', 'San Francisco', 'SF Pro Text', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

