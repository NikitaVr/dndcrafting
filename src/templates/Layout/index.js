import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from "./Nav"
import "./layout.css"
const Layout = props => {
  const { children } = props
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}
export default Layout
