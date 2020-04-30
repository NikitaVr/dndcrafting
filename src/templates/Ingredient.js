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
        <div style={{ height: "200px" }}>
          <Image
            fluid={ingredient.image.childImageSharp.fluid}
            alt={ingredient.title}
            style={{ maxHeight: "100%" }}
            imgStyle={{
              objectFit: "contain",
              height: "16em",
            }}
          />
        </div>
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
