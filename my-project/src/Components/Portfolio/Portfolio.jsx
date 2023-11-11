import React, { useEffect } from 'react';
import "./portfolio.scss"
import ShadowDance from '../Body/AminateShadow/ShadowDance';

const Portfolio = () => {

    // useEffect(() => {
    //      $(".hover").mouseleave(function () {
    //        $(this).removeClass("hover");
    //      });
    // })

    const data = [
      {
        title: "Sue Shei",
        info: `The strength to change what I can, the inability to accept what I
            can't and the incapacity to tell the difference.`,
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg",
      },
      {
        title: "Sue Shei",
        info: `The strength to change what I can, the inability to accept what I
            can't and the incapacity to tell the difference.`,
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg",
      },
      {
        title: "Sue Shei",
        info: `The strength to change what I can, the inability to accept what I
            can't and the incapacity to tell the difference.`,
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg",
      },
      {
        title: "Sue Shei",
        info: `The strength to change what I can, the inability to accept what I
            can't and the incapacity to tell the difference.`,
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg",
      },
      {
        title: "Sue Shei",
        info: `The strength to change what I can, the inability to accept what I
            can't and the incapacity to tell the difference.`,
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg",
      },
      {
        title: "Sue Shei",
        info: `The strength to change what I can, the inability to accept what I
            can't and the incapacity to tell the difference.`,
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg",
      },
      {
        title: "Sue Shei",
        info: `The strength to change what I can, the inability to accept what I
            can't and the incapacity to tell the difference.`,
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg",
      },
      {
        title: "Sue Shei",
        info: `The strength to change what I can, the inability to accept what I
            can't and the incapacity to tell the difference.`,
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg",
      },
      {
        title: "Sue Shei",
        info: `The strength to change what I can, the inability to accept what I
            can't and the incapacity to tell the difference.`,
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg",
      },
      {
        title: "Sue Shei",
        info: `The strength to change what I can, the inability to accept what I
            can't and the incapacity to tell the difference.`,
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg",
      },
      {
        title: "Sue Shei",
        info: `The strength to change what I can, the inability to accept what I
            can't and the incapacity to tell the difference.`,
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg",
      },
      {
        title: "Sue Shei",
        info: `The strength to change what I can, the inability to accept what I
            can't and the incapacity to tell the difference.`,
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg",
      },
      {
        title: "Sue Shei",
        info: `The strength to change what I can, the inability to accept what I
            can't and the incapacity to tell the difference.`,
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg",
      },
      {
        title: "Sue Shei",
        info: `The strength to change what I can, the inability to accept what I
            can't and the incapacity to tell the difference.`,
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg",
      },
    ];
    return (
        <div className='my-20 space-y-12 container mx-auto'>
        <ShadowDance/>
        <div className="grid md:grid-cols-3 grid-cols-2">
          {data.map((data) => (
            <figure class="snip1283 relative">
              <img src={data.img} alt="sample70" />
              <figcaption className="absolute top-0">
                <h3>{data.title}</h3>
                <p>{data.info}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    );
}

export default Portfolio