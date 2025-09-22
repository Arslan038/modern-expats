/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Plus Jakarta Sans', 'Inter', 'sans-serif']
      },
      typography: {},
      colors: {
        // Logo-aligned palette
        primary: {
          DEFAULT: '#E67A2E', // mid warm orange
          glow: '#F9B44C',    // light yellow/orange
          deep: '#C6521C',    // burnt orange
          foreground: '#F5E3B3' // beige text on primary
        },
        secondary: {
          DEFAULT: '#0B0E12', // dark background
          light: '#121620',   // slightly lighter dark for surfaces
          foreground: '#F5E3B3' // warm beige text
        },
        // Use light backgrounds for sections
        background: '#FAFAFA',
        foreground: '#0B0E12',
        muted: {
          DEFAULT: '#F3F4F6',
          foreground: '#6B7280'
        },
        accent: {
          DEFAULT: '#F9B44C',
          foreground: '#0B0E12'
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#0B0E12'
        },
        border: '#2A2F3A'
      },
      backgroundImage: theme => ({
        'heading-highlight': 'linear-gradient(0deg, rgba(255,133,51,0.22) 0%, rgba(255,133,51,0.22) 100%)'
      }),
      keyframes: {
        'bg-zoom': {
          '0%, 100%': { transform: 'scale(1.25)' },
          '50%': { transform: 'scale(1.00)' }
        },
        planeFloat: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-8px) translateX(6px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-14px) translateX(0) rotate(1deg)' },
          '75%': { transform: 'translateY(-8px) translateX(-6px) rotate(-1deg)' }
        },
        cloudDrift: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(110%)' }
        },
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '100%' }
        },
        caret: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateZ(0deg)' },
          '25%': { transform: 'translateY(-10px) rotateZ(1deg)' },
          '50%': { transform: 'translateY(-20px) rotateZ(0deg)' },
          '75%': { transform: 'translateY(-10px) rotateZ(-1deg)' }
        },
        slideInUp: {
          from: { opacity: '0', transform: 'translate3d(0, 100%, 0) rotateX(20deg)' },
          to: { opacity: '1', transform: 'translate3d(0, 0, 0) rotateX(0deg)' }
        },
        parallaxFloat: {
          '0%, 100%': { transform: 'translateY(0px) translateZ(0px)' },
          '50%': { transform: 'translateY(-15px) translateZ(10px)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'slide-in-up': 'slideInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) both',
        'parallax-float': 'parallaxFloat 4s ease-in-out infinite',
        'bg-zoom': 'bg-zoom 12s ease-in-out infinite'
      }
    }
  },
  plugins: []
}

