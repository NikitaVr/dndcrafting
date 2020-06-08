import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "./Layout/"
import Article from "./Article/"
import { convertToSlug } from "../utils/slug"
import { useMediaQuery } from "../utils/mediaQuery"
import { ListGroup } from "react-bootstrap"

import _ from "lodash"

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
  let { ingredients } = pageContext
  const isDesktop = useMediaQuery("(min-width: 500px)")

  ingredients = ingredients.map(item => {
    return { ...item.frontmatter }
  })

  const ingredientsByRarity = _.groupBy(ingredients, "rarity")

  console.log("ingredientsByRarity")
  console.log(ingredientsByRarity)

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
          {["Common", "Uncommon", "Rare", "Very Rare", "Legendary"].map(
            rarity => (
              <div>
                <h3>{rarity}</h3>
                <ListGroup>
                  {ingredientsByRarity &&
                    ingredientsByRarity[rarity] &&
                    ingredientsByRarity[rarity].map(ing => {
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
            )
          )}
        </div>
      </Article>
    </Layout>
  )
}

export default Location
