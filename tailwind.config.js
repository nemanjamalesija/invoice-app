/** @type {import('tailwindcss').Configuration} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-0': '#18212f',
        'gray-50': '#111827',
        'blue-100': '#075985'
      }
    }
  },
  plugins: []
};
