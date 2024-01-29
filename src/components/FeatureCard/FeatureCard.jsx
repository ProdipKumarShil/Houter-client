import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import HCard from "./HCard";
import HeadingLeft from "../../shared/Heading/HeadingLeft";
gsap.registerPlugin(ScrollTrigger);

const FeatureCard = () => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          start: "center center",
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: true,
        },
      });
    }, component);

    return () => ctx.revert();
  });

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-4 mb-10">
        <HeadingLeft />
      </div>
      <div
        ref={component}
        className="scroll-container w-full overflow-x-hidden overflow-y-hidden ">
        <div
          ref={slider}
          className="scroll-content inline-flex gap-10 lg:ml-10">
          <HCard />
          <HCard />
          <HCard />
          <HCard />
          <HCard />
          <HCard />
        </div>
      </div>
    </>
  );
};

export default FeatureCard;

const Card = () => {
  return (
    <div className="panel card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
