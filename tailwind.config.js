/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F95F54',
          hover: '#E74E43',
        },
        secondary: {
          DEFAULT: '#57423F',
          hover: '#493633',
        },
        ink: '#111111',
        paper: '#FFFFFF',
        soft: '#FFF7F6',
        border: '#E9E9E9',
        muted: '#6B7280',
        surface: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #F95F54 0%, #57423F 100%)',
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        xl2: '1.75rem',
      },
      boxShadow: {
        soft: '0 8px 40px -12px rgba(17, 17, 17, 0.12)',
        lift: '0 24px 60px -20px rgba(87, 66, 63, 0.35)',
        glow: '0 0 0 1px rgba(249, 95, 84, 0.12), 0 20px 50px -18px rgba(249, 95, 84, 0.35)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
