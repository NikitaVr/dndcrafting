import React from "react"
import { Link } from "gatsby"
import { convertToSlug } from "../utils/slug"
import Layout from "./Layout/"

const Recipes = props => {
  const { pageContext } = props
  const { recipes } = pageContext
  return (
    <Layout>
      <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
        <ul>
          {recipes.map((item, index) => {
            return (
              <li key={`link_${index}`}>
                <Link to={"/recipes/" + convertToSlug(item.title)}>
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
export default Recipes
