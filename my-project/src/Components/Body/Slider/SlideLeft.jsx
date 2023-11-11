import React from "react";
import "./slideleft.scss";

const SlideLeft = () => {
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
      <div className="slider-left">
        <div className="slider-left-track">
          {images.map((image, index) => (
            <div className="slide-left" key={index}>
              <img src={image.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideLeft;
