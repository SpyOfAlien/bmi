module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "48%": "48%",
      },
      borderRadius: {
        xs: ".25rem",
      },
      colors: {
        white: "#FFFFFF",
        black: {
          9: "#000000",
          8: "#0A142F",
        },
        yellow: "#F1B209",
        green: {
          9: "#21562A",
          8: "#53D86A",
          6: "#4BC25F",
          5: "#56933D",
        },
        gray: "#E2E2E2",
        input: "#AFAFAF",
      },
      boxShadow: {
        sidebarContent: "0px 2px 10px rgba(25, 1, 52, 0.12)",
      },
      zIndex: {
        negative: -10,
      },
    },

    fontSize: {
      xs: "0.875rem",
      h3: ["3rem", { lineHeight: "3.6rem" }],
      h4: ["2rem", { lineHeight: "2.5rem" }],
      h5: ["1.75rem", { lineHeight: "2rem" }],
      h6: ["1.25rem", { lineHeight: "1.3rem" }],
    },

    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1920px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
