// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Web Development & UX Design. Based in Vermont.",
  plugins: [
    {
      use: "gridsome-plugin-manifest",
      options: {
        background_color: "#FFFDF7",
        icon_path: "./src/favicon.png",
        name: "Reeves Studio",
        short_name: "Reeves",
        theme_color: "#287AB8",
        lang: "en",
      },
    },
    {
      use: "@gridsome/plugin-critical",
      options: {
        paths: ["/"],
        width: 1300,
        height: 900,
      },
    },
  ],
};
