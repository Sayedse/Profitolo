/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#05070B',
          900: '#090D16',
          850: '#0D131F',
          800: '#121A2B',
          750: '#172238',
          700: '#1D2A45',
          600: '#2A3B5E',
        },
        cyber: {
          cyan: '#00F2FE',
          blue: '#4FACFE',
          teal: '#00E5BE',
          purple: '#8B5CF6',
          emerald: '#10B981',
          accent: '#38BDF8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-hover': '0 12px 40px 0 rgba(0, 242, 254, 0.15)',
        'neon-subtle': '0 0 25px -5px rgba(56, 189, 248, 0.25)',
        'qa-glow': '0 0 20px -3px rgba(16, 185, 129, 0.3)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
