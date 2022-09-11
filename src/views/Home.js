import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Quote from '../components/Quote'
import Quote2 from '../components/Quote2'
import Sections from '../components/Sections'
import MobileNavBar from '../components/MobileNavBar'


const Home = () => {
  return (
    <>
      <MobileNavBar />
      <div className="App bg-[#FCF9F7] md:h-screen lg:h-auto space-y-10 md:space-y-16 lg:space-y-20 text-[#2B1105] w-screen  2xl">
        <Hero />
        <NavBar />
        <Quote />
        <Sections />
        <div className="my-20 w-screen aspect-video">
          <iframe className="w-full aspect-video" src="" title="We're The Unconventionals!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <Quote2 />
        {/* <SaveHero/>
      <SaveDateBody/> */}
        <Footer />
      </div>
    </>
  )
}

export default Home