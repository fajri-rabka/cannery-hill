import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import * as st from '../styles/product.module.css'

export default function products() {
    return (
        <div className="container">
        <div className={`${st.product} row`}>
            <h1 class="text-center">Featured Product</h1>
            <div class="col-6 col-xl-3">
                <Link to="/shop/">
                    <StaticImage
                    src="../images/Apple-Fuji-Wangshan-2pcs-600x600-1.jpg"
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Product"
                    className={st.imgPr}
                />
                <p className={st.productName}>Product 1</p>
                <p className={st.productPrice}>Rp. 17.000,-</p>
                </Link>
            </div>
            <div class="col-6 col-xl-3">
                <Link to="/shop/">
                    <StaticImage
                    src="../images/big-chayotee.jpg"
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Product"
                    className={st.imgPr}
                />
                <p className={st.productName}>Product 1</p>
                <p className={st.productPrice}>Rp. 17.000,-</p>
                </Link>
            </div>
            <div class="col-6 col-xl-3">
                <Link to="/shop/">
                    <StaticImage
                    src="../images/Buncis-baby-kenya.jpg"
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Product"
                    className={st.imgPr}
                />
                <p className={st.productName}>Product 1</p>
                <p className={st.productPrice}>Rp. 17.000,-</p>
                </Link>
            </div>
            <div class="col-6 col-xl-3">
                <Link to="/shop/">
                    <StaticImage
                    src="../images/Cherry-Tomato-600x600-1.jpg"
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Product"
                    className={st.imgPr}
                />
                <p className={st.productName}>Product 1</p>
                <p className={st.productPrice}>Rp. 17.000,-</p>
                </Link>
            </div>
            <div class="col-6 col-xl-3">
                <Link to="/shop/">
                    <StaticImage
                    src="../images/jicama.jpg"
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Product"
                    className={st.imgPr}
                />
                <p className={st.productName}>Product 1</p>
                <p className={st.productPrice}>Rp. 17.000,-</p>
                </Link>
            </div>
            <div class="col-6 col-xl-3">
                <Link to="/shop/">
                    <StaticImage
                    src="../images/kiwi-gold-600x600-1.jpg"
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Product"
                    className={st.imgPr}
                />
                <p className={st.productName}>Product 1</p>
                <p className={st.productPrice}>Rp. 17.000,-</p>
                </Link>
            </div>
            <div class="col-6 col-xl-3">
                <Link to="/shop/">
                    <StaticImage
                    src="../images/kiwi1.jpg"
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Product"
                    className={st.imgPr}
                />
                <p className={st.productName}>Product 1</p>
                <p className={st.productPrice}>Rp. 17.000,-</p>
                </Link>
            </div>
            <div class="col-6 col-xl-3">
                <Link to="/shop/">
                    <StaticImage
                    src="../images/pear-pakcham-600x600-1.jpg"
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Product"
                    className={st.imgPr}
                />
                <p className={st.productName}>Product 1</p>
                <p className={st.productPrice}>Rp. 17.000,-</p>
                </Link>
            </div>
        </div>
    </div>
    )
}
