const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsCourse {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsCourse.edges.map(({ node: work }) => {
        createPage({
          path: `works/${work.slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            slug: work.slug,
          },
        })
      })
      resolve()
    })
  })
}
//gatsby-node.js
exports.onCreateWebpackConfig = ({
  actions,
}) => {
  const { setWebpackConfig } = actions;
  setWebpackConfig({
    externals: {
      jquery: 'jQuery', // important: 'Q' capitalized
    }
  })
}
