/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl' : '20px 20px 6px #899',
        'btn' : '2px 4px 4px #999',
      }
    },
  },
  plugins: [],
}

