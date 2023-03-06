/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "480px",
      sm: "610px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      heading: ["Century Gothic", "sans-serif"],
      title: ["Montserrat", "sans-serif"],
      body: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FFFBFA",
          secondary: "#D7084E",
          accent: "#D3B037",
          neutral: "#FF6E00",
          "base-100": "#ffff",
          info: "#ffff",
          success: "#16a34a",
          warning: "#F8DA63",
          error: "#E23D32",
        },
      },
      {
        dark: {
          primary: "#FFFBFA",
          secondary: "#D7084E",
          accent: "#D3B037",
          neutral: "#FF6E00",
          "base-100": "#192e5b",
          info: "#313131",
          success: "#16a34a",
          warning: "#F8DA63",
          error: "#E23D32",
        },
      },
    ],
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
};
