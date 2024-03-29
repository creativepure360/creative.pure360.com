module.exports = {
  content: ["./components/**/*.js", "./components/**/**/*.js", "./pages/**/*.js"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        greycliff: ["Greycliff CF", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      height: {
        "1/5-screen": "20vh",
        "2/5-screen": "40vh",
        "3/5-screen": "60vh",
        "4/5-screen": "80vh",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "4/5": "80%",
        "9/10": "90%",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        20: "5rem",
      },
      spacing: {
        "100p": "100%",
        "50p": "50%",
      },
    },
  },
  plugins: [],
};
