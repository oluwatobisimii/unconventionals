import React from "react";
import about2 from "../../assets/images/about2.png";
import about3 from "../../assets/images/about3.png";
const about = {
  bride: `MopénínúoláOlúwa❤️

    Most persons call her Lauretta but to me, she is MopénínúoláOlúwa. Her name says it all because she’s a woman after Bae J's heart, whole and complete in Bae J's wells of wealth, affluence and glory.

    Mopelola is a philanthropist, an entrepreneur, and global advocate for strengthening health systems. She leads quite a number of fits such as Communal Health Initiative, Scribble and Yalanda.

    Looking beyond all her feats, Mope is also a very kind, energetic, and virtuous woman. She is full of love and a “one of a kind” really... She’s always been passionate about leaving a lasting impact on the world and she does this one smile at a time. I’ve seen her give all of herself to the things and people she cares about and she does this without inhibition.

    In summary, Mope is living on Bae J’s terms, leading fits and loving Wang Ye Joon (me, Oladimeji).

    #TheUnconventionals`,

  groom: `Ola Dim Dim!

    This is what I like to call Oladimeji even when I know he’s popularly called The Christain Creative. 

    Oladimeji is a very interesting being, full of zest for God’s presence, His kingdom and work. In the last months, I’ve watched him give all of himself without restraints to millions of creatives globally. This should not even be a surprise to me anymore because his large heart was what got me to be his friend in the first place.

    Dimeji enjoys calling me the workaholic but truth is, he actually is the workaholic and even when he is not working, speaking or training, you'll catch him exploring life by creating, investing, cycling and visiting unexplored places.

    Mopelola. 
    
    *#TheUnconventionals*
    `,
};

const AboutBody2 = () => {
  return (
    <section className="container mx-auto p-6 lg:px-10 space-y-20 columns-1 lg:columns-2 gap-12">
      <div className="space-y-3 md:space-y-6 ">
        <h1 className="font-BonVivant font-serifbold text-[20px] md:text-4xl">
          Meet The Bride
        </h1>

        <p className="whitespace-pre-line font-Montaga text-[14px] md:text-base">
          {about.bride}
        </p>
      </div>

      <img src={about3} alt="" className="hidden lg:block" />

      <img src={about2} alt="" className="" />

      <div className="space-y-3">
        <h1 className="font-BonVivant font-serifbold text-[20px] md:text-4xl">
          Meet The Groom
        </h1>

        <p className="whitespace-pre-line font-Montaga text-[14px] md:text-base">
          {about.groom}
        </p>
      </div>

      <img src={about3} alt="" className="lg:hidden" />
    </section>
  );
};

export default AboutBody2;
