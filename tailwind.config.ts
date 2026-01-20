import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '390px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1300px',
      '2xl': '1920px',
    },
    extend: {},
  },
  plugins: [],
};

export default config;
