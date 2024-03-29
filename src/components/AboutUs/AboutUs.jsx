import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import star from "../../assets/icons/star.svg";
import HeadingCenter from "../../shared/Heading/HeadingCenter";
// import { GSAPScrollTrigger } from '@gsap/react';
// import {GSAP} from "@gsap/react"
gsap.registerPlugin(ScrollTrigger);
const AboutUs = () => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    const image = container.querySelector("img");
    const tl = gsap.timeline({ paused: true });

    tl.to(
      container,
      {
        scale: 2,
      },
      0
    );
    tl.to(overlay, {
      opacity: 0,
    });

    const trigger = ScrollTrigger.create({
      animation: tl,
      trigger: container,
      start: "top top",
      end: "bottom -500px",
      markers: false,
      pin: true,
      scrub: true,
    });

    return () => {
      trigger.kill();
    };
  }, []);
  return (
    <>
    <HeadingCenter triggerName="about" header="See Our Review" title="What Our User Say About Us" />
      <div className="pinned-image" ref={containerRef}>
        <div className="pinned-image__container scale-50    h-screen flex justify-center relative">
          <img
            src="https://res.cloudinary.com/dwhhe5dgs/image/upload/v1707118652/houter/assets/building_iagjzy.jpg"
            className="h-full w-full rounded-2xl object-cover absolute top-0 left-0"
          />
          <div
            ref={overlayRef}
            className="rounded-2xl shadow-lg p-8 text-black pinned-image__container-overlay bg-white absolute left-10 right-10 z-30 -bottom-7 ">
            <p className="text-[#1B1C57] text-[20px] font-semibold mb-4">
              Best! I got the house I wanted through Hounter
            </p>
            <p className="text-[#626687] font-normal mb-6">
              Through this website I can get a house with the type and
              specifications I want very easily, without a complicated process
              to be able to find information on the house we want.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src="https://randomuser.me/api/portraits/women/81.jpg"
                  alt=""
                />
                <div className="">
                  <p className="text-[18px] gap-1 font-medium text-[#0E1735]">
                    Jenny Wilson
                  </p>
                  <p className="text-[14px] font-normal text-[#888B97]">
                    Santa Ana, Illinois
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={star} alt="" />
                <p className="text-[20px] font-semibold text-[#3C4563]">4.6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

// const AboutUs = () => {
//   const zoomOutRef = useRef(null);

//   useEffect(() => {
//     const height = window.innerHeight;

//     gsap.from(zoomOutRef.current, {
//       scale: 2,
//       stagger: 0.25,
//       duration: 1,
//       scrollTrigger: {
//         trigger: zoomOutRef.current,
//         start: "top center",
//         pin: true,
//         end: `+=${height * 1.3}`,
//         scrub: 3,
//       },
//     });

//     // Cleanup function
//     return () => {
//       // You can perform any cleanup here if needed
//     };
//   }, []); // Empty dependency array to run the effect only once on mount

//   return (
//     <div ref={zoomOutRef} id='zoom-out'>
//       <p className='capitalize text-5xl font-bold text-h-secondary text-center'>text zoom out effect</p>
//     </div>
//   );
// };

// export default AboutUs;
