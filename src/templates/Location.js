import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "./Layout/"

export const query = graphql`
  query($title: String!) {
    locationsJson(title: { eq: $title }) {
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

const Location = ({ data }) => {
  const location = data.locationsJson

  return (
    <Layout>
      <div>
        <h1>{location.title}</h1>
        <Image
          fluid={location.image.childImageSharp.fluid}
          alt={location.title}
          style={{ float: "left", marginRight: "1rem", width: 150 }}
        />
        <div dangerouslySetInnerHTML={{ __html: location.description }} />
      </div>
    </Layout>
  )
}

export default Location
