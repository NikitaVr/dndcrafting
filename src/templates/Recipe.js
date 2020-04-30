import React from "react"
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

const Recipe = ({ data }) => {
  const recipe = data.recipesJson

  return (
    <Layout>
      <Article title={recipe.title}>
        <Image
          fluid={recipe.image.childImageSharp.fluid}
          alt={recipe.title}
          style={{
            float: "left",
            margin: "0rem 1rem 0rem 2rem",
            width: 150,
          }}
        />
        <h4>Effect: {recipe.effect}</h4>
        <div dangerouslySetInnerHTML={{ __html: recipe.description }} />
        <div class="w-100">
          <h2>Ingredients</h2>
        </div>
      </Article>
    </Layout>
  )
}

export default Recipe
