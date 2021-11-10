import React from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
        <Link to="/shop/">
        <StaticImage
                    src="../images/slider1.jpg"
                    formats={["auto", "webp", "avif"]}
                    alt="Product"
                    />
        </Link>
        <Link to="/shop/">
        <StaticImage
                    src="../images/slider2.jpg"
                    formats={["auto", "webp", "avif"]}
                    alt="Product"
                    />
        </Link>
    </Slider>
  );
}