/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'SF Mono',
          'Monaco',
          'Inconsolata',
          'Fira Code',
          'Consolas',
          'monospace',
        ],
      },
      colors: {
        terminal: {
          bg: '#2E3440',
          'bg-secondary': '#3B4252',
          border: '#4C566A',
          text: '#E5E9F0',
          dim: '#D8DEE9',
          accent: '#88C0D0',
          success: '#A3BE8C',
          warning: '#EBCB8B',
          error: '#BF616A',
        },
      },
    },
  },
  plugins: [],
}
