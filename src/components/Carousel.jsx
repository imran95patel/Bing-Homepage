import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/Img1.jpg";
import img2 from "../assets/Img2.jpg";
import img3 from "../assets/Img3.jpg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const carouselItems = [
    { imgSrc: img1, title: "Item 1", description: "Description 1" },
    { imgSrc: img2, title: "Item 2", description: "Description 2" },
    { imgSrc: img3, title: "Item 3", description: "Description 3" },
    { imgSrc: img2, title: "Item 2", description: "Description 2" },
    { imgSrc: img3, title: "Item 3", description: "Description 3" },
  ];

  return (
    <div className="mx-auto py-10 w-4/6 md:w-5/6 mt-80">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="px-2">
            <div className="relative">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-32 rounded-lg "
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white p-2 rounded">
                <h3 className="text-lg">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
