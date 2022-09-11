import React from "react";


// import heroBg from "../assets/images/heroImg.png";
import video from "../assets/images/video.png"


const Hero = () => {
  return (
    <div>
      
      <section className="h-[70vh] md:h-[60vh] lg:h-screen w-screen bg-top flex items-end justify center relative overflow-hidden bg-cover bg-no-repeat bg-[url('../src/assets/images/heroImg.png')]">
        <div className="blackGradient hidden  w-full  md:flex items-center relative z-10 pb-[40px]">
          <div className="container mx-auto">
            <div className="flex flex-col space-y-5 lg:space-y-14 items-center justify-center p-10 mt-40">
              <p className=" md:text-7xl lg:text-8xl xl:text-9xl font-serifbold lg:leading-10 text-center text-gray-50 font-BonVivant block ">
              Unconventionals ‘22
              </p>
              <p className="text-2xl lg:leading-7 text-center text-gray-50 font-Montaga">
                ...and above all these things put on love, which is the bond of perfectness.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className=" md:hidden text-[#2B1105] py-8 px-4 space-y-[8px]">
        <p className="text-4xl md:text-8xl lg:text-9xl font-serifbold leading-tight text-center font-BonVivant">
        Unconventionals ‘22
        </p>
        <p className="leading-tight font-Montaga text-center ">
        ...and above all these things put on love, which is the bond of perfectness.
        </p>

      </div>
        <img src={video} alt="" className="my-20 md:hidden"/>
    </div>
  );
};

export default Hero;
