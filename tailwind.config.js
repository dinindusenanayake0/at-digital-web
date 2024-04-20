/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Poppins fonts
        "poppins-regular": ["Poppins Regular", "sans-serif"],
        "poppins-medium": ["Poppins Medium", "sans-serif"],
        "poppins-semibold": ["Poppins Semibold", "sans-serif"],
        "poppins-bold": ["Poppins Bold", "sans-serif"],

        // Inter fonts
        "inter-regular": ["Inter Regular", "sans-serif"],
        "inter-medium": ["Inter Medium", "sans-serif"],
        "inter-semibold": ["Inter Semibold", "sans-serif"],
        "inter-bold": ["Inter Bold", "sans-serif"],
      },
      colors: {
        "primary": "#6B3CC9",
        "secondary": "#F28D35",
        "analogous-color-1": "#6A44F2",
        "analogous-color-2": "#1CBDDD",
        "triadic": "#52378C",
        "dark-color": "#4DCA79",
        "text-color": "#4D4D4D",
        "text-color-light": "#545A75",
        "text-color-subtle": "#9C9991",
        "accent-color-1": "#E2F2FE",
        "accent-color-2": "#FFF8E0",
        "error": "#FF0335",
        "success": "#5EB30B",

      },
      // screens: {
      //   'sm': '375px',
      //   // => @media (min-width: 375px) { ... }
  
      //   'md': '768px',
      //   // => @media (min-width: 768px) { ... }
  
      //   'lg': '1200px',
      //   // => @media (min-width: 1200px) { ... }
  
      //   'xl': '1440px',
      //   // => @media (min-width: 1440px) { ... }
      // },
      screens: {
        'sm': {'min': '375px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '1199px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1200px', 'max': '1439px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '1440px', 'max': '1920px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
      },
    },
  },
  plugins: [],
};

