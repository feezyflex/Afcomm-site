/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',   // Small devices (landscape phones, 640px and up)
      'md': '1024px',   // Medium devices (tablets, 768px and up)
      'lg': '1024px',  // Large devices (desktops, 1024px and up)
      'xl': '1280px',  // Extra large devices (large desktops, 1280px and up)
      '2xl': '1536px', // 2X large devices (larger desktops, 1536px and up)
    },
    container: {
      padding: '16px',
    },
    extend: {
      extend: {
        zIndex: {
          1000: '1000',
        },
      },
    },
  },
  plugins: [],
}