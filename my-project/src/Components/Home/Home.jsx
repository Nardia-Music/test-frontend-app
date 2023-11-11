import React from 'react'
import HomePagePortfolio from '../Body/HomePagePortfolio/HomePagePortfolio';
import Slider from '../Body/Slider/Slider';
import Team from '../Body/Team/Team';
import Carousel from '../Body/Carousel/Carousel';


const Home = () => {
  return (
    <div>
      <Carousel/>
      <Slider />
      <HomePagePortfolio />
      <Team/>
    </div>
  )
}

export default Home