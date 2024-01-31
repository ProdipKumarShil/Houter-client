import { useEffect, useRef } from "react";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger)

const HeadingLeft = ({ header, title, triggerName }) => {
  const wRef = useRef(null);
  const tRef = useRef(null);
  
  useEffect(() => {
    const splitText = new SplitType(tRef.current);
    const splitWord = new SplitType(wRef.current);

    gsap.from(splitWord.words, {
      scrollTrigger: {
        trigger: `.${triggerName}`,
        markers: false
      },
      y: -100,
      opacity: 0,
      stagger: 0.2,
      ease: "back",
      duration: 1,
      rotate: 15
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
    <div className="">
      <p className="flex items-center gap-2">
        <div className="w-[32px] border border-[#F59E0B]"></div>{" "}
        <p ref={wRef} className={`${triggerName} font-medium text-[#F59E0B] overflow-hidden`}>{header}</p>
      </p>
      <p ref={tRef} className={`${triggerName} overflow-hidden font-semibold text-h-primary text-[32px]`}>
        {title}
      </p>
    </div>
  );
};

export default HeadingLeft;
