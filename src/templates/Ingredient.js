import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "./Layout/"
import Article from "./Article/"
import { convertToSlug } from "../utils/slug"
import { useMediaQuery } from "../utils/mediaQuery"
import { ListGroup } from "react-bootstrap"

export const query = graphql`
  query($name: String! = "lavender") {
    markdownRemark(frontmatter: { name: { eq: $name } }) {
      id
      frontmatter {
        name
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Ingredient = ({ data, pageContext }) => {
  const ingredient = { ...data.markdownRemark.frontmatter }
  // const imageSrc = "/static" + ingredient.image
  console.log("INGREDIENT")
  console.log(ingredient)
  const { recipes } = pageContext
  console.log(recipes)
  const isDesktop = useMediaQuery("(min-width: 500px)")

  return (
    <Layout>
      <Article title={ingredient.name}>
        <div style={{ height: isDesktop ? "400px" : "200px" }}>
          {/* <img
            src={imageSrc}
            alt={ingredient.name}
            style={{ maxHeight: "100%" }}
            imgStyle={{
              objectFit: "contain",
              height: "100%",
            }}
          /> */}
          {ingredient.image && (
            <Image
              fluid={ingredient.image.childImageSharp.fluid}
              alt={ingredient.name}
              style={{ maxHeight: "100%" }}
              imgStyle={{
                objectFit: "contain",
                height: "100%",
              }}
            />
          )}
        </div>
        <h4>Rarity: {ingredient.rarity}</h4>
        <div dangerouslySetInnerHTML={{ __html: ingredient.description }} />
        <div class="w-100">
          <h2>Recipes</h2>
          <hr class="border-primary"></hr>
          <ListGroup>
            {recipes &&
              recipes.map(item => {
                const recipe = { ...item.frontmatter }
                console.log(recipe)
                return (
                  <Link to={`/recipes/${convertToSlug(recipe.name)}`}>
                    <ListGroup.Item action>
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">{recipe.name}</h5>
                        {/*<small>3 days ago</small>*/}
                      </div>
                      <div class="d-flex w-100 justify-content-between">
                        <p>Effects: {recipe.effects.join(",")}</p>
                      </div>
                    </ListGroup.Item>
                  </Link>
                )
              })}
          </ListGroup>
        </div>
      </Article>
    </Layout>
  )
}

export default Ingredient
