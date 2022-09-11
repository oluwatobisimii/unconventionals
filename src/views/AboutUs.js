import React from 'react'
import Footer from '../components/Footer'

import NavBar from '../components/NavBar'
import Quote2 from '../components/Quote2'

import MobileNavBar from '../components/MobileNavBar'
import AboutHero from '../components/About/AboutHero'
import AboutBodyA from '../components/About/AboutBodyA'
import AboutBody2 from '../components/About/AboutBody2'


const AboutUs = () => {
  return (
    <>
      <MobileNavBar />
      <div className="App bg-[#FCF9F7] md:h-screen lg:h-auto space-y-4 md:space-y-16 lg:space-y-20 text-[#2B1105] w-screen">
        <AboutHero />
        <NavBar />
        <AboutBodyA />
        <AboutBody2 />
        <Quote2 />
        <Footer />
      </div>
    </>
  )
}

export default AboutUs