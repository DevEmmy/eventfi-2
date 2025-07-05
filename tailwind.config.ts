import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "purple-100": "#845EC2",
        "purple-200": "#634699",
        "purple-300": "#4C3575",
        "purple-400": "#362251",
        "purple-500": "#211433",
        "purple-600": "#0E0918",
        "purple-700": "#000000",
      },
    },
  },
  plugins: [],
} satisfies Config;
