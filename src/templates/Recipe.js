import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "./Layout/"

export const query = graphql`
  query($title: String!) {
    recipesJson(title: { eq: $title }) {
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

const Recipe = ({ data }) => {
  const recipe = data.recipesJson

  return (
    <Layout>
      <div>
        <h1>{recipe.title}</h1>
        <Image
          fluid={recipe.image.childImageSharp.fluid}
          alt={recipe.title}
          style={{ float: "left", marginRight: "1rem", width: 150 }}
        />
        <div dangerouslySetInnerHTML={{ __html: recipe.description }} />
      </div>
    </Layout>
  )
}

export default Recipe
