import React, { useEffect, useRef, useState } from 'react';
import "./carousel.scss"

const Carousel = () => {
  const carouselData = [
    {
      img: "img1.webp",
      title: "Dream Space",
      info:` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi in
            voluptates voluptatum blanditiis aliquid voluptatem nam pariatur,
            doloribus saepe illum totam inventore beatae, incidunt impedit.` 

    },
    {
      img: "img2.webp",
      title: "Dream Space",
      info:` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi in
            voluptates voluptatum blanditiis aliquid voluptatem nam pariatur,
            doloribus saepe illum totam inventore beatae, incidunt impedit.` 

    },
    {
      img: "img3.webp",
      title: "Dream Space",
      info:` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi in
            voluptates voluptatum blanditiis aliquid voluptatem nam pariatur,
            doloribus saepe illum totam inventore beatae, incidunt impedit.` 

    },
    {
      img: "img4.webp",
      title: "Dream Space",
      info:` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi in
            voluptates voluptatum blanditiis aliquid voluptatem nam pariatur,
            doloribus saepe illum totam inventore beatae, incidunt impedit.` 

    },
  ];
  const carouselRef = useRef(null)
  const [currentState, setCurrenState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === carouselData.length - 1) {
        setCurrenState(0)
      } else {
        setCurrenState(currentState + 1)
      }
    }, 5000);
    updateTextClasses();
    return ()=> clearTimeout(timer)
  }, [currentState])

  const updateTextClasses = () => {
    if (carouselRef.current) {
      const textElements = carouselRef.current.querySelectorAll(
        ".carousel-text h1, .carousel-text p, .carousel-text .button"
      );

      textElements.forEach((element, index) => {
        if (currentState === 0) {
          element.classList.add("active");

          // Remove the "active class after 3 seconds"
          setTimeout(() => {
            element.classList.remove("active")
          },3000)
        }
      })
      textElements.forEach((element, index) => {
        if (currentState) {
          element.classList.add("active")

          // Remove the 'active'class after 3seconds
          setTimeout(() => {
            element.classList.remove("active");
          }, 3000);
        }
      })
    }
  }
  return (
    <div className="carousel">
      <div className="relative">
        <div className='h-[80vh] grid grid-cols-2 sm:block'>

          <img className="h-[80vh] w-[100%] slide-right" height="100%" src={carouselData[currentState].img} alt="" />
        </div>
          <div ref={carouselRef} className=" carousel-text absolute top-28 md:top-80 bottom-0 left-0 right-0 space-y-6 ">
            <h1 className='slide-up'>{carouselData[currentState].title }</h1>
            <p className='fade-in'>{carouselData[currentState].info} </p>
            <div className="button slide-left">
              <span className="line-1"></span>
              <span className="line-2"></span>
              <span className="line-3"></span>
              <span className="line-4"></span>
              <span className="line-5"></span>
              <span className="line-6"></span>
              Read more
            </div>
          </div>
        </div>
    </div>
  );
}
export default Carousel