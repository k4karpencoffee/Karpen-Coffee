export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  future: {
    // Hover styles only apply on devices with a real pointer (no "stuck" hover on phones/tablets).
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#0F3D22', dark: '#0A2C18', soft: '#1D5634' },
        mint: { DEFAULT: '#EEF7F1', strong: '#DCEFE2', line: '#CFE6D7' },
        paper: '#F6F5F1',
        maroon: '#7A0F0F',
        promo: '#C0262D',
        ink: { DEFAULT: '#141A16', muted: '#5D655F', faint: '#8A918C' },
        line: '#E5E8E5',
        slot: { DEFAULT: '#E6E4DE', ink: '#86837B' },
        notice: { DEFAULT: '#FFF8E1', ink: '#6B5200', line: '#F2E2A8' },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '1200px' },
    },
  },
};
