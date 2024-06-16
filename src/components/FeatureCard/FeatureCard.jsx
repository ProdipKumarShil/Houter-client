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
      _id: "65bbf6a8377fec6795ab5542",
      name: "832 33rd Ave E",
      price: 1700000,
      address: "Seattle, WA 98112",
      userName: "Wanda Garcia",
      img: "https://res.cloudinary.com/dwhhe5dgs/image/upload/v1706817192/houter/xjmmayqlq7w4wfyplz5y.jpg",
      userImg: "https://i.ibb.co/x3nJwkM/68.jpg"
    },
    {
      _id: "65bca269fc0fa11a45714597",
      name: "Harbor Dr",
      price: 275000,
      address: "Chicago, IL 60601",
      userName: "Wanda Garcia",
      img: "https://res.cloudinary.com/dwhhe5dgs/image/upload/v1706861161/houter/yydwn5jkbjisfcoozvom.jpg",
      userImg: "https://i.ibb.co/x3nJwkM/68.jpg"
    },
    {
      _id: "65bca2cbfc0fa11a45714599",
      name: "Greenwood Neighborhood",
      price: 1124000 ,
      address: "Seattle, WA 98103",
      userName: "Wanda Garcia",
      img: "https://res.cloudinary.com/dwhhe5dgs/image/upload/v1706861258/houter/y6hounaqiwff8j4eq80h.jpg",
      userImg: "https://i.ibb.co/x3nJwkM/68.jpg"
    },
    {
      _id: "65bca361fc0fa11a4571459b",
      name: "Laurel Rd",
      price: 250000 ,
      address: "London, KY 40741",
      userName: "Wanda Garcia",
      img: "https://res.cloudinary.com/dwhhe5dgs/image/upload/v1706861409/houter/zq0v8w1zrwuzh2lqemtz.jpg",
      userImg: "https://i.ibb.co/x3nJwkM/68.jpg"
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