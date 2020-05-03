import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
const Navigation = props => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">DnD Crafting</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link className="nav-link" to="/locations">
              Locations
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/recipes">
              Recipes
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/ingredients">
              Ingredients
            </Link>
          </Nav.Link>
          <Nav.Link
            href="https://github.com/NikitaVr/dndcrafting"
            target="_blank"
          >
            <span className="nav-link">Contribute</span>
          </Nav.Link>
          <Nav.Link target="_blank" href="https://discord.gg/WUbvxZs">
            <span className="nav-link">Discord</span>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/">
              Team
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Navigation
