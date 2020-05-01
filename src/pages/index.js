import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { ListGroup } from "react-bootstrap"

import Layout from "../templates/Layout/"

export default () => (
  <div>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>D&D Crafting</title>
      <meta
        name="description"
        content="Crafting, Cooking, and Alchemy Ingredients and Locations for Dungeons and Dragons"
      />
    </Helmet>
    <Layout>
      <ListGroup>
        <Link to="/locations/">
          <ListGroup.Item action>
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">🗺️ Locations</h5>
            </div>
          </ListGroup.Item>
        </Link>
        <Link to="/recipes/">
          <ListGroup.Item action>
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">🍳 Recipes</h5>
            </div>
          </ListGroup.Item>
        </Link>
        <Link to="/ingredients/">
          <ListGroup.Item action>
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">🌾 Ingredients</h5>
            </div>
          </ListGroup.Item>
        </Link>
      </ListGroup>
    </Layout>
  </div>
)
