import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { ListGroup } from "react-bootstrap"

import Layout from "../templates/Layout/"
import Article from "../templates/Article/"

export default () => (
  <div>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>
        D&D Crafting - A digital toolset for crafting, recipes, ingredients, and
        locations in Dungeons and Dragons
      </title>
      <meta
        name="description"
        content="Crafting, Cooking, and Alchemy Ingredients and Locations for Dungeons and Dragons"
      />
    </Helmet>

    <Layout>
      <Article title="D&D Crafting" noHead>
        <h2>Quick Access</h2>
        <hr class="border-primary"></hr>
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
        <h2>Intro</h2>
        <hr class="border-primary"></hr>
        <p>
          Welcome to DnD Crafting. This site is meant to help Dungeons and
          Dragons players and dungeon masters with crafting.
        </p>
        <h3>Locations</h3>
        <hr class="border-primary"></hr>
        <p>
          The players are travelling through the woods, and one of them says "I
          go foraging in the bushes". What do they find?
        </p>
        <p>
          The locations page keeps a list of different locations, and each
          location shows the ingredients that can be found there. Each
          ingredients has a rarity, making it easy for DMs to decide what the
          player finds.
        </p>
        <h3>Recipes</h3>
        <hr class="border-primary"></hr>
        <p>
          Each recipe contains the effects of the recipe, such as giving +1d4 on
          the next wisdom check, a list of ingredients needed, and other useful
          information.
        </p>
        <h3>Ingredients</h3>
        <hr class="border-primary"></hr>
        <p>
          Each ingredients has a rarity, and a list of the recipes it can be
          used in.
        </p>
      </Article>
    </Layout>
  </div>
)
