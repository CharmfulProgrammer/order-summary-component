module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      "pale-blue": "hsl(225, 100%, 94%)",
      "bright-blue": "hsl(245, 75%, 52%)",
      "very-pale-blue": "hsl(225, 100%, 98%)",
      "desaturated-blue": "hsl(224, 23%, 55%)",
      "dark-blue": "hsl(223, 47%, 23%)",
    },
    fontSize: {
      paragraph: "16px",
    },
    fontFamily: {
      "red-hat": ["'Red Hat Display'", "sans-serif"],
    },
    screens: {
      "mobile": "375px"
    },
    zIndex: {
      "background": "-9999"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
