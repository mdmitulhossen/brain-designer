import React from "react";
import "./client.css";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";
import img1 from "../../assests/icons/11.png";
import img2 from "../../assests/icons/clock.png";
import img3 from "../../assests/icons/coronavirus.png";
import img4 from "../../assests/icons/coder-head-1.png";
import img5 from "../../assests/icons/check-1.png";
const Client = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="max-w-[1920px] mx-auto 3xl:px-[275px] px-3 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-40">
      <div>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="hidden lg:grid gap-6  lg:grid-cols-5 justify-center  justify-items-center">
            <div className="flex flex-col items-center space-y-3">
              <img src={img1} alt="" />
              <p className="font-bold text-brain text-4xl">
                {counterOn && (
                  <CountUp start={0} end={12} duration={2} delay={0} />
                )}
                +
              </p>
              <p className="font-medium text-xl">Tech Partners</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <img src={img2} alt="" />
              <p className="font-bold text-brain text-4xl">
                {counterOn && (
                  <CountUp start={0} end={16} duration={2} delay={0} />
                )}
                +
              </p>
              <p className="font-medium text-xl">Years of Experience</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <img src={img3} alt="" />
              <p className="font-bold text-brain text-4xl">
                {counterOn && (
                  <CountUp start={0} end={25} duration={2} delay={0} />
                )}
                +
              </p>
              <p className="font-medium text-xl">Countries Served</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <img src={img4} alt="" />
              <p className="font-bold text-brain text-4xl">
                {counterOn && (
                  <CountUp start={0} end={700} duration={2} delay={0} />
                )}
                +
              </p>
              <p className="font-medium text-xl">IT Professionals</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <img src={img5} alt="" />
              <p className="font-bold text-brain text-4xl">
                {counterOn && (
                  <CountUp start={0} end={2000} duration={2} delay={0} />
                )}
                +
              </p>
              <p className="font-medium text-xl">Projexts Completed</p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default Client;
