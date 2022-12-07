import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const Navbar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <div className="">
      {/* <FaTimes /> */}

      <header className="header">
        <h3>Newspaper.</h3>
        <nav ref={navRef} className="navs">
          <Link to="/newsmagazineclone" onClick={hideNavbar}>
            Home page
          </Link>
          <Link to="/newsmagazineclone" onClick={hideNavbar}>
            Simple post
          </Link>
          <Link to="/newsmagazineclone" onClick={hideNavbar}>
            About us
          </Link>
          <Link to="/newsmagazineclone" onClick={hideNavbar}>
            Blog
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>

        <div className="social_icons">
          <AiOutlineInstagram />
          <FaFacebookF />
          <FaLinkedinIn />
          <FaTwitter />
        </div>

        <button className="nav-btn " onClick={showNavBar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
};

export default Navbar;
