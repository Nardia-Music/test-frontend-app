import React, { useState } from "react";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import "./navbar.scss"

const MenuBar = ({menuOpen}) => {
  const [changeIcon, setChangeIcon] = useState({
    home: false,
    pages: false,
    portfolio: false,
    blog: false,
  });

  const handleOpenAndClose = (menuItem) => {
    setChangeIcon((prev) => ({
      ...prev,
      [menuItem]: !prev[menuItem],
    }));
  };

  return (
    <div className=" menubar">
      <div className="">
        <div
          onClick={() => handleOpenAndClose("home")}
          className="flex justify-between items-center border-y py-2"
        >
          <h2>Home</h2>
          <div>
            {changeIcon.home ? (
              <ExpandMoreOutlinedIcon />
            ) : (
              <NavigateNextOutlinedIcon />
            )}
          </div>
        </div>
        <ul className={`menubar-items ${changeIcon.home ? "open" : ""}`}>
          <li className="effect menubar-item">Main home Page</li>
          <li className="effect menubar-item">Main home Page</li>
          <li className="effect menubar-item">Main home Page</li>
          <li className="effect menubar-item">Main home Page</li>
          <li className="effect menubar-item">Main home Page</li>
          <li className="effect menubar-item">Main home Page</li>
        </ul>
      </div>
      <div>
        <div
          onClick={() => handleOpenAndClose("pages")}
          className="flex justify-between items-center border-y py-2"
        >
          <h2>Pages</h2>
          <div>
            {changeIcon.pages ? (
              <ExpandMoreOutlinedIcon />
            ) : (
              <NavigateNextOutlinedIcon />
            )}
          </div>
        </div>
        <ul className={`menubar-items ${changeIcon.pages ? "open" : ""}`}>
          <li className="effect menubar-item">About Us</li>
          <li className="effect menubar-item">About Me</li>
          <li className="effect menubar-item">What We Do</li>
          <li className="effect menubar-item">Our Crew</li>
          <li className="effect menubar-item">Contact Us</li>
          <li className="effect menubar-item">Get In Touch</li>
          <li className="effect menubar-item">FAQ Page</li>
        </ul>
      </div>
      <div>
        <div
          onClick={() => handleOpenAndClose("portfolio")}
          className="flex justify-between items-center border-y py-2"
        >
          <h2>Portfolio</h2>
          <div>
            {changeIcon.portfolio ? (
              <ExpandMoreOutlinedIcon />
            ) : (
              <NavigateNextOutlinedIcon />
            )}
          </div>
        </div>
        <ul className={`menubar-items ${changeIcon.portfolio ? "open" : ""}`}>
          <li className="effect menubar-item">Portfolio Item 1</li>
          <li className="effect menubar-item">Portfolio Item 2</li>
          <li className="effect menubar-item">Portfolio Item 3</li>
          {/* Add more portfolio items as needed */}
        </ul>
      </div>
      <div>
        <div
          onClick={() => handleOpenAndClose("blog")}
          className="flex justify-between items-center border-y py-2"
        >
          <h2>Blog</h2>
          <div>
            {changeIcon.blog ? (
              <ExpandMoreOutlinedIcon />
            ) : (
              <NavigateNextOutlinedIcon />
            )}
          </div>
        </div>
        <ul className={`menubar-items ${changeIcon.blog ? "open" : ""}`}>
          <li className="effect menubar-item">Blog Post 1</li>
          <li className="effect menubar-item">Blog Post 2</li>
          <li className="effect menubar-item">Blog Post 3</li>
          {/* Add more blog posts as needed */}
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
