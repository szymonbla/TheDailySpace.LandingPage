module.exports = {
  content: [
    "./src/components/*.{js,ts,jsx,tsx,astro}",
    "./src/layouts/*.{js,ts,jsx,tsx,astro}",
    "./src/layouts/components/*.{js,ts,jsx,tsx,astro}",
    "./src/pages/*.{js,ts,jsx,tsx,astro}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      commonBlack: "#1A1A1A",
      commonBlack: "#FFFFFF",

      error: "#ED1C24",
      warning: "#F98600",
      info: "#44aaee",
      success: "#008929",

      backgroundColor: "#F7FBFC",
      lightBlue: "#B9D7EA",
      blue: "#769FCD",

      textPrimary: "#78C6E3",
      textSecondary: "#788EE3",

      actionPrimary: "#7973D9",
    },
    fontFamily: {
      sans: ["Inter", "Helvetica", '"Open Sans"', "sans-serif"],
    },
    fontSize: {
      base: "1rem",
      lg: "1.25rem",
      xl: "1.563rem",
      "2xl": "1.953rem",
      "3xl": "2.441rem",
      "6xl": "3.052rem",
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
