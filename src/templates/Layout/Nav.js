import React from "react"
import { Link } from "gatsby"
const Nav = props => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        DnD Crafting
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link className="nav-link" to="/locations">
              Locations
            </Link>
          </li>
          <li class="nav-item active">
            <Link className="nav-link" to="/recipes">
              Recipes
            </Link>
          </li>
          <li class="nav-item active">
            <Link className="nav-link" to="/ingredients">
              Ingredients
            </Link>
          </li>
          <li class="nav-item active">
            <a
              className="nav-link"
              target="_blank"
              href="https://github.com/NikitaVr/dndcrafting"
            >
              Contribute
            </a>
          </li>
          <li class="nav-item active">
            <Link className="nav-link" to="/">
              Team
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Nav
