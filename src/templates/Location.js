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

const Location = ({ data, pageContext }) => {
  const location = data.locationsJson
  const { ingredients } = pageContext

  return (
    <Layout>
      <Article title={location.title}>
        <div style={{ height: "200px" }}>
          <Image
            fluid={location.image.childImageSharp.fluid}
            alt={location.title}
            style={{ maxHeight: "100%" }}
            imgStyle={{
              objectFit: "contain",
              height: "16em",
            }}
          />
          <div dangerouslySetInnerHTML={{ __html: location.description }} />
        </div>
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
      </Article>
    </Layout>
  )
}

export default Location
