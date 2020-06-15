module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Didact Gothic`,
            variants: ["400", "700"],
          },
          {
            family: `Libre Baskerville`,
            variants: ["400", "700"],
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `./src/assets`, name: "img" },
    },
    // HTML SEO Head
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/fav.png",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://pranjalsingh.netlify.app/",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
