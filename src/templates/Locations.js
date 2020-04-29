import React from "react"
import { Link } from "gatsby"
import { convertToSlug } from "../utils/slug"
import Layout from "./Layout/"

const Locations = props => {
  const { pageContext } = props
  const { locations } = pageContext
  return (
    <Layout>
      <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
        <ul>
          {locations.map((item, index) => {
            return (
              <li key={`link_${index}`}>
                <Link to={"/locations/" + convertToSlug(item.title)}>
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
export default Locations
