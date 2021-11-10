import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Products from "../components/products"

const ThirdPage = () => (
  <Layout>
    <Seo title="Shop" />
    <div>
        <Products />
    </div>
  </Layout>
)

export default ThirdPage
