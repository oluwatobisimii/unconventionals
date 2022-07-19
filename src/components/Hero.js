import React from "react";
import heroBg from "../assets/images/mope+dimeji-hero.png";

const Hero = () => {
  return (
    <section className="h-screen w-screen bg-top flex items-end justify center relative overflow-hidden">
        <img src={heroBg} alt=""  className="absolute top-0 w-screen"/>
      <div className="blackGradient w-full h-[50vh] flex items-center relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col space-y-14 items-center justify-center p-10 mt-40">
            <p className="text-9xl font-serifbold leading-10 text-center text-gray-50 font-BonVivant">
              Unconventionals ‘22
            </p>
            <p className="text-2xl leading-7 text-gray-50 font-Montaga">
              ...and above all these things put on love, which is the bond of
              perfectness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
