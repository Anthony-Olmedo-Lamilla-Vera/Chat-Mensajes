module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    screens: {
      tablet: "200px",

      // => @media (min-width: 640px) { ... }

      laptop: "800px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },

    extend: {},
  },
  plugins: [],
};
