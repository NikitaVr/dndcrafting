const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const slug = require("./src/utils/slug")

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  // INGREDIENTS
  // const ingredients = await graphql(`
  //   {
  //     allIngredientsJson {
  //       edges {
  //         node {
  //           title
  //         }
  //       }
  //     }
  //   }
  // `)

  const ingredients = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "ingredients" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                name
              }
            }
          }
        }
      }
    }
  `)
  createPage({
    path: `/ingredients/`,
    component: require.resolve("./src/templates/Ingredients.js"),
    context: {
      ingredients: ingredients.data.allFile.edges.map(edge => {
        const ingredient = { ...edge.node.childMarkdownRemark.frontmatter }
        return {
          name: ingredient.name,
        }
      }),
    },
  })
  ingredients.data.allFile.edges.forEach(async edge => {
    const ingredient = { ...edge.node.childMarkdownRemark.frontmatter }
    const recipesResult = await graphql(`
      {
        allMarkdownRemark(
          filter: {
            fields: { sourceName: { eq: "recipes" } }
            frontmatter: { ingredients: { in: ["${ingredient.name}"] } }
          }
        ) {
          totalCount
          edges {
            node {
              frontmatter {
                name
                effects
              }
              fields {
                sourceName
              }
            }
          }
        }
      }
    `)
    const recipes = recipesResult.data.allMarkdownRemark.edges.map(edge => {
      return edge.node
    })
    createPage({
      path: `/ingredients/${slug.convertToSlug(ingredient.name)}/`,
      component: require.resolve("./src/templates/Ingredient.js"),
      context: {
        name: ingredient.name,
        recipes: recipes,
      },
    })
  })
  // LOCATIONS
  const locations = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "locations" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                name
              }
            }
          }
        }
      }
    }
  `)
  createPage({
    path: `/locations/`,
    component: require.resolve("./src/templates/Locations.js"),
    context: {
      locations: locations.data.allFile.edges.map(edge => {
        const location = { ...edge.node.childMarkdownRemark.frontmatter }
        return {
          name: location.name,
        }
      }),
    },
  })
  // // will this being async be a problem ???
  // locations.data.allFile.edges.forEach(async edge => {
  //   const location = { ...edge.node.childMarkdownRemark.frontmatter }
  //   const ingredientsResult = await graphql(`
  //     {
  //       allMarkdownRemark(
  //         filter: {
  //           fields: { sourceName: { eq: "ingredients" } }
  //           frontmatter: { name: { in: [${location.ingredients
  //             .map(title => '"' + title + '"')
  //             .join(",")}] } }
  //         }
  //       ) {
  //         totalCount
  //         edges {
  //           node {
  //             frontmatter {
  //               name
  //               rarity
  //             }
  //             fields {
  //               sourceName
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `)
  //   const ingredients = ingredientsResult.data.allMarkdownRemark.edges.map(
  //     edge => {
  //       return edge.node
  //     }
  //   )
  //   createPage({
  //     path: `/locations/${slug.convertToSlug(location.title)}/`,
  //     component: require.resolve("./src/templates/Location.js"),
  //     context: {
  //       name: location.name,
  //       ingredients: ingredients,
  //     },
  //   })
  // })
  // // RECIPES
  const recipes = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "recipes" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                name
                ingredients
              }
            }
          }
        }
      }
    }
  `)
  createPage({
    path: `/recipes/`,
    component: require.resolve("./src/templates/Recipes.js"),
    context: {
      recipes: recipes.data.allFile.edges.map(edge => {
        const recipe = { ...edge.node.childMarkdownRemark.frontmatter }
        return {
          name: recipe.name,
        }
      }),
    },
  })
  recipes.data.allFile.edges.forEach(async edge => {
    const recipe = { ...edge.node.childMarkdownRemark.frontmatter }
    const ingredientsResult = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          fields: { sourceName: { eq: "ingredients" } }
          frontmatter: { name: { in: [${recipe.ingredients
            .map(title => '"' + title + '"')
            .join(",")}] } }
        }
      ) {
        totalCount
        edges {
          node {
            frontmatter {
              name
              effects
            }
            fields {
              sourceName
            }
          }
        }
      }
    }
  `)
    const ingredients = ingredientsResult.data.allMarkdownRemark.edges.map(
      edge => {
        return edge.node
      }
    )
    console.log("INGREDIENTS")
    console.log(ingredients)
    createPage({
      path: `/recipes/${slug.convertToSlug(recipe.name)}/`,
      component: require.resolve("./src/templates/Recipe.js"),
      context: {
        name: recipe.name,
        ingredients: ingredients,
      },
    })
  })
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   // const { createNodeField } = actions
//   fmImagesToRelative(node) // convert image paths for gatsby images

//   // if (node.internal.type === `MarkdownRemark`) {
//   //   const value = createFilePath({ node, getNode })
//   //   createNodeField({
//   //     name: `slug`,
//   //     node,
//   //     value,
//   //   })
//   // }
// }

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}
