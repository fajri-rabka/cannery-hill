import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="About" />
    <h1>About Us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio eveniet cumque pariatur voluptates. Labore aut eos cumque similique rem!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

