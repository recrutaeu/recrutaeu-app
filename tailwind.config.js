/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      neutral: {
        0: '#ffffff',
        10: '#F1EEE6',
        15: '#D9D9D9',
        20: '#DADADA',
        40: '#6C6C6C',
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
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2Xl': '22px',
      '3Xl': '24px',
      '4Xl': '28px',
      '5Xl': '32px',
      '6Xl': '40px',
      '7Xl': '48px',
      '8Xl': '56px',
      '9Xl': '64px',
      '10Xl': '72px',
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
};
