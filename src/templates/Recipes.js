import React, { useState } from "react"
import { Link } from "gatsby"
import { convertToSlug } from "../utils/slug"
import Layout from "./Layout/"
import Article from "./Article/"
import { ListGroup, InputGroup, FormControl } from "react-bootstrap"
import { DebounceInput } from "react-debounce-input"

const Recipes = props => {
  const { pageContext } = props
  const { recipes } = pageContext
  const [search, setSearch] = useState()

  const recipesF = recipes.filter(
    item =>
      !search ||
      (search && item.title.toLowerCase().includes(search.toLowerCase()))
  )
  return (
    <Layout>
      <Article title="Recipes">
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">🔍</InputGroup.Text>
            </InputGroup.Prepend>
            <DebounceInput
              element={FormControl}
              minLength={1}
              debounceTimeout={300}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </InputGroup>
          <ListGroup>
            {recipesF.map((item, index) => {
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
