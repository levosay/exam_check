/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '48px',
        '6': '64px',
        '7': '80px'
      },
      maxWidth: {
        '1520': '1520px'
      },
      minWidth: {
        '100': '100px',
        '200': '200px',
        '300': '300px'
      },
      width: {
        '100': '100px',
        '200': '200px',
        '300': '300px'
      }
    },
    colors: {
      'main-dark': '#0f172a',
      'main-light': '#1e293b',
      'white': '#E2E8F0',
      'gray': '#CBD5E1',
      'gray-light': '#CBD5E1',
      'prim': '#38BDF8',
      'prim-light': '#7DD3FC',
      'second-prime': '#be0e69',
      'second-prime-light': '#F472B6'
    },
    fontFamily: {
      sans: ['MavenPro', 'sans-serif']
    }
  },
  plugins: [],
  corePlugins: {
    preflight: true
  }
}
