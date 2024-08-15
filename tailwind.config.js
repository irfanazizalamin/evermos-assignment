/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        h1: ['80px', 1.7],
        h2: ['60px', 1.7],
        h3: ['40px', 1.7],
        h4: ['30px', 1.7],
        h5: ['24px', 1.7],
        h6: ['20px', 1.7],
        body: ['16px', 1.7],
        caption: ['14px', 1.5],
        small: ['12px', 1.5],
        tiny: ['10px', 1.4],
      },
      fontWeight: {
        bold: 700,
        semibold: 600,
        medium: 500,
        regular: 400,
        light: 300,
      },
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'accent': '#2993AD',
        'danger': '#F46363',
        'warning': '#FF9D3B',
        'info': '#57C6EE',
        'success': '#2ED477',
        'black': {
          DEFAULT: '#222222',
          900: '#222222',
          800: '#333333',
          700: '#555555',
          600: '#7E7E7E',
          500: '#D3D3D3',
          400: '#ECECEC',
          300: '#FAFAFA',
        },
        'primary-lighten': 'var(--color-primary-lighten)',
        'secondary-lighten': 'var(--color-secondary-lighten)',
        'accent-lighten': '#ECF8FF',
        'danger-lighten': '#FFEEEE',
        'warning-lighten': '#FFF5EC',
        'info-lighten': '#EDFBFF',
        'success-lighten': '#E5F9EC',
        'custom-yellow': '#FCCD1D',
        'accent-darken': '#1A7288',
      },
    },
  },
}
