export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        glow: '0 35px 120px rgba(59,130,246,0.14)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(56,189,248,0.16), transparent 22%), radial-gradient(circle at bottom right, rgba(168,85,247,0.16), transparent 18%), linear-gradient(180deg, #020617 0%, #050816 100%)',
      },
      colors: {
        surface: 'rgba(15,23,42,0.72)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
