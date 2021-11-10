import * as React from "react"


// import Layout from "../components/layout"
import Seo from "../components/seo"
import Slider from "../components/slider"
import Navbar from "../components/navbar"
import Product from "../components/products"



const IndexPage = () => (
  <div>
    <Seo title="Home" />
        <Navbar/>
    <div class="container-fluid p-0">
        <Slider />
    </div>
    <Product/>

  </div>
)

export default IndexPage
