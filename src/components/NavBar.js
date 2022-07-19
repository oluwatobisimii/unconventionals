import React from "react";
import logo from "../assets/images/logo.svg";

const NavBar = () => {
  return (
    <div className="bg-[#FCF9F7] sticky top-0 z-20">
      <section className="container mx-auto flex gap-20 justify-center  items-center font-Montaga">
        <p>About us</p>
        <p>Our Story</p>
        <img src={logo} alt="" />
        <p>Our Registry</p>
        <p>RSVP</p>
      </section>
    </div>
  );
};

export default NavBar;
