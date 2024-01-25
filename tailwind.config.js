/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-poppins)', fontFamily.sans],
        secondary: ['var(--font-montserrat)', fontFamily.sans]
      },
      colors: {
        dark: {
          DEFAULT: '#3F4149',
          100: '#03050D'
        },
        accent: {
          DEFAULT: '#6532F3'
        },
        theme: {
          DEFAULT: '#fb6d3a',
          light: '#fbd460',
          100: '#ffe7c8'
        },
        light: {
          DEFAULT: '#fafafa',
          100: '#f0f0f0'
        }
      },
      fontSize: {
        50: '50px',
        32: '32px',
        17: '17px'
      },
      lineHeight: {
        50: '50px',
        54: '54px',
        26: '26px',
        30: '30px'
      },
      boxShadow: {
        primary: '0 8px 50px rgba(0,0,0,.06)'
        // 'secondary':'0px 10px 45px 0px rgba(0, 0, 0, 0.10)',
        // 'tertiory':'0px 5px 10px 0px rgba(0, 0, 0, 0.10)',
        // 'forth':'0px 10px 25px 0px rgba(5, 101, 250, 0.15)',
      },
      backgroundImage: {
        // 'blog':'url(../images/blog-hero.png)',
        // 'signin':'url(../images/signn-main.png)',
      },
      spacing: {
        15: '60px',
        7.5: '30px'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
