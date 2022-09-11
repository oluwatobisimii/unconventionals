import React from 'react'
import Footer from '../components/Footer'
import Quote2 from '../components/Quote2'


import MobileNavBar from '../components/MobileNavBar'
import StoryHero from '../components/OurStory/StoryHero'
import StoryBodyA from '../components/OurStory/StoryBodyA'
import StoryBody2 from '../components/OurStory/StoryBody2'
import NavBar from '../components/NavBar'


const OurStory = () => {
  return (
    <>
    <MobileNavBar/>
     <div className="App bg-[#FCF9F7] md:h-screen lg:h-auto space-y-10 md:space-y-16 lg:space-y-20 text-[#2B1105] w-screen  2xl">
      <StoryHero/>
      <NavBar/>
      <StoryBodyA/>
      <StoryBody2/>
      <Quote2/>
      <Footer/>
    </div>
    </>
  )
}

export default  OurStory