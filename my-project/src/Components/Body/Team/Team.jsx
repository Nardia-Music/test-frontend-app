import React from 'react';
import "./team.scss"

const Team = () => {
   const teamdata = [
      {
        name: " Larry Brazz",
        img: "/h1-img-17.jpg",
        position: "Producer",
      },
      {
        name: " Larry Brazz",
        img: "/h1-img-16.jpg",
        position: "Producer",
      },
      {
        name: " Larry Brazz",
        img: "/h1-img-18.jpg",
        position: "Producer",
      },
      {
        name: " Larry Brazz",
        img: "/h1-img-17.jpg",
        position: "Producer",
      },
    ];

  return (
    <div className="my-12 grid gap-6 md:grid-cols-4 sm:grid-cols-2 ">
      {teamdata.map((team, index) => (
        <div key={index} className=" ">
          <div className="relative h-[70vh] team">
            <img className='h-[100%]' src={team.img} alt="" />
            <div>
              <h3>{team.position}</h3>
              <p>{team.name}</p>
              <div>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team