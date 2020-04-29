import React from "react"
import { Link } from "gatsby"
import { convertToSlug } from "../utils/slug"
import Layout from "./Layout/"

const Ingredients = props => {
  const { pageContext } = props
  const { ingredients } = pageContext
  return (
    <Layout>
      <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
        <ul>
          {ingredients.map((item, index) => {
            return (
              <li key={`link_${index}`}>
                <Link to={"/ingredients/" + convertToSlug(item.title)}>
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}
export default Ingredients
