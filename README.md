<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  gatsby-starter-source-contentful
</h1>

## 🚀 Quick start

To get started you only need the API keys for a Contentful space with content in it.

1.  **Create a Gatsby site using this starter.**

    ```shell
    # create a new Gatsby site using the minimal starter
    npx gatsby new gatsby-starter-source-contentful https://github.com/ChrisLaRocque/gatsby-source-contentful-starter
    ```

2.  **Add keys from Contentful to .env files**

    Navigate to the API keys section of your Contentful Space. Copy and paste the appropriate keys into a new file called `.env.development`

    ```shell
    CONTENTFUL_SPACE_ID=""
    CONTENTFUL_ACCESS_TOKEN=""
    CONTENTFUL_PREVIEW_ACCESS_TOKEN=""
    ```

3.  **`npm run develop` and start customizing!**

    Your site is now running at http://localhost:8000!
    Your Contentful data should be showing up at http://localhost:8000/\_\_\_graphql
    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Add a query to your template**

    To get Contentful data into your page templates is simple:

    1. Use the GraphiQL explorer to construct your query for Contentful data. All entries from contentful will have their type name prefixed with `contentful`. In the screenshot below I've built a query for a `contentfulPerson` content type where we get their `name` and `jobTitle`.
       ![GraphQL query for contentfulPerson](https://images.ctfassets.net/203qxljmwldn/3d0mXPQBGgIcCK3GzLEYDs/0e664a86a4677046ed2c9706aaf0be20/Screen_Shot_2022-06-01_at_4.48.12_PM.png "Query for contentfulPerson")

    2. At the bottom of index.js add a `graphql` query so Gatsby knows to query the datalayer and return the data as a prop to your template.

    ```js
    export const query = graphql`
      query MyQuery {
        contentfulPerson {
          name
          jobTitle
        }
      }
    `;
    ```

    3. In your component access the `data` prop passed to all components with a query.

    ```js
    export default function Component({ data }) {
      console.log(data.contentfulPerson);
    }
    ```

5.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)
