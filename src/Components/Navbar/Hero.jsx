import React from "react";
import "./hero.css";
import img1 from "../../assests/header-slider/Cover_banner_final_V2.jpg";
import img2 from "../../assests/header-slider/MicrosoftTeams-image-131.jpg";
import img3 from "../../assests/header-slider/web_cover_final_V2.jpg";

const Hero = () => {
  return (
    <div className="relative">
      {/* <div className='w-full hero relative bg-black  border border-green-600'>
               <div className='w-full absolute h-[300px] md:h-[400px] overflow-hidden'><img className='w-full slider item1 h-full object-cover' src={img1} alt="" /></div>
               <div className='w-full absolute h-[300px] md:h-[400px] overflow-hidden'><img className='w-full slider item2 h-full object-cover' src={img2} alt="" /></div>
               <div className='w-full absolute h-[300px] md:h-[400px] overflow-hidden'><img className='w-full slider item3  h-full object-cover' src={img3} alt="" /></div>
            </div> */}

<div class="slider-one">
  <div class="slider-one-image">
    {/* <div class="slider-text">
      <h1>Ride Fast or Stay Home</h1>
      <p>I try to get away and take my motorcycle on a ride whenever I can. I'll take my bike out before the
        show and just cruise.
      </p>
    </div> */}
  </div>
</div>
<div class="slider-two">
  <div class="slider-two-image">
    {/* <div class="slider-text">
      <h1>Shine Like a diamond in the Dark</h1>
      <p>People are like stained glass windows, they sparkle and shine when the sun is out, but when darkness sets in their true beauty is revealed only if there is a light from within.
      </p>
    </div> */}
  </div>
</div>
<div class="slider-three">
  <div class="slider-three-image">
    {/* <div class="slider-text">
      <h1>leave sooner, drive slower, live longer</h1>
      <p>driving is not my hobby it's my feeling. I only love FAST CARS because I don't believe slow and
        steady wins the race.</p>
    </div> */}
  </div>
</div>
<div class="slider-four">
  <div class="slider-four-image">
    {/* <div class="slider-text">
      <h1>Girl in Dark</h1>
      <p>If you can make a woman laugh, you can make her do anything.” “All little girls should be told they
        are pretty, even if they aren't.” “A girl should be two things: classy and fabulous</p>
    </div> */}
  </div>
</div>
    </div>
  );
};

export default Hero;
