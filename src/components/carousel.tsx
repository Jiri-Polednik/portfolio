"use client";

import Slider from "react-slick";
import Image from "next/image";

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Image
            src={"/images/anewgo.jpg"}
            alt={"Anewgo Project Image"}
            width={500}
            height={500}
            className={"rounded-2xl"}
          />
        </div>
        <div>
          <Image
            src={"/images/ondrasek.jpg"}
            alt={"Ondrasek Project Image"}
            width={500}
            height={500}
            className={"rounded-2xl"}
          />
        </div>
      </Slider>
    </div>
  );
}
