import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "./Layout/"
import Article from "./Article/"
import { convertToSlug } from "../utils/slug"
import { useMediaQuery } from "../utils/mediaQuery"
import { ListGroup } from "react-bootstrap"

// export const query = graphql`
//   query($name: String! = "Lavender Tea") {
//     markdownRemark(frontmatter: { name: { eq: $name } }) {
//       id
//       frontmatter {
//         name
//         description
//         image {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

export const query = graphql`
  query($name: String!) {
    markdownRemark(frontmatter: { name: { eq: $name } }) {
      id
      frontmatter {
        name
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
  }
`

const Location = ({ data, pageContext }) => {
  const location = { ...data.markdownRemark.frontmatter }
  const { ingredients } = pageContext
  const isDesktop = useMediaQuery("(min-width: 500px)")

  return (
    <Layout>
      <Article title={location.name}>
        <div style={{ height: isDesktop ? "400px" : "200px" }}>
          {location.image && (
            <Image
              fluid={location.image.childImageSharp.fluid}
              alt={location.name}
              style={{ maxHeight: "100%" }}
              imgStyle={{
                objectFit: "contain",
                height: "100%",
              }}
            />
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: location.description }} />
        <div class="w-100">
          <h2>Ingredients</h2>
          <hr class="border-primary"></hr>
          <ListGroup>
            {ingredients &&
              ingredients.map(item => {
                const ing = { ...item.frontmatter }
                return (
                  <Link to={`/ingredients/${convertToSlug(ing.name)}`}>
                    <ListGroup.Item action>
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">{ing.name}</h5>
                        {/*<small>3 days ago</small>*/}
                      </div>
                      <div class="d-flex w-100 justify-content-between">
                        <p>Rarity: {ing.rarity}</p>
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

export default Location
