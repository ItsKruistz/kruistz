/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
        '"Pretendard Std Variable", sans-serif',
          {
            fontFeatureSettings: '"cv03", "cv04", "cv10", "cv11", "cv05", "ss10"',
          },
        ],
      },
    },
  },
  plugins: [],
}

