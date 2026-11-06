/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sanatel: {
          black: '#101010',
          dark: '#141414',
          surface: '#1A1A1A',
          elevated: '#242424',
          border: '#2E2E2E',
          'border-light': '#3D3D3D',
          red: '#E3262E',
          'red-hover': '#C71E25',
          'red-dark': '#8B1419',
          'red-glow': 'rgba(227, 38, 46, 0.35)',
          gray: {
            100: '#F5F5F5',
            200: '#E5E5E5',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          }
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        tech: ['"Space Grotesk"', 'monospace', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        'radial-vignette': "radial-gradient(circle at center, transparent 0%, #101010 100%)",
        'red-gradient': "linear-gradient(135deg, #E3262E 0%, #8B1419 100%)",
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'squash-stretch': 'squashStretch 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        squashStretch: {
          '0%, 100%': { transform: 'scale(1, 1)' },
          '25%': { transform: 'scale(1.15, 0.85) translate(4px, -2px)' },
          '50%': { transform: 'scale(0.9, 1.1) translate(-2px, 3px)' },
          '75%': { transform: 'scale(1.08, 0.92) translate(1px, -1px)' },
        }
      }
    },
  },
  plugins: [],
}

