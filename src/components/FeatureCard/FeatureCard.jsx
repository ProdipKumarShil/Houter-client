import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef} from "react";
import { useLayoutEffect } from "react";
import HCard from "./HCard";
import HeadingLeft from "../../shared/Heading/HeadingLeft";
gsap.registerPlugin(ScrollTrigger);

const FeatureCard = () => {
  const myArr = [
    {
      _id: "65b1d890a32901c11e376462",
      name: "Brightside at Jefferson",
      price: 2890,
      address: "503 Danielsville St, Jefferson, GA 30549",
      userName: "Katrina",
      img: "https://i.ibb.co/02NC1JB/h1.jpg",
      userImg: ""
    },
    {
      _id: "65b1daa759ddb2c51edfc48e",
      name: "Benton Grove",
      price: 1002,
      address: "2 Venice Pl, Pooler, GA 31322",
      userName: "Katrina",
      img: "https://i.ibb.co/DMFKKNv/h2.jpg",
      userImg: ""
    },
    {
      _id: "65b1db0559ddb2c51edfc491",
      name: "Redwood Holt",
      price: 2990,
      address: "1657 Leaview Rd, Holt, MI 48842",
      userName: "Katrina",
      img: "https://i.ibb.co/FsMFF3Q/h3.jpg",
      userImg: ""
    },
    {
      _id: "65b1de8982969002507e963f",
      name: "WEST CIRCLE RENTAL",
      price: 3475,
      address: "United States of America",
      userName: "Katrina",
      img: "https://i.ibb.co/Kwn4zyG/h4.jpg",
      userImg: ""
    },
  ]
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
          scrub: true,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: false,
        },
      });
    }, component);

    return () => ctx.revert();
  });

  return (
    <div className="mb-[120px]">
      <div className="max-w-screen-xl mx-auto p-4 mb-10 mt-24">
        <HeadingLeft triggerName="featureCard" header="Our Recommendation" title="Featured House" />
      </div>
      <div 
        ref={component}
        className="scroll-container w-full overflow-x-hidden overflow-y-hidden ">
        <div
          ref={slider}
          className="scroll-content inline-flex gap-10 lg:ml-10">
          {myArr.map(home => <HCard key={home._id} home={home} />)}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;