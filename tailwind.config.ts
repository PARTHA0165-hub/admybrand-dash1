import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme"; // ✅ FIXED import

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
  borderColor: {
    border: "hsl(var(--border))",
  },
  colors: {
    border: "hsl(var(--border))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
  },
  fontFamily: {
    sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
  },
  // Optional radius if needed
  borderRadius: {
    lg: `var(--radius)`,
  },
},
  },
  plugins: [],
};

export default config;
