import React from "react";


// import heroBg from "../assets/images/heroImg.png";



const AboutHero = () => {
  return (
    <div>
      
      <section className="h-[70vh] md:h-[60vh] lg:h-screen w-screen bg-top flex items-end justify center relative overflow-hidden bg-cover bg-no-repeat bg-[url('../src/assets/images/about.png')]">
        <div className="blackGradient hidden  w-full  md:flex items-center relative z-10 pb-[40px]">
          <div className="container mx-auto">
            <div className="flex flex-col space-y-5 lg:space-y-14 items-center justify-center p-10 mt-40">
              <p className=" md:text-7xl lg:text-8xl xl:text-9xl font-serifbold lg:leading-10 text-center text-gray-50 font-BonVivant block ">
              Meet Mope & Dimeji
              </p>
              
            </div>
          </div>
        </div>
      </section>
      <div className=" md:hidden text-[#2B1105] py-8 px-4 space-y-[8px]">
        <p className="text-4xl md:text-8xl lg:text-9xl font-serifbold leading-tight text-center font-BonVivant">
        Meet Mope & Dimeji
        </p>
        <p className="text-[20px] md:text-4xl lg:text-6xl font-bold  text-center  font-Montaga w-[60%]lg:w-[70%] mx-auto leading-[130%]">Two creatives in love with God, passionate about impacting lives and on a path to influence societies, unconventionally.</p>
        
      </div>
    </div>
  );
};

export default AboutHero;
