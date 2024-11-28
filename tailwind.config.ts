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
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        heartless: ['Heartless', 'serif'],
        beefour: ['BeeFour','serif'],
        reacleblack: ['ReacleBlack', 'serif'],
        sfpro: ['SfPro', 'serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
