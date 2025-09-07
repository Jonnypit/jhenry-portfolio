export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-gradient': 'linear-gradient(to right, #0d212d 0%, #000000 50%, #0d212d 100%)',
      },
      animation: {
        spinOnce: 'spinOnce 2s ease-in-out forwards',
        spinLoop: 'spinLoop 5s linear infinite',
        spinY: 'spinY 6s linear infinite',
      },
      keyframes: {
        spinOnce: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spinLoop: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spinY: { '0%': { transform: 'rotateY(0deg)' }, '100%': { transform: 'rotateY(360deg)' } },
      },
    },
  },
  plugins: [],
};
