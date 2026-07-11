/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core brand palette — warm, kitchen-table, teal-forward.
        brand: {
          teal: '#0F7B7B',
          tealDark: '#0B5D5D',
          plum: '#7A2E56',
          cream: '#FBF7F0',
          sand: '#F1E8D8',
          ink: '#2A231E',
        },
        // Depth Color System (teal -> plum) used on the Scope & Sequence page.
        // Also available as hex values in data/grades.js for inline styling.
        depth: {
          prek: '#159A9C',
          g1: '#1E88A8',
          g2: '#3A6EA5',
          g3: '#5B57A0',
          g4: '#7A4A94',
          g5: '#8C3A7A',
          g6: '#7A2E56',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        dyslexic: ['OpenDyslexic', 'Comic Sans MS', 'Comic Sans', 'cursive'],
      },
    },
  },
  plugins: [],
};
