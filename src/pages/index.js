import * as React from "react";
// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const linkStyles = {
  display: "block",
  marginBottom: 0,
};
const pStyles = {
  marginBottom: "1.5em",
};
// data
const links = [
  {
    text: "gatsby-source-contentful docs",
    url: "https://www.gatsbyjs.com/plugins/gatsby-source-contentful/",
    description:
      "Reference and additional options for gatsby-source-contentful.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

// markup
export default function IndexPage() {
  return (
    <main style={pageStyles}>
      <title>Gatsby + Contentful</title>
      <h1>Contentful + Gatsby</h1>
      <p>
        A bare-bones starter for getting Contentful data into a Gatsby site.
      </p>
      {links &&
        links.map((link) => (
          <>
            <a href={link.url} style={linkStyles}>
              <strong>{link.text}</strong>
            </a>
            <p style={pStyles}>{link.description}</p>
          </>
        ))}
    </main>
  );
}
