import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        alfanet: {
          red: "#E30613",
          darkred: "#62000B",
          deepred: "#3D0007",
          black: "#111111",
          lightgray: "#F7F7F7",
          border: "#E5E5E5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        none: "none",
      },
      dropShadow: {
        none: "none",
      },
    },
  },
  plugins: [],
};

export default config;
