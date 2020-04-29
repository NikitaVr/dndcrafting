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
      <Article>
        <div>
          <h1>{ingredient.title}</h1>
          <Image
            fluid={ingredient.image.childImageSharp.fluid}
            alt={ingredient.title}
            style={{ float: "left", marginRight: "1rem", width: 150 }}
          />
          <div dangerouslySetInnerHTML={{ __html: ingredient.description }} />
        </div>
      </Article>
    </Layout>
  )
}

export default Ingredient
