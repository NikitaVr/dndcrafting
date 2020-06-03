/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: "UA-165269148-1",
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: true,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //   },
    // },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ingredients`,
        path: `${__dirname}/content/ingredients`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recipes`,
        path: `${__dirname}/content/recipes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locations`,
        path: `${__dirname}/content/locations`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: "./data/",
    //   },
    // },
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: [
    //       {
    //         resolve: "gatsby-remark-relative-images",
    //         options: {
    //           name: "uploads",
    //         },
    //       },
    //       {
    //         resolve: "gatsby-remark-images",
    //         options: {
    //           // It's important to specify the maxWidth (in pixels) of
    //           // the content container as this plugin uses this as the
    //           // base for generating different widths of each image.
    //           maxWidth: 2048,
    //         },
    //       },
    //       {
    //         resolve: "gatsby-remark-copy-linked-files",
    //         options: {
    //           destinationDir: "static",
    //         },
    //       },
    //     ],
    //   },
    // },
    `gatsby-remark-source-name`,
    // "gatsby-transformer-json",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DndCrafting`,
        short_name: `DndCrafting`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
  ],
}
