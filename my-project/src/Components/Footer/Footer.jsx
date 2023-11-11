import React from 'react'

const Footer = () => {
    const igPosts = ["./img4.webp", "./img4.webp", "./img4.webp", "./img4.webp", "./img4.webp", "./img4.webp"];
  return (
    <div className="border-t-4 py-16 px-8 bg-black">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 text-white">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Our Production</h1>
          <p>About Spotlight</p>
          <p>Latest Videos</p>
          <p>Studio Tour</p>
          <p>Press & News</p>
          <p>Help (FAQ)</p>
        </div>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">About</h1>
          <p>
            Create your feature presentation the modern way & without effort.
          </p>
          <div className='space-x-4'>
            <span>
              <i className="fa  fa-facebook"></i>
            </span>
            <span>
              <i className="fa  fa-twitter"></i>
            </span>
            <span>
              <i className="fa  fa-instagram"></i>
            </span>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Film News</h1>
          <p>Subscribe To Spotlight Newsletter today</p>
          <div className='bg-black py-4 border-2'>
            <input className='bg-black outline-none w-[80%]' type="text" name="" id="" placeholder="Your Email" />
            <label htmlFor="">
              <i></i>
            </label>
          </div>
        </div>
        <div className='space-y-6'>
          <h1 className="text-2xl font-bold">Instagram Posts</h1>
          <div className="grid grid-cols-3">
            {igPosts.map((post, i) => (
              <img key={i} src={post} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer