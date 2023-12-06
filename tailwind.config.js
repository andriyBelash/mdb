/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    // screens: {
    //   sm: '639.98px',
    //   md: '767.98px',
    //   lg: '1023.98px',
    //   xl: '1199.98px',
    // },
    colors: {
      'dark': '#121829',
      'primary': '#7B6EF6',
      'white': '#EBE9FE',
      'grey': '#767E94',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    }
  },
  plugins: []
}
