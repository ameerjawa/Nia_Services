import Slider from "react-slick";
import { Image } from "./image";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Gallery = ({ data }) => {
  const settings = {
    dots: true,
    infinite: false, // disables looping
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true, // show arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Explore our work and see how we’ve helped secure homes, businesses,
            and vehicles with expert locksmith solutions.
          </p>
        </div>
        {data && data.length > 0 ? (
          <Slider {...settings}>
            {data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="p-2">
                <Image
                  title={d.title}
                  largeImage={d.largeImage}
                  smallImage={d.smallImage}
                />
              </div>
            ))}
          </Slider>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};
