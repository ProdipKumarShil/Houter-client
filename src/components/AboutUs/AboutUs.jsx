import { useEffect, useRef } from "react";
import img from "../../assets/home/building.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import star from '../../assets/icons/star.svg'
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
    <div className="pinned-image" ref={containerRef}>
      <div className="pinned-image__container scale-50    h-screen flex justify-center relative">
        <img
          src={img}
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
            specifications I want very easily, without a complicated process to
            be able to find information on the house we want.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src="https://s3-alpha-sig.figma.com/img/35de/90fb/12a790d479bee66f26626dba559056bd?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F66sww3iUUHS5PX5Ijw0Grq6PstvGQbleyp0jFG1JKzD0EoDldyvZggdvbRiX7dCfqdH3rm3HxODV2qgeY-utzv0u3822Zmfs8Kp6LU7w8O3uRc3TzNVPjbpCM2yAfh5791vpqek6bM0YogMuM417mbcaC9fHXdBY7QjJPGcyi-2ZBNVamRtne6-FdYIxPnVDbfxnPhS4apnoLsxxU1vQRTOD~099-mrOZxShK6Yv9unApfoQDp~~ZqnYNvOncqD8ExuItKCMRHAFDVBIk7KvaAjqnGqvGeZXEOA5NM4LnB0fgFbU9cz-pBkU0UuyZtq7j7wvbRjV16XoIgib~IjSg__"
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
