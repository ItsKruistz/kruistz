/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        mytheme: {
          "base-100": "#292524",
          },
        },
      ],
    base: false,
    styled: false,
    utils: true,
    prefix: "",
    logs: false,
    themeRoot: ":root",
  },
}

