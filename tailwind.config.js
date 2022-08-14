let plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    'layouts/**/*.{htm,js}',
    'pages/**/*.{htm,js}',
    'pages/**/*.{htm,js}',
    'content/**/*.htm',
    'partials/**/*.{htm,js}',
    'src/**/*.js',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'sans': ['Nunito Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'sky': {
          'DEFAULT': '#0f75f6',
        },
      },
      boxShadow: {
        'inside': 'inset 0px 0px 50px 0px rgba(0,0,0,0);',
      },
      backgroundImage: {
        'overlay': '-webkit-linear-gradient(top, rgba(4, 8, 20, 0.6), rgba(4, 8, 20, 0.9))',
      },
      transitionProperty: {
        'max-wh': 'max-width, max-height',
      },
      lineHeight: {
        '5.5': '1.375rem', // 22px
        '6.5': '1.625rem', // 26px
        '8': '2rem', // 32px
        '11': '2.75rem', // 44px
        '14.5': '3.625rem', // 58px
        '19.25': '4.8125rem', // 77px
      },
      spacing: {
        'container': 'var(--padding-x)',
      },
      borderRadius: {
        '2.5': '0.625rem', // 10px
        '4': '1rem', // 16px
        '10': '2.5rem', // 40px
        '25': '6.25rem', // 100px
        '50': '12.5rem', // 200px
        '75': '18.75rem', // 300px
      },
      borderWidth: {
        '5': '1.25rem', // 20px
      },
      maxWidth: {
        '100': '25rem', // 400px
      }
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    plugin(function ({ addVariant, addComponents }) {
      addVariant('carousel-inited', '&.carousel--inited');
      addVariant('slide-active', '&.carousel-slide-active');
      addVariant('slide-next', '&.carousel-slide-next');
      addVariant('slide-prev', '&.carousel-slide-prev');  
      addComponents({
        '.container': {
          maxWidth: '100%',
          padding: '0 var(--padding-x)',
          '@screen sm': {
            '--padding-x': 'calc(50vw - 300px)',
          },
          '@screen md': {
            '--padding-x': 'calc(50vw - 360px)',
          },
          '@screen lg': {
            '--padding-x': 'calc(50vw - 480px)',
          },
          '@screen xl': {
            '--padding-x': 'calc(50vw - 600px)',
          },
          '@screen 2xl': {
            '--padding-x': 'calc(50vw - 780px)',
          },
        }
      })
    }),
    require('@tailwindcss/forms'),
  ],
}
