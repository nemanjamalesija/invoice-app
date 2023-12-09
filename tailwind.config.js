/** @type {import('tailwindcss').Configuration} */

import colors from "tailwindcss/colors";

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/vue-tailwind-datepicker/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "gray-0": "#18212f",
        "gray-50": "#111827",
        "blue-100": "#075985",

        "vtd-primary": colors.sky,
        "vtd-secondary": colors.gray,
      },
    },
  },
  plugins: [],
};
