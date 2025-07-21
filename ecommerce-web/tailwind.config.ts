/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ajuste conforme seu projeto
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#50E3C2',
        lightBg: '#F7F9FC',
        cardBg: '#FFFFFF',
        textPrimary: '#333333',
        textSecondary: '#666666',
        borderColor: '#E0E0E0',
      },
    },
  },
  plugins: [],
}
