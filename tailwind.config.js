/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
  },
  theme: {
    extend: {
      scale: {
        '200': '2', // Adds a scale of 2 (200%)
        '250': '2.5', // Adds a scale of 2.5 (250%)
        '400':'4',
        '500': '5', // Adds a scale of 5 (500%)
        '800': '8', // Adds a scale of 8 (800%)
      }
    }
  },
  plugins: [],
}


