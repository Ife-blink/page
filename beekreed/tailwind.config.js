/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-general)'],
        mono: ['var(--font-mono)'],
      },

    },
    screens: {
      'sm': '0px',
      // => @media (min-width: 640px) { ... }

      'md': '640px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
