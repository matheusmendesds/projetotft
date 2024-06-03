import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      rotate:{
        '_45':'-45deg',
      },
      colors:{
        'salmon': '#E7C192',
        'transparent':'rgb(0,0,0,0)',
        'half-transparent':'rgb(0,0,0,0.8)',
        'menu':'rgb(255, 255, 255, 0.103)'
      },
      transitionProperty:{
        'width':'width'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
