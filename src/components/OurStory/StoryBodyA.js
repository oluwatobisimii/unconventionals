import React from 'react'
import storyImg from "../../assets/images/storyImg.png"

const StoryBodyA = () => {
    return (
        <>
        <section className="container mx-auto p-4">
            <div className=" text-xl lg:text-3xl leading-normal text-center  font-Montaga md:w-[70%] 2xl:w-[60%] mx-auto py-3 lg:py-10">
                <span>Both of us met in an unconventional way - some could say that the post-COVID era impacted this - on Instagram.</span>
            </div>
        </section>
            
            <img src={storyImg} alt="" className="w-full"/>
        </>
    )
}

export default StoryBodyA