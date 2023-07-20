/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#805600",
        "onPrimary": "#ffffff",
        "primaryContainer": "#ffddb0",
        "onPrimaryContainer": "#281800",
        "primaryFixed": "#ffddb0",
        "onPrimaryFixed": "#281800",
        "primaryFixedDim": "#fdba4b",
        "onPrimaryFixedVariant": "#614000",
        "secondary": "#6f5b40",
        "onSecondary": "#ffffff",
        "secondaryContainer": "#f9debb",
        "onSecondaryContainer": "#261904",
        "secondaryFixed": "#f9debb",
        "onSecondaryFixed": "#261904",
        "secondaryFixedDim": "#dcc3a1",
        "onSecondaryFixedVariant": "#55442a",
        "tertiary": "#506441",
        "onTertiary": "#ffffff",
        "tertiaryContainer": "#d2eabd",
        "onTertiaryContainer": "#0e2004",
        "tertiaryFixed": "#d2eabd",
        "onTertiaryFixed": "#0e2004",
        "tertiaryFixedDim": "#b6cea3",
        "onTertiaryFixedVariant": "#394c2b",
        "error": "#ba1a1a",
        "errorContainer": "#ffdad6",
        "onError": "#ffffff",
        "onErrorContainer": "#410002",
        "background": "#fffbff",
        "onBackground": "#1f1b16",
        "outline": "#817567",
        "inverseOnSurface": "#f9efe7",
        "inverseSurface": "#34302a",
        "inversePrimary": "#fdba4b",
        "shadow": "#000000",
        "surfaceTint": "#805600",
        "outlineVariant": "#d2c4b4",
        "scrim": "#000000",
        "surface": "#fff8f3",
        "onSurface": "#1f1b16",
        "surfaceVariant": "#efe0cf",
        "onSurfaceVariant": "#4f4539",
        "surfaceContainerHighest": "#eae1d9",
        "surfaceContainerHigh": "#f0e7de",
        "surfaceContainer": "#f6ece4",
        "surfaceContainerLow": "#fcf2e9",
        "surfaceContainerLowest": "#ffffff",
        "surfaceDim": "#e1d8d0",
        "surfaceBright": "#fff8f3"
      },
    },
  },
  plugins: [],
}
