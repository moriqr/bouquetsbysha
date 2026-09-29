/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-pink': '#ffb7b2',
        'primary-peach': '#ffdac1',
        'primary-lavender': '#e2f0cb',
        'pastel-mint': '#b5ead7',
        'pastel-purple': '#c7ceea',
        'sweet-rose': '#ff85a2',
        'soft-dark': '#4a3b32',
        'cream-white': '#fffdf9',
        'banner-bg': '#EAD8E6',
        'body-pink': '#ffd6e8',
      },
      fontFamily: {
        fredoka: ['Fredoka', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        kawaii: ['KawaiiStitch', 'cursive'],
      },
      boxShadow: {
        'pink-sm': '0 4px 6px -1px rgba(255, 183, 178, 0.2)',
        'pink-md': '0 10px 15px -3px rgba(255, 183, 178, 0.3)',
        'pink-lg': '0 20px 25px -5px rgba(255, 183, 178, 0.4)',
      },
      keyframes: {
        'banner-marquee-scroll': {
          from: { transform: 'translateX(0)' },
          to: {
            transform: 'translateX(calc(-1 * var(--marquee-loop-width, 50%)))',
          },
        },
        'cursor-wing-tail': {
          '0%': {
            opacity: '0.96',
            filter: 'drop-shadow(0 0 8px rgba(255, 133, 162, 0.9))',
            transform:
              'translate(-50%, 0) rotate(var(--wing-rotate, 0deg)) scale(calc(var(--wing-scale, 1) * 0.92))',
          },
          '30%': {
            filter: 'drop-shadow(0 0 10px rgba(230, 0, 126, 0.85))',
          },
          '100%': {
            opacity: '0',
            filter: 'drop-shadow(0 0 3px rgba(255, 133, 162, 0.3))',
            transform:
              'translate(calc(-50% + var(--wing-drift-x, 0px)), var(--wing-drift-y, 20px)) rotate(calc(var(--wing-rotate, 0deg) + 18deg)) scale(calc(var(--wing-scale, 1) * 0.58))',
          },
        },
      },
      animation: {
        'banner-marquee':
          'banner-marquee-scroll var(--marquee-duration, 18s) linear infinite',
        'cursor-wing':
          'cursor-wing-tail var(--wing-duration, 900ms) ease-out forwards',
      },
    },
  },
  plugins: [],
};
