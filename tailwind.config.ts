import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      minHeight: {
        '45': '180px', 
      },
      colors: {
        brand: {
          sidebar: "#1e293b", 
          primary: "#2563eb", 
          secondary: "#64748b", 
          success: "#10b981", 
          danger: "#ef4444",  
          warning: "#f59e0b", 
          bg: "#141516",      
        },
      },
    },
  },
  plugins: [typography],
};
export default config;