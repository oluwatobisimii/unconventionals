import React from 'react'
import about1 from "../../assets/images/about1.png"

const AboutBodyA = () => {
    return (
        <>
        <section className="container mx-auto p-4">
            <div className=" text-xl lg:text-3xl leading-normal text-center  font-Montaga md:w-[70%] 2xl:w-[60%] mx-auto py-3 lg:py-10 hidden md:block">
                <span>Two creatives in love with God, passionate about impacting lives and on a path to influence societies, unconventionally.</span>
            </div>
        </section>
            
            <img src={about1} alt="" />
        </>
    )
}

export default AboutBodyA