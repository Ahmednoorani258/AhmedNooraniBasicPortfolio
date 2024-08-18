import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      boxShadow: {
        'card-hover': '0 15px 30px rgba(0, 0, 0, 0.5)',
      },
      scale: {
        '102': '1.2',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'custom-ease': 'ease-in-out',
      }
    },
  },
  plugins: [],
}

export default config;
