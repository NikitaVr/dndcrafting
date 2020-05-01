import React from "react"
import { Helmet } from "react-helmet"
const Article = props => {
  const { children, title } = props
  return (
    <div class="container h-100 pt-5">
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta
          name="description"
          content="Crafting, Cooking, and Alchemy Ingredients and Locations for Dungeons and Dragons"
        />
      </Helmet>
      <div class="pb-2">
        <h1>{title}</h1>
      </div>
      <div class="bg-light h-100 border-top border-primary p-4">{children}</div>
    </div>
  )
}
export default Article
