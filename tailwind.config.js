/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: '#ffffff',
          10: '#F1EEE6',
          15: '#D9D9D9',
          20: '#DADADA',
          40: '#6C6C6C',
          60: '#B3B3B3',
          90: '#2A2A2D',
          100: '#000000',
          120: 'transparent',
        },
        primary: {
          40: '#E9FE47',
          90: '#3C3784',
          100: '#2a275e',
        },
        error: {
          60: '#dc3838',
        },
      },
      fontFamily: {
        sans: ['Archivo', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  },
};
