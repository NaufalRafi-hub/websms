import React from "react";
import Slider from "react-slick";
import Data from "./Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Img, Wrapper } from "./SliderClientElements";

export default function SliderClient() {
  var settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        setting: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        setting: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="container">
      <Wrapper>
        <Slider {...settings}>
          {Data.map((data, index) => (
            <div key={index}>
              <Img src={data.img} />
            </div>
          ))}
        </Slider>
      </Wrapper>
    </div>
  );
}
