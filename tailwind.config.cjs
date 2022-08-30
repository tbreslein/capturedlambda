/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#edddb8",
          secondary: "#dcc080",
          accent: "#dfb316",
          neutral: "#292929",
          "base-100": "#3d3d3d",
          info: "#83a598",
          success: "#b8bb26",
          warning: "#d3869b",
          error: "#f87272",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
