/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(34, 211, 238, 0.18)',
        glass: '0 18px 60px rgba(2, 6, 23, 0.42)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        reveal: 'reveal 0.7s ease-out both',
        'soft-pulse': 'softPulse 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softPulse: {
          '0%, 100%': { opacity: '0.68' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
