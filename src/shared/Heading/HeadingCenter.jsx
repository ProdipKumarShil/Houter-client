import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const HeadingCenter = ({ header, title, triggerName }) => {
  const textRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const splitText = new SplitType(textRef.current);
    const splitWord = new SplitType(headerRef.current)

    gsap.from(splitWord.words, {
      scrollTrigger: {
        trigger: `.${triggerName}`,
        markers: false
      },
      y: -100,
      opacity: 0,
      stagger: 0.2,
      ease: "back",
      duration: 1
    })

    gsap.from(splitText.chars, {
      scrollTrigger: {
        trigger: `.${triggerName}`,
        markers: false
      },
      opacity: 0,
      duration: 0.5,
      y: 100,
      stagger: 0.05,
      rotate: 25,
      ease: "back.out",
    });
  }, [triggerName]);
  return (
    <div className="textAnim">
      <p className="text-center mb-3">
        <div className="w-[32px] mx-auto border border-[#F59E0B] mb-2"></div>{" "}
        <p ref={headerRef} className={`${triggerName} overflow-hidden font-medium text-[#F59E0B]`}>{header}</p>
      </p>
      <div className="overflow-hidden ">
        <p
          ref={textRef}
          className={`font-semibold ${triggerName} text-h-primary text-[32px] text-center`}>
          {title}
        </p>
      </div>
    </div>
  );
};

export default HeadingCenter;
