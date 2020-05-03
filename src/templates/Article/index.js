import React from "react"
import { Helmet } from "react-helmet"
import { useMediaQuery } from "../../utils/mediaQuery"
const Article = props => {
  const { children, title, noHead } = props
  const isDesktop = useMediaQuery("(min-width: 500px)")
  return (
    <div class={`container h-100 ${isDesktop ? "pt-5" : "pt-2"} px-0`}>
      {noHead ? null : (
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta
            name="description"
            content="Crafting, Cooking, and Alchemy Ingredients and Locations for Dungeons and Dragons"
          />
        </Helmet>
      )}
      <div class="pb-2">
        <h1 class={`${isDesktop ? "" : "pl-4"}`}>{title}</h1>
      </div>
      <div class="bg-light h-100 border-top border-primary p-4">{children}</div>
    </div>
  )
}
export default Article
