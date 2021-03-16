const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["oxygen", ...defaultTheme.fontFamily.sans],
    },

    extend: {
      textColor: {
        default: "#4F4F4F",
      },
      minHeight: {
        48: "12rem",
      },
      colors: {
        red: "#f28586",
        yellow: "#ffd05a",
        green: "#349972",
        teal: "#8DCFC5",
        pink: "#c54e76",
        orange: "#f47559",
        purple: "#a889fa",
        grey: "#f0f0f0",
        blue: "#2D67CB",
      },
      spacing: {
        2.5: "10px",
        12.5: "2.75rem",
        15: "3.75rem",
        63: "15.75rem",
        104: "26rem",
        125: "31.25rem",
        164: "41rem",
      },
      zIndex: {
        100: "100",
      },
      margin: {
        "-13": "-3.25rem",
        15: "3.75rem",
        30: "7.5rem",
      },
      borderRadius: {
        DEFAULT: "4px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      opacity: ["disabled"],
      pointerEvents: ["disabled"],
    },
  },
  plugins: [],
};
