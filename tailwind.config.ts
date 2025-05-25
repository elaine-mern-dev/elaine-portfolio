import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  plugins: [],
};

export default config;
