import React from "react";
import logo from "../assets/images/logo.svg";

import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <div className="hidden lg:block bg-[#FCF9F7] sticky top-0 z-20">
      <section className="container mx-auto flex space-x-20 justify-center  items-center font-Montaga">
        <Link to='/about'>About us</Link>
        <Link to="/our-story">Our Story</Link>
        <Link to="/home">
        <img src={logo} alt="" />
        </Link>
        <a href="https://www.unboxd.gifts/@mope&dimeji/unconventionals-22" target="_blank" rel="noopener noreferrer">Our Registry</a>
        
        <a href="https://airtable.com/shrEJNuj5WZQoRSI4" target="_blank" rel="noopener noreferrer">RSVP</a>
        
      </section>
    </div>
  );
};

export default NavBar;
