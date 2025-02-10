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
      boxShadow: {
        'custom-1': '0px 0px 0px 1px #0000000A',
        'custom-2': '0px 1px 1px -0.5px #2A33450A',
        'custom-3': '0px 3px 3px -1.5px #2A33460A',
        'custom-4': '0px 6px 6px -3px #2A33460A',
      },
    },
  },
  plugins: [],
} satisfies Config;
