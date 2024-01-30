import HeadingCenter from "../../shared/Heading/HeadingCenter";
import blogImg from "../../assets/home/blog.png";
import clock from "../../assets/icons/clock.svg";
import BlogCard from "./BlogCard";
import gradient1 from '../../assets/gradient/blogGradient.svg'
import gradient2 from '../../assets/gradient/blogGradient2.svg'
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const BlogSection = () => {
  const blogRef = useRef(null)
  useGSAP(() => {
    gsap.from('.blog',{
      scrollTrigger: {
        trigger: '.blog',
        start: 'top 300px',
      },
      x: 100,
      opacity: 0,
      ease: 'circ',
      stagger: 0.3
    })
  }, {scope: blogRef})
  return (
    <div className="relative mb-[120px]">
      <img className="absolute -top-20 -z-50 left-0" src={gradient1} alt="" />
      <img className="absolute top-10 -z-50 left-0" src={gradient2} alt="" />
      <div className="max-w-screen-xl mx-auto p-4">
        <HeadingCenter header="See tips and trick from our partnership" title="Find out more about selling and buying homes" />
        <button className="active:scale-95 bg-h-secondary py-3 px-4 rounded-[32px] text-white font-semibold mx-auto block mt-[24px] mb-[42px]">
          More Artikel
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2">
          <div ref={blogRef} className="space-y-11">
            <Blog />
            <Blog />
            <Blog />
          </div>
          <div className="">
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

const Blog = () => {
  return (
    <div className="md:flex gap-8 blog">
      <img
        className="w-full md:w-[220px] mb-4 md:mb-0 h-[144px] object-cover rounded-2xl"
        src={blogImg}
        alt=""
      />
      <div className="space-y-4">
        <div className="flex items-center gap-4 text-[#3C4563] font-normal">
          <img
            className="w-8 h-8 object-cover rounded-full"
            src="https://s3-alpha-sig.figma.com/img/518f/7a5c/9f71caedbf8452d7c74782af2f06e925?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a2HWwqT3Wu8DtB7w9ES01bAy-ZA6XvSEAlUgqb8N3SnmKvpe3WlMi2aMKkV7geieuHotFo3ZYQeZueFJWr4hp41MoJUrJZpCI8SJhzu9kY~kvT6aHn6L342QKoUr0~YFvY6i1tBua3HSw7ow0l6jx9rhfGLKRtVk8d1ZvUnUFNyhsXsOTYb6ppo2L2UH6fR~MwnUIGHFEfrAr1WIv~6AEsd6iEEbz9yCbt7IiBCGLGl-dEaL-~dEr3d5XfMHHNmLjCxoQARRpj4h3XsyWmnqHYW0lm2eYfqquKmCgB8fjKikBebZYV4muVPkuCIQdI~q-urImQqWq1sGYHP0Fi64Jw__"
            alt=""
          />
          <p>Dianne Russell</p>
        </div>
        <p className="text-[18px] font-medium text-h-primary capitalize">
          The things we need to check when we want to buy a house
        </p>
        <div className="flex items-center gap-3">
          <img src={clock} alt="" />
          <p className="text-[#888B97]">4 min read | 25 Apr 2021</p>
        </div>
      </div>
    </div>
  );
};
