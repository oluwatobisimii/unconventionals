import React from "react";
import aboutUs from "../assets/images/aboutUs.png";
import ourStory from "../assets/images/ourStory.png";
import rsvp from "../assets/images/rsvp.png";
import {Link} from "react-router-dom"

const Sections = () => {
  return (
    <section className="mx-auto container flex lg:flex-row flex-col justify-between p-4 space-y-8 lg:space-y-0">
      <div className="flex flex-col space-y-10 md:flex-row lg:flex-col space-x-8 lg:w-[384px]">
        <img src={aboutUs} alt="" className="md:w-[40%] lg:w-auto" />
        <div className="space-y-6">
          <p className="text-4xl font-bold leading-10 font-BonVivant">
            About Us
          </p>
          <p className="text-lg leading-7 opacity-80 font-Montaga">
            Two creatives in love with God, passionate about impacting lives and
            on a path to influence societies, unconventionally.
          </p>
          <Link
            to="/about"
            className="inline-flex flex-col items-center justify-start px-6 py-3  border  text-xl leading-normal text-center border-[#C6754D] bg-[#FCF9F7] text-[#C6754D] font-Montaga"
          >
            Read more
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-10 md:flex-row lg:flex-col space-x-8 lg:w-[384px]">
        <img src={ourStory} alt="" className="md:w-[40%] lg:w-auto"/>
        <div className="space-y-6">
          <p className="text-4xl font-bold leading-10 font-BonVivant">
            Our Story
          </p>
          <p className="text-lg leading-7 opacity-80 font-Montaga">
            Dimeji and Mope met in an unconventional way - some could say that
            the postCOVID era impacted this - on instagram…
          </p>
          <Link
            to="/our-story"
            className="inline-flex flex-col items-center justify-start px-6 py-3  text-xl leading-normal text-center border border-[#C6754D] bg-[#FCF9F7] text-[#C6754D] font-Montaga"
          >
            Get the gist
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-10 md:flex-row lg:flex-col space-x-8 lg:w-[384px]">
        <img src={rsvp} alt="" className="md:w-[40%] lg:w-auto"/>
        <div className="space-y-6">
          <p className="text-4xl font-bold leading-10 font-BonVivant">RSVP</p>
          <p className="text-lg leading-7 opacity-80 font-Montaga">
            We will be delighted to have you celebrate with us at our wedding
            ceremony. Kindly confirm your attendance...
          </p>
          <a
            href="https://airtable.com/shrEJNuj5WZQoRSI4"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex flex-col items-center justify-start px-6 py-3 border border-[#C6754D] bg-[#FCF9F7] text-[#C6754D] text-xl leading-normal text-center  font-Montaga"
          >
            Here
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sections;
