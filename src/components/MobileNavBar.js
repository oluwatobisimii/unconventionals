import React from "react";
import logo from "../assets/images/logo.svg";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const MobileNavBar = () => {
  const [nav, setNav] = React.useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className="flex justify-between px-4 py-4 sticky top-0 z-[99999] bg-white lg:hidden items-center w-screen ">
        <Link to='/home' className="w-[60px] h-[60px]">
          <img src={logo} alt="" />
        </Link >
        <HiMenu
          className="text-xl"
          onClick={() => {
            toggleNav();
          }}
        />
      </nav>

      {nav && <div className="fixed top-0 z-[100000] bg-white flex flex-col w-full text-2xl p-4 md:p-10 py-10  opacity-80 backdrop-blur-md font-Montaga ">
        <HiX
          className="text-2xl self-end"
          onClick={() => {
            toggleNav();
          }}
        />
        <Link
          to="/about"
          className="py-10 border-b"
          onClick={() => {
            toggleNav();
          }}
        >
          About us
        </Link>
        <Link
          to="/our-story"
          className="py-10 border-b"
          onClick={() => {
            toggleNav();
          }}
        >
          Our Story
        </Link>
        <a
          href="https://www.unboxd.gifts/@mope&dimeji/unconventionals-22"
          className="py-10 border-b"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            toggleNav();
          }}
        >
          Our Registry
        </a>

        <a
          href="https://airtable.com/shrEJNuj5WZQoRSI4"
          className="py-10 "
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            toggleNav();
          }}
        >
          RSVP
        </a>
      </div>}
    </>
  );
};

export default MobileNavBar;
