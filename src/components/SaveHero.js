import React from "react";
import { motion } from "framer-motion";

const SaveHero = () => {
  return (
    <section>
      <div className=" md:hidden text-[#2B1105] border py-8 space-y-[8px]">
        <p className="text-4xl md:text-8xl lg:text-9xl font-serifbold leading-tight text-center font-BonVivant">
          Save The Date
        </p>
        <p className="leading-tight font-Montaga text-center ">
          for the Wedding of Mopelola & Oladimeji
        </p>
      </div>
      <div className="overflow-hidden">
        <motion.section
          initial={{ scale: "200%", opacity: "0" }}
          animate={{
            scale: "100%",
            opacity: "1",
            transition: { duration: "2" },
          }}
          className="h-[40vh] md:h-[50vh] lg:h-[100vh] w-screen  flex items-end justify center relative overflow-hidden bg-center 2xl:bg-top backgroundImage "
        >
          <div className="blackGradient hidden  w-full  md:flex items-center relative z-10 pb-[40px]">
            <div className="container mx-auto">
              <div className="flex flex-col lg:space-y-[16px] xl:lg:space-y-[32px] items-center justify-center p-10 mt-40">
                <motion.p
                  initial={{ opacity: 0, y: 200 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: "2", delay: "1" },
                  }}
                  className="md:text-8xl lg:text-9xl font-serifbold leading-[90%] text-center text-gray-50 font-BonVivant"
                >
                  Save The Date
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 200 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: "2", delay: "1.1" },
                  }}
                  className="text-2xl leading-7 text-gray-50 font-Montaga"
                >
                  for the Wedding of Mopelola & Oladimeji
                </motion.p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default SaveHero;
