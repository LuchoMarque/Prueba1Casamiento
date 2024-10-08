import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      gray: {
        200: '#f7f6f2',
        300: '#ffffff8c',
        500: '#ded4c5',
        600: '#c0a570',
        800: '#06263a',
        900: '#00000012',
      },
      },
      animation: {
        explode: 'explode 0.6s forwards',
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
      },
      keyframes: {
        explode: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '30%': { transform: 'scale(0.5)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }, 
    },
  },
}, 
  plugins: [],
};
export default config;
