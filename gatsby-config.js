/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config()
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Uthru",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: process.env.DATO_API_TOKEN,

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,

        // Custom API base URL (most don't need this)
        // apiUrl: 'https://site-api.datocms.com',

        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        localeFallbacks: {
          it: ["en"],
        },
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
  ],
}
