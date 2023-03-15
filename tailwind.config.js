/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '48px'
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
