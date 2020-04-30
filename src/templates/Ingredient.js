import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "./Layout/"
import Article from "./Article/"

export const query = graphql`
  query($title: String!) {
    ingredientsJson(title: { eq: $title }) {
      title
      description
      rarity
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

const Ingredient = ({ data }) => {
  const ingredient = data.ingredientsJson

  return (
    <Layout>
      <Article title={ingredient.title}>
        <Image
          fluid={ingredient.image.childImageSharp.fluid}
          alt={ingredient.title}
          style={{
            float: "left",
            margin: "0rem 1rem 0rem 2rem",
            width: 150,
          }}
        />
        <h4>Rarity: {ingredient.rarity}</h4>
        <div dangerouslySetInnerHTML={{ __html: ingredient.description }} />
        <div class="w-100">
          <h2>Recipes</h2>
        </div>
      </Article>
    </Layout>
  )
}

export default Ingredient
