import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "blue-light": "#4DE1FF",
        primary: {
          100: "#CAF0F8",
          200: "#ADE8F4",
          300: "#90E0EF",
          400: "#48CAE4",
          500: "#00B4D8",
          600: "#0096C7",
          700: "#0077B6",
          800: "#023E8A",
          900: "#03045E",
        },
      },
      fontSize: {
        "title-1": "70px",
        "title-2": "54px",
        "title-3": "42px",
        "title-4": "38px",
        "title-5": "32px",
        "title-6": "28px",
        "title-7": "24px",
        "title-8": "20px",
        "body-1": "16px",
        "body-2": "14px",
        "body-3": "12px",
        "body-4": "10px",
        "body-5": "8px",
      },
    },
  },
  plugins: [],
} satisfies Config;
