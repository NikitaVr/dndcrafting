import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "./Layout/"
import Article from "./Article/"
import { convertToSlug } from "../utils/slug"
import { ListGroup } from "react-bootstrap"

export const query = graphql`
  query($title: String!) {
    recipesJson(title: { eq: $title }) {
      title
      description
      effect
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Recipe = ({ data, pageContext }) => {
  const recipe = data.recipesJson
  const { ingredients } = pageContext

  return (
    <Layout>
      <Article title={recipe.title}>
        <Image
          fluid={recipe.image.childImageSharp.fluid}
          alt={recipe.title}
          style={{
            // float: "left",
            margin: "0rem 1rem 0rem 2rem",
            width: 150,
          }}
        />
        <h4>Effect: {recipe.effect}</h4>
        <div dangerouslySetInnerHTML={{ __html: recipe.description }} />
        <div class="w-100">
          <h2>Ingredients</h2>
          <ListGroup>
            {ingredients &&
              ingredients.map(ing => (
                <Link to={`/ingredients/${convertToSlug(ing.title)}`}>
                  <ListGroup.Item action>
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">{ing.title}</h5>
                      {/*<small>3 days ago</small>*/}
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                      <p>Rarity: {ing.rarity}</p>
                    </div>
                  </ListGroup.Item>
                </Link>
              ))}
          </ListGroup>
        </div>
      </Article>
    </Layout>
  )
}

export default Recipe
