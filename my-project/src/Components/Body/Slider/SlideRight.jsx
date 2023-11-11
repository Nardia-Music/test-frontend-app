import React from "react";
import "./slider.scss";

const SlideRight = () => {
  const images = [
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
    { image: "/img2.webp" },
  ];

  return (
    <div>
      <div className="slider">
        <div className="slider-track">
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideRight;
