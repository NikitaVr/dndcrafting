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
  // ingredients.data.allIngredientsJson.edges.forEach(async edge => {
  //   const ingredient = edge.node
  //   const recipesResult = await graphql(`
  //   {
  //     allRecipesJson(filter: {ingredients:  {in: ["${ingredient.title}"]}}) {
  //       edges {
  //         node {
  //           title,
  //           effects
  //         }
  //       }
  //     }
  //   }
  //   `)
  //   const recipes = recipesResult.data.allRecipesJson.edges.map(edge => {
  //     return edge.node
  //   })
  //   createPage({
  //     path: `/ingredients/${slug.convertToSlug(ingredient.title)}/`,
  //     component: require.resolve("./src/templates/Ingredient.js"),
  //     context: {
  //       title: ingredient.title,
  //       recipes: recipes,
  //     },
  //   })
  // })
  // // LOCATIONS
  // const locations = await graphql(`
  //   {
  //     allLocationsJson {
  //       edges {
  //         node {
  //           title
  //           ingredients
  //         }
  //       }
  //     }
  //   }
  // `)
  // createPage({
  //   path: `/locations/`,
  //   component: require.resolve("./src/templates/Locations.js"),
  //   context: {
  //     locations: locations.data.allLocationsJson.edges.map(edge => {
  //       const location = edge.node
  //       return {
  //         title: location.title,
  //       }
  //     }),
  //   },
  // })
  // // will this being async be a problem ???
  // locations.data.allLocationsJson.edges.forEach(async edge => {
  //   const location = edge.node
  //   const ingredientsResult = await graphql(`
  //     {
  //       allIngredientsJson(filter: { title: { in: [${location.ingredients
  //         .map(title => '"' + title + '"')
  //         .join(",")}] } }) {
  //         edges {
  //           node {
  //             title
  //             rarity
  //           }
  //         }
  //       }
  //     }
  //   `)
  //   const ingredients = ingredientsResult.data.allIngredientsJson.edges.map(
  //     edge => {
  //       return edge.node
  //     }
  //   )
  //   createPage({
  //     path: `/locations/${slug.convertToSlug(location.title)}/`,
  //     component: require.resolve("./src/templates/Location.js"),
  //     context: {
  //       title: location.title,
  //       ingredients: ingredients,
  //     },
  //   })
  // })
  // // RECIPES
  // const recipes = await graphql(`
  //   {
  //     allRecipesJson {
  //       edges {
  //         node {
  //           title
  //           ingredients
  //         }
  //       }
  //     }
  //   }
  // `)
  // createPage({
  //   path: `/recipes/`,
  //   component: require.resolve("./src/templates/Recipes.js"),
  //   context: {
  //     recipes: recipes.data.allRecipesJson.edges.map(edge => {
  //       const recipe = edge.node
  //       return {
  //         title: recipe.title,
  //       }
  //     }),
  //   },
  // })
  // recipes.data.allRecipesJson.edges.forEach(async edge => {
  //   const recipe = edge.node
  //   const ingredientsResult = await graphql(`
  //     {
  //       allIngredientsJson(filter: { title: { in: [${recipe.ingredients
  //         .map(title => '"' + title + '"')
  //         .join(",")}] } }) {
  //         edges {
  //           node {
  //             title
  //             rarity
  //           }
  //         }
  //       }
  //     }
  //   `)
  //   const ingredients = ingredientsResult.data.allIngredientsJson.edges.map(
  //     edge => {
  //       return edge.node
  //     }
  //   )
  //   createPage({
  //     path: `/recipes/${slug.convertToSlug(recipe.title)}/`,
  //     component: require.resolve("./src/templates/Recipe.js"),
  //     context: {
  //       title: recipe.title,
  //       ingredients: ingredients,
  //     },
  //   })
  // })
}
