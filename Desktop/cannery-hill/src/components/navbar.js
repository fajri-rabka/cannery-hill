import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function navbar() {
    return (
        <nav>
             <div className="container">
             <div className="links">
                <Link to="/shop/">Fresh Vegetables</Link>
                <Link to="/shop/">Fresh Fruit</Link>
                    <Link to="/">
                        <StaticImage
                        src="../images/logo-main-cannery.png"
                        width={300}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="Product"
                        className="main-logo"
                        />
                    </Link>
                <Link to="/shop/">Salad</Link>
                <Link to="/shop/">Spices</Link>
            </div>
            </div>
        </nav>
    )
}
