import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");
 
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'spotlight-wide': 'radial-gradient(ellipse at 50% 0%, rgba(149, 191, 71, 0.5) 0%, rgba(94, 142, 62, 0.2) 40%, transparent 70%)',
      },
      boxShadow: {
        'custom-primary': 'rgba(255, 255, 255, 0.28) 4px 4px 18px 0px inset, rgba(149, 191, 71, 0.5) 0px 0.48175px 2.40875px -0.833333px, rgba(149, 191, 71, 0.5) 0px 1.83083px 9.15413px -1.66667px, rgba(149, 191, 71, 0.5) 0px 8px 40px -2.5px, rgba(149, 191, 71, 0.5) 0px -0.48175px 2.40875px -0.833333px, rgba(149, 191, 71, 0.5) 0px -1.83083px 9.15413px -1.66667px, rgba(149, 191, 71, 0.5) 0px -8px 40px -2.5px',
        'custom-secondary': 'rgba(255, 255, 255, 0.28) 4px 4px 18px 0px inset, rgba(94, 142, 62, 0.5) 0px 0.48175px 2.40875px -0.833333px, rgba(94, 142, 62, 0.5) 0px 1.83083px 9.15413px -1.66667px, rgba(94, 142, 62, 0.5) 0px 8px 40px -2.5px, rgba(94, 142, 62, 0.5) 0px -0.48175px 2.40875px -0.833333px, rgba(94, 142, 62, 0.5) 0px -1.83083px 9.15413px -1.66667px, rgba(94, 142, 62, 0.5) 0px -8px 40px -2.5px',
        'custom-world': 'rgba(255, 255, 255, 0.28) 4px 4px 18px 0px inset, rgba(94, 142, 62, 0.5) 0px 0.48175px 2.40875px -0.833333px, rgba(94, 142, 62, 0.5) 0px 1.83083px 9.15413px -1.66667px, rgba(94, 142, 62, 0.5) 0px 8px 40px -2.5px, rgba(94, 142, 62, 0.5) 0px -0.48175px 2.40875px -0.833333px, rgba(94, 142, 62, 0.5) 0px -1.83083px 9.15413px -1.66667px, rgba(94, 142, 62, 0.5) 0px -8px 40px -2.5px',
      },
      colors: {
        primary: "#95BF47",
        secondary: "#5e8e3e",
        background: "#010804"
      },
      fontFamily: {
        montserrat: ["var(--font-ms)"],
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 8s infinite",
        backgroundPositionSpin:
          "background-position-spin 3000ms infinite alternate",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        grid: "grid 15s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
    },
    screens: {
      xs: "370px",
      sm: "420px",
      md: "760px",
      lg: "1020px",
      xl: "1400px",
      "2xl": "2500px",
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
