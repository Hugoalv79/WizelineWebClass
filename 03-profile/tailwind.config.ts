import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.tsx', './src/*.tsx'],
  theme: {
    extend:{
      spacing:{ 
        'quarter': '25%',
      },
      fontFamily: { 
        'Roboto': ['"Roboto"', '"sans-serif"'],
      },
      colors: {
        'primary': 'hsl(240,50%,98%)',
        'secondary': '#1E2270',
      }
    }
  },
  plugins: [],
} satisfies Config