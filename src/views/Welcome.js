import React from "react";
import { Link } from "react-router-dom";

// import heroBg from "../assets/images/heroImg.png";



const Welcome = () => {
  return (
    <div>

      <section className="h-[70vh] md:h-[100vh] lg:h-screen w-screen bg-top flex items-end justify center relative overflow-hidden bg-cover bg-no-repeat bg-[url('../src/assets/images/heroImg.png')]">
        <div className="blackGradient hidden  w-full  md:flex items-center relative z-10 pb-[40px]">
          <div className="container mx-auto">
            <div className="flex flex-col space-y-5 lg:space-y-14 items-center justify-center p-10 mt-40">
              <p className=" md:text-7xl lg:text-8xl xl:text-9xl font-serifbold lg:leading-10 text-center text-gray-50 font-BonVivant block ">
                We are <br />
                Getting Married!
              </p>
              <p className="text-2xl lg:leading-7 text-center text-gray-50 font-Montaga">
                Let’s let you in on this Unconventional tale 💭
              </p>
              <Link
                to="/home"
                className="inline-flex flex-col items-center justify-start px-6 py-3  text-xl leading-normal text-center border border-white  text-white font-Montaga"
              >
                Let me in
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Welcome;
