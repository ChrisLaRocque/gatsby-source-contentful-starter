// support for .env, .env.development, and .env.production
require("dotenv").config();
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const host = process.env.GATSBY_IS_PREVIEW
  ? "preview.contentful.com"
  : "cdn.contentful.com";
const token = process.env.GATSBY_IS_PREVIEW
  ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
  : process.env.CONTENTFUL_ACCESS_TOKEN;

module.exports = {
  siteMetadata: {
    title: `Gatsby Source Contentful Starter`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: token,
        host: host,
      },
    },
  ],
};
