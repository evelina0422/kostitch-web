/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark luxury theme colors
        dark: '#1d171e', // Deep purple-black background
        light: '#2a232c', // Slightly lighter dark for sections
        beige: '#EFE8DE', // Light warm beige for cards (original)
        'text-on-dark': '#ffffff', // Pure white for maximum contrast
        'text-on-light': '#3A2618', // Dark brown text for light backgrounds (original)
        'border-line': '#D4C4B0', // Warm brown border (original)
        accent: {
          DEFAULT: '#c82f3c', // Vibrant luxury red
          hover: '#931e35', // Darker red for hover states
          gold: '#d4af37', // Luxury gold accent
        },
        // Legacy primary mapping for backward compatibility
        primary: {
          50: '#2a232c', // Lighter dark
          100: '#3d353f', // Border color
          600: '#c82f3c', // Accent red
          700: '#931e35', // Accent red hover
        },
      },
    },
  },
  plugins: [],
}
