const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    extend: {},
    fontFamily: {
      sans: ["IBM Plex Mono", "monospace"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  // plugins: [
  //   function ({ addComponents }) {
  //     addComponents({
  //       ".container": {
  //         maxWidth: "100%",
  //         "@screen sm": {
  //           maxWidth: "640px",
  //         },
  //         "@screen md": {
  //           maxWidth: "860px",
  //         },
  //         "@screen lg": {
  //           maxWidth: "860px",
  //         },
  //         "@screen xl": {
  //           maxWidth: "900px",
  //         },
  //       },
  //     });
  //   },
  // ],
};

module.exports = config;
