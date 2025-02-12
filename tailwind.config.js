module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      skyblue: "#3498db",
      purple: "#7e5bef",
      red: "#FF0000",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      "forest-green": "#228B22",
      yellow: "#ffc82c",
      indigo: "rgb(67 56 202)",
      "gray-dark": "#273444",
      gray: "#8492a6",
      white: "#fff",
      violet: "#00008b",
      "gray-light": "#f5f5f5",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
