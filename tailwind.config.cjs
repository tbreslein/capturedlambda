/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#fffcf2",
          secondary: "#ccc5b9",
          // accent: "#ff5733",
          // accent: "#df4c2d",
          accent: "#dfb316",
          neutral: "#403d39",
          "base-100": "#252422",
          info: "#83a598",
          success: "#b8bb26",
          warning: "#d3869b",
          error: "#f87272",
        },
        light: {
          primary: "#656e77",
          secondary: "#cad4df",
          // "accent": "#b2456e",
          accent: "#df4c2d",
          // accent: "#dfb316",
          neutral: "#3b373b",
          "base-100": "#dddbde",
          info: "#1BC4F3",
          success: "#1EAE9B",
          warning: "#f9ec7e",
          error: "#E83B6F",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
