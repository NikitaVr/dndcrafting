import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../templates/Layout/"

export default () => (
  <div>
    <Layout>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>DnD Crafting</title>
      </Helmet>
      Hello world!
    </Layout>
  </div>
)
