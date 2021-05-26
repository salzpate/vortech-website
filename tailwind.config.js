const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './node_modules/@salzpate/react-ui/**/*.js'
  ],
  darkMode: 'media',
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
      gray: colors.trueGray,
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
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    columnCount: ['responsive'],
    gap: ['hover', 'focus'],
    margin: ['responsive', 'last']
  }
}
