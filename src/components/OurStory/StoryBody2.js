import React from "react";
import story1 from "../../assets/images/story1.png";
import story2 from "../../assets/images/story2.png";
import story3 from "../../assets/images/story3.png";

const about = {
  meet: `Dimeji and Mope met in an unconventional way - some could say that the post-COVID era impacted this - on instagram. Someone [we won’t say who] slide into the other’s DM (swoooooosh!). `,

  proposal: `A few days later, Dimeji proposed in his heart to spend the rest of his life with Mope. He told her, she agreed and they've been together ever since.

  Oh Yes! He also proposed physically.`,

  date: `Their first date wasn’t really much of a date and it happened over FaceTime, an elaborate scheme Dimeji set up to get to talk to Mope. However, their second date which happened in the same manner was much better. `,
};

const StoryBody2 = () => {
  return (
    <section className="container mx-auto p-6 lg:px-10 space-y-20 columns-1 lg:columns-2 gap-12">
      <div className="space-y-3 md:space-y-6 ">
        <h1 className="font-BonVivant font-serifbold text-[20px] md:text-4xl">
          The Meet
        </h1>

        <p className="whitespace-pre-line font-Montaga text-[14px] md:text-base">
          {about.meet}
        </p>
      </div>

      <img src={story1} alt="" className="hidden lg:block" />
      <img src={story2} alt="" className="lg:hidden" />
      
      <div className="space-y-3 hidden lg:block">
          <h1 className="font-BonVivant font-serifbold text-[20px] md:text-4xl">
            Proposal
          </h1>

          <p className="whitespace-pre-line font-Montaga text-[14px] md:text-base">
            {about.proposal}
          </p>
        </div>
        <div className="space-y-3 lg:hidden">
        <h1 className="font-BonVivant font-serifbold text-[20px] md:text-4xl">
          First Date
        </h1>

        <p className="whitespace-pre-line font-Montaga text-[14px] md:text-base">
          {about.date}
        </p>
      </div>
      <img src={story2} alt="" className="hidden lg:block" />
      <img src={story1} alt="" className="lg:hidden" />

      <div className="space-y-3  lg:hidden">
          <h1 className="font-BonVivant font-serifbold text-[20px] md:text-4xl">
            Proposal
          </h1>

          <p className="whitespace-pre-line font-Montaga text-[14px] md:text-base">
            {about.proposal}
          </p>
        </div>
        <div className="space-y-3 hidden lg:block">
        <h1 className="font-BonVivant font-serifbold text-[20px] md:text-4xl">
          First Date
        </h1>

        <p className="whitespace-pre-line font-Montaga text-[14px] md:text-base">
          {about.date}
        </p>
      </div>
      <img src={story3} alt="" className="" />

      {/* <img src={about3} alt=""  className="lg:hidden"/> */}
    </section>
  );
};

export default StoryBody2;
