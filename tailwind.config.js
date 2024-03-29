const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@salzpate/react-ui/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    columnCount: [ 1, 2, 3, 4, 5 ],
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      primary: '#fff',
      secondary: '#8b2000',
      blue: colors.blue,
      gray: colors.neutral,
      orange: colors.orange,
      red: colors.red,
      yellow: colors.yellow,
      teal: colors.teal,
    },
    extend: {
      boxShadow: {
        'gallery': 'inset 0 0 0 1000px rgba(0, 0, 0, 0.1)',
        'gallery-dark': 'inset 0 0 0 1000px rgba(255, 255, 255, 0.05)',
      },
      colors: {
        'header-color': 'rgba(23, 23, 23, 1)',
        'secondary-dark': '#f44336',
        alternate: '#007cc2',
      },
      opacity: {
        '15': '0.15',
        '87': '0.87',
      },
      spacing: {
        '14': '3.5rem',
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
}
