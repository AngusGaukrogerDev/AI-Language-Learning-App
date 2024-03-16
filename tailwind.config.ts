import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: { 
        'pitahaya-yellow': { DEFAULT: '#ECBA0B'}, 
        'pitahaya-grey': { DEFAULT: '#808080', 100: '#1a1a1a', 200: '#333333', 300: '#4d4d4d', 400: '#666666', 500: '#808080', 600: '#999999', 700: '#b3b3b3', 800: '#cccccc', 900: '#e6e6e6' }, 
        'pitahaya-beige': { DEFAULT: '#E3DDD5'}, 
        'pitahaya-black': { DEFAULT: '#2C2C2D'},
        'pitahaya-white': { DEFAULT: '#FBFEFB'},
        'pitahaya-light-grey': { DEFAULT: '#F3F1EE'},
        'pitahaya-medium-grey': { DEFAULT: '#BFBBB6'},
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    prefix: "nextui", // prefix for themes variables
    addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
    defaultTheme: "light", // default theme from the themes object
    defaultExtendTheme: "light", // default theme to extend on custom themes
    layout: {}, // common layout tokens (applied to all themes)
    themes: {
      light: {
        colors: {
          background: "#fffcf9",
          foreground: "#131b23'",
          primary: {
            DEFAULT: '#afa2ff', 
            100: '#0b0054', 
            200: '#1600a7', 
            300: '#2100fb', 
            400: '#6750ff', 
            500: '#afa2ff', 
            600: '#bfb6ff', 
            700: '#cfc8ff', 
            800: '#dfdaff', 
            900: '#efedff'
          },
          // ... rest of the colors
        }, // light theme colors
      },
      dark: {
        layout: {}, // dark theme layout tokens
        colors: {}, // dark theme colors
      },
      // ... custom themes
    },
  })],
} satisfies Config;
