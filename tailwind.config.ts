import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: {
          100: '#ffffff',
          200: '#f5f5f5',
          300: '#f0f0f0',
          400: '#ebebeb',
        },
        gray: {
          100: '#2f405b',
        },
        blue: {
          400: '#60a5fa ',
          600: '#2563eb', // Primary blue color
          700: '#1e40af', // Darker blue for hover
        },
      },
    },
  },
  plugins: [],
};
export default config;
