/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#3F4240',
          light: '#4A4D4B',
          dark: '#2D3132'
        },
        golden: {
          DEFAULT: '#FBBF24',
          light: '#FCD34D',
          dark: '#F59E0B'
        },
        industrial: {
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E8EAED',
          300: '#DADCE0',
          400: '#BDC1C6',
          500: '#9AA0A6',
          600: '#80868B',
          700: '#5F6368',
          800: '#3C4043',
          900: '#202124'
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem'
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'rotate-gear': 'rotateGear 20s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'slide-in-bottom': 'slideInFromBottom 0.8s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        rotateGear: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        slideInFromBottom: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FBBF24, 0 0 10px #FBBF24, 0 0 15px #FBBF24' },
          '100%': { boxShadow: '0 0 10px #FBBF24, 0 0 20px #FBBF24, 0 0 30px #FBBF24' }
        }
      },
      backgroundImage: {
        'gradient-industrial': 'linear-gradient(135deg, #3F4240 0%, #2D3132 50%, #3F4240 100%)',
        'gradient-golden': 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
        'gradient-overlay': 'linear-gradient(rgba(63, 66, 64, 0.9), rgba(63, 66, 64, 0.7))',
        'industrial-grid': `
          linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)
        `
      },
      backgroundSize: {
        'grid': '50px 50px'
      },
      boxShadow: {
        'industrial': '0 10px 25px rgba(0, 0, 0, 0.3), 0 6px 10px rgba(0, 0, 0, 0.2)',
        'golden': '0 10px 25px rgba(251, 191, 36, 0.3), 0 6px 10px rgba(251, 191, 36, 0.2)',
        'glow': '0 0 20px rgba(251, 191, 36, 0.5)',
        'glow-lg': '0 0 40px rgba(251, 191, 36, 0.6)'
      },
      backdropBlur: {
        'xs': '2px'
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}