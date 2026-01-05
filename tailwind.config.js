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
        dark: '#5A3E2B', // Primary brown (replaces black)
        light: '#FAF7F2', // Off-white background
        beige: '#EFE8DE', // Light warm beige for sections/cards
        'text-on-dark': '#FAF7F2', // Off-white text on brown
        'text-on-light': '#3A2618', // Dark brown for headings/nav (replaces black)
        'border-line': '#D4C4B0', // Warm brown border
        accent: {
          DEFAULT: '#D32F2F', // Brand accent red (keep existing)
          hover: '#B71C1C', // Brand accent red hover (keep existing)
        },
        // Legacy primary mapping for backward compatibility during transition
        primary: {
          50: '#FAF7F2', // Off-white background
          100: '#D4C4B0', // Warm brown border
          600: '#D32F2F', // Brand accent red
          700: '#B71C1C', // Brand accent red hover
        },
      },
    },
  },
  plugins: [],
}
