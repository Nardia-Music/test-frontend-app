import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const HomePagePortfolio = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
      const content = document.querySelectorAll(".animate-img");
      const screenPosition = window.innerHeight / 1.2;

      content.forEach((element) => {
        const boxTop = element.getBoundingClientRect().top;
        if (boxTop < screenPosition) {
         element.style.opacity = 1;
         element.style.transform = "scale(1)";
         element.style.transition = "all 1s";
        } else {
          element.style.opacity = 0;
          element.style.transform = "scale(0.1)";
          element.style.transition = "all 1s";
        }
      });
    };
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      // ?Remove the even listener when the component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
  return (
    <div className="container mx-auto text-center portfolio">
      <div className=" text-white space-y-6 ">
        <div className="grid md:grid-cols-2 space-y-12 md:space-y-0">
          <div className="relative">
            <img className="animate-img" src="/h1-img-16.jpg" alt="" />
            {/* <div width="100%" className='absolute top-0'>
                          <img className='grid-img' src="/giphy.gif" alt="MY GIF" />
                      </div> */}
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <p>01.</p>
            <p className="text-4xl font-bold text-center">The Wastelands.</p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco lab
              oris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor.
            </p>
            <div className="button">
              <span class="line-1"></span>
              <span class="line-2"></span>
              <span class="line-3"></span>
              <span class="line-4"></span>
              <span class="line-5"></span>
              <span class="line-6"></span>
              Read more
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:hidden space-y-12 md:space-y-0">
          <div className="relative">
            <img className="animate-img" src="/h1-img-16.jpg" alt="" />
            {/* <div width="100%" className='absolute top-0'>
                          <img className='grid-img' src="/giphy.gif" alt="MY GIF" />
                      </div> */}
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <p>01.</p>
            <p className="text-4xl font-bold text-center">The Wastelands.</p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco lab
              oris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor.
            </p>
            <div className="button">
              <span class="line-1"></span>
              <span class="line-2"></span>
              <span class="line-3"></span>
              <span class="line-4"></span>
              <span class="line-5"></span>
              <span class="line-6"></span>
              Read more
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 hidden space-y-12 md:space-y-0">
          <div className="flex flex-col items-center justify-center space-y-4">
            <p>01.</p>
            <p className="text-4xl font-bold text-center">The Wastelands.</p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco lab
              oris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor.
            </p>
            <div className="button">
              <span class="line-1"></span>
              <span class="line-2"></span>
              <span class="line-3"></span>
              <span class="line-4"></span>
              <span class="line-5"></span>
              <span class="line-6"></span>
              Read more
            </div>
          </div>
          <div className="relative">
            <img
              className="animate-img"
              height="100%"
              src="/h1-img-16.jpg"
              alt=""
            />
            {/* <div width="100%" className='absolute top-0'>
                          <img className='grid-img' src="/giphy.gif" alt="MY GIF" />
                      </div> */}
          </div>
        </div>
        <div className="grid md:grid-cols-2 space-y-12 md:space-y-0">
          <div className="relative">
            <img className="animate-img" src="/h1-img-16.jpg" alt="" />
            {/* <div width="100%" className='absolute top-0'>
                          <img className='grid-img' src="/giphy.gif" alt="MY GIF" />
                      </div> */}
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <p>01.</p>
            <p className="text-4xl font-bold text-center">The Wastelands.</p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco lab
              oris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor.
            </p>
            <div className="button">
              <span class="line-1"></span>
              <span class="line-2"></span>
              <span class="line-3"></span>
              <span class="line-4"></span>
              <span class="line-5"></span>
              <span class="line-6"></span>
              Read more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePagePortfolio