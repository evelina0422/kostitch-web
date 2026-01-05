/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand theme colors
        dark: '#0F0F10', // Primary background (dark/charcoal)
        light: '#F5F5F5', // Light surface/background
        'text-on-dark': '#FFFFFF', // Primary text on dark
        'text-on-light': '#1F1F1F', // Primary text on light
        'border-line': '#E0E0E0', // Border/line
        accent: {
          DEFAULT: '#D32F2F', // Brand accent red
          hover: '#B71C1C', // Brand accent red hover
        },
        // Legacy primary mapping for backward compatibility during transition
        primary: {
          50: '#F5F5F5', // Light surface
          100: '#E0E0E0', // Border line
          600: '#D32F2F', // Brand accent red
          700: '#B71C1C', // Brand accent red hover
        },
      },
    },
  },
  plugins: [],
}
