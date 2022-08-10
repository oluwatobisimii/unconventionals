import React from "react";
import {motion} from "framer-motion"

const SaveDateBody = () => {
  return (
    <div className="container mx-auto space-y-[32px]">
      <div className="text-[#2B1105]">
        <motion.p 
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0, transition:{duration:"1.2", delay:"1"}}}
        className="text-5xl md:text-8xl lg:text-9xl font-serifbold leading-tight text-center font-BonVivant">
          09 . 11 . 22
        </motion.p>
        <motion.p 
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0, transition:{duration:"1.2", delay:"1"}}} className="text-2xl leading-7 font-Montaga text-center ">
          #TheUnconventionals
        </motion.p>
      </div>
      <motion.div 
      initial={{opacity:0, }}
      animate={{opacity:1, transition:{duration:"1.2", delay:"2"}}}
      className="flex justify-center">
      <a
        href="https://airtable.com/shrEJNuj5WZQoRSI4"
        className="px-6 py-3 border border-[#C6754D] bg-[#FCF9F7] text-[#C6754D] text-xl leading-normal text-center  font-Montaga uppercase"
      >
        rsvp
      </a>
      </motion.div>
    </div>
  );
};

export default SaveDateBody;
