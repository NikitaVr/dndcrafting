import React from "react"
const Article = props => {
  const { children, title } = props
  return (
    <div class="container h-100 pt-5">
      <div class="pb-2">
        <h1>{title}</h1>
      </div>
      <div class="bg-light h-100 border-top border-primary p-4">{children}</div>
    </div>
  )
}
export default Article
