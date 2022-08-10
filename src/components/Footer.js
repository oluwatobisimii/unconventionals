import React from 'react'
import {motion} from "framer-motion"
const Footer = () => {
  return (
    <motion.section 
    initial={{opacity:0, }}
      animate={{opacity:1, transition:{duration:"1.2", delay:"2"}}}
    className="container mx-auto space-y-3 lg:space-y-6 pb-10">
        <div className="lg:h-10"></div>
        <p className="text-2xl lg:text-5xl font-bold leading-10 text-center font-BonVivant">…the bond of perfectness.</p>
        <hr className="bg-[#FCF9F7]"/>
        <p className="text-sm lg:text-2xl leading-10 text-center font-Montaga">Love, <span className="opacity-50">
        Mope & Dimeji
          </span> 😘</p>
    </motion.section>
  )
}

export default Footer