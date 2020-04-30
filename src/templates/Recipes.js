import React from "react"
import { Link } from "gatsby"
import { convertToSlug } from "../utils/slug"
import Layout from "./Layout/"
import Article from "./Article/"
import { ListGroup } from "react-bootstrap"

const Recipes = props => {
  const { pageContext } = props
  const { recipes } = pageContext
  return (
    <Layout>
      <Article title="Recipes">
        <div>
          <ListGroup>
            {recipes.map((item, index) => {
              return (
                <Link to={"/recipes/" + convertToSlug(item.title)}>
                  <ListGroup.Item action>
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">{item.title}</h5>
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
export default Recipes
