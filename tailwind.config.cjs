/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#805600',
        onPrimary: '#FFFFFF',
        primaryContainer: '#FFDDAF',
        onPrimaryContainer: '#281800',
        tertiary: '#506441',
        onTertiary: '#FFFFFF',
        tertiaryContainer: '#D2EABD',
        onTertiaryContainer: '#0E2005',
        error: '#BA1A1A',
        onError: '#FFFFFF',
        errorContainer: '#FFDAD6',
        onErrorContainer: '#410002',
        background: '#FFFBFF',
        onBackground: '#1F1B16',
        surface: '#FFFBFF',
        onSurface: '#1F1B16',
        outline: '#817567',
        surfaceVariant: '#EFE0CF',
        onSurfaceVariant: '#4F4539'
      },
    },
  },
  plugins: [],
}
