import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import "./navbar.scss";
import MenuBar from "./MenuBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState({
    home: false,
    pages: false,
    portfolio: false,
    blog: false,
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(false); // New state for showing the menu icon

  const handleMenuItemHover = (menuItem) => {
    setMenuVisible((prevMenuVisible) => ({
      ...prevMenuVisible,
      [menuItem]: true,
    }));
  };

  const handleMenuItemLeave = (menuItem) => {
    setMenuVisible((prevMenuVisible) => ({
      ...prevMenuVisible,
      [menuItem]: false,
    }));
  };

  const handleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    // Check the screen width and set showMenuIcon accordingly
    const handleResize = () => {
      if (window.innerWidth <= 1080) {
        setShowMenuIcon(true);
      } else {
        setShowMenuIcon(false);
      }
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    return (
      <div className="">
        <div className="navbar  text-white bg-black">
          <div className="container flex justify-between items-center">
            <h3>SpotlightStreams</h3>
            <div className="nav-items">
              <div
                className="nav-item"
                onMouseEnter={() => handleMenuItemHover("home")}
                onMouseLeave={() => handleMenuItemLeave("home")}
              >
                <div className="svg-wrapper">
                  <svg
                    height="60"
                    width="180"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect className="shape" height="60" width="320" />
                  </svg>
                  <Link to="/" className="text">
                    Home
                  </Link>
                </div>
                <ul className={`nav-list ${menuVisible.home ? "open" : ""}`}>
                  <li className="effect">Main home Page</li>
                  <li className="effect">Main home Page</li>
                  <li className="effect">Main home Page</li>
                  <li className="effect">Main home Page</li>
                  <li className="effect">Main home Page</li>
                  <li className="effect">Main home Page</li>
                </ul>
              </div>
              <div
                className="nav-item"
                onMouseEnter={() => handleMenuItemHover("pages")}
                onMouseLeave={() => handleMenuItemLeave("pages")}
              >
                <div className="svg-wrapper">
                  <svg
                    height="60"
                    width="180"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect className="shape" height="60" width="320" />
                  </svg>
                  <Link to={"/pages"} className="text">
                    Pages
                  </Link>
                </div>
                <ul className={`nav-list ${menuVisible.pages ? "open" : ""}`}>
                  <li className="effect">About US</li>
                  <li className="effect">About Me</li>
                  <li>What We Do</li>
                  <li>Our Crew</li>
                  <li>Contact Us</li>
                  <li>Get In touch</li>
                  <li>FAQ Page</li>
                </ul>
              </div>
              <div
                className="nav-item"
                onMouseEnter={() => handleMenuItemHover("portfolio")}
                onMouseLeave={() => handleMenuItemLeave("portfolio")}
              >
                <div className="svg-wrapper">
                  <svg
                    height="60"
                    width="180"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect className="shape" height="60" width="320" />
                  </svg>
                  <Link to="/portfolio" className="text">
                    Portfolio
                  </Link>
                </div>
                <ul
                  className={`nav-list ${menuVisible.portfolio ? "open" : ""}`}
                >
                  <li className="effect">About US</li>
                  <li className="effect">About Me</li>
                  <li>What We Do</li>
                  <li>Our Crew</li>
                  <li>Contact Us</li>
                  <li>Get In touch</li>
                  <li>FAQ Page</li>
                </ul>
              </div>
              <div
                className="nav-item relative"
                onMouseEnter={() => handleMenuItemHover("blog")}
                onMouseLeave={() => handleMenuItemLeave("blog")}
              >
                <div className="svg-wrapper">
                  <svg
                    height="60"
                    width="180"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect className="shape" height="60" width="320" />
                  </svg>
                  <Link to="/blog" className="text">
                    Blog
                  </Link>
                </div>
                <ul
                  className={`nav-list ${
                    menuVisible.blog ? "open" : ""
                  } absolute`}
                >
                  <li className="effect">About US</li>
                  <li className="effect">About Me</li>
                  <li>What We Do</li>
                  <li>Our Crew</li>
                  <li>Contact Us</li>
                  <li>Get In touch</li>
                  <li>FAQ Page</li>
                </ul>
              </div>
              {/* Add similar code for other menu items */}
            </div>
            <div>
              <SearchOutlinedIcon />
            </div>
            <div
              onClick={handleMenuOpen}
              className={`flex items-center ${showMenuIcon ? "menu-icon" : ""}`}
            >
              {showMenuIcon ? (
                menuOpen ? (
                  <CloseOutlinedIcon />
                ) : (
                  <MenuOutlinedIcon />
                )
              ) : null}
            </div>
          </div>
        </div>
        <div>{menuOpen && <MenuBar menuOpen={menuOpen} />}</div>
      </div>
    );
};

export default Navbar;
