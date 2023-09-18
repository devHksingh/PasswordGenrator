/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'grayish-200':'hsl(252, 11%, 91%)',
        'grayish-400': 'hsl(251, 9%, 53%)',
        'grayish-700':'hsl(248, 10%, 15%)',
        'grayish-900': 'hsl(248, 15%, 11%)',
        'green-apple': 'hsl(127, 100%, 82%)',
        'red-bright': 'hsl(0, 91%, 63%)',
        'orange': 'hsl(13, 95%, 66%)',
        'yellow': 'hsl(42, 91%, 68%)',

      },
      fontFamily: {
          jetbrainsmono: ['Jet Brains Mono', 'serif', ]
      },
      fontSize: {
        body: ['1.125rem', '1.4375rem'],
        title: ['1rem', '1.32rem'],
        'heading-M': ['1.5rem', '2rem'],
        'heading-L': ['2rem', '2.6875rem']
      },
    },
  },
  plugins: [],
}

