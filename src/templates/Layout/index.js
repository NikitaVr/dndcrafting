import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from "./Nav"
const Layout = props => {
  const { children } = props
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundImage:
          //"url(http://www.zingerbugimages.com/backgrounds/tan_parchment_paper_wallpaper_texture_seamless.jpg)",
          "url(https://www.zingerbugimages.com/backgrounds/off_white_parchment_paper_wallpaper_texture_seamless.jpg)",
      }}
    >
      <Nav />
      {children}
    </div>
  )
}
export default Layout
