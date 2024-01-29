import logo from "../../assets/logo/houterLogo.svg";
import gradient from "../../assets/gradient/navGradient.svg";
import gradient2 from "../../assets/gradient/navGradient2.svg";
import banner from "../../assets/houter2/bannerBG.png";
import homeIcon from "../../assets/houter2/homeIcon.png";
import p1 from '../../assets/houter2/partnership/traveloka_logo.png'
import p2 from '../../assets/houter2/partnership/traveloka_logo2.png'
import p3 from '../../assets/houter2/partnership/traveloka_logo3.png'
import p4 from '../../assets/houter2/partnership/traveloka_logo4.png'
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import AboutUs from "../../components/AboutUs/AboutUs";
import ReadySell from "../../components/ReadySell/ReadySell";
import BlogSection from "../../components/Blog/BlogSection";

const NewHome = () => {
  return (
    <div className="relative">
      <img className="absolute inset-0 -z-50" src={gradient} alt="" />
      <img className="absolute inset-0 left-10 -z-50" src={gradient2} alt="" />

      {/* nav */}
      <div className="max-w-screen-xl pt-[26px] mx-auto p-2 flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <img src={logo} alt="" />
          <p className="text-[16px] font-bold text-h-primary">Houter</p>
        </div>
        <div className="md:flex items-center gap-6 hidden">
          <button className="text-white text-[14px] font-semibold px-4 py-2 border border-[#ffffff4d] rounded-badge bg-[#ffffff1a]">
            About Us
          </button>
          <button className="text-white text-[14px] font-semibold px-4 py-2 border border-[#ffffff4d] rounded-badge bg-[#ffffff1a]">
            Article
          </button>
          <button className="text-white text-[14px] font-semibold px-4 py-2 border border-[#ffffff4d] rounded-badge bg-[#ffffff1a]">
            Property
          </button>
          <button className="ml-8 text-[14px] font-semibold px-6 py-3 border border-[#ffffff4d] rounded-badge bg-[#D1FAE5] text-h-secondary">
            Sign Up!
          </button>
        </div>
      </div>

      {/* banner start */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 mb-[120px] p-4 ">
        <div className="flex items-center lg:h-[85vh]">
          <div className="">
            <p className="text-[40px] mb-[26px] capitalize font-semibold text-h-primary">
              find the place to <br /> live your dreams <br /> easily here
            </p>
            <p className="text-[#626687] mb-[32px]">
              Everything you need about finding your place to live will be here,{" "}
              <br /> where it will be easier for you
            </p>
            {/* search */}
            <div className="mb-8">
              <label
                htmlFor="search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative lg:w-[80%]">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none">
                    <path
                      d="M12 1C14.3869 1 16.6761 1.99337 18.364 3.76159C20.0518 5.5298 21 7.92801 21 10.4286C21 14.934 18.0975 19.081 12.402 22.8776C12.2818 22.9575 12.1424 23 12 23C11.8576 23 11.7182 22.9575 11.598 22.8776C5.9025 19.081 3 14.934 3 10.4286C3 7.92801 3.94821 5.5298 5.63604 3.76159C7.32387 1.99337 9.61305 1 12 1ZM12 7.28576C11.2044 7.28576 10.4413 7.61689 9.87868 8.20629C9.31607 8.7957 9 9.5951 9 10.4286C9 11.2622 9.31607 12.0616 9.87868 12.651C10.4413 13.2404 11.2044 13.5715 12 13.5715C12.7956 13.5715 13.5587 13.2404 14.1213 12.651C14.6839 12.0616 15 11.2622 15 10.4286C15 9.5951 14.6839 8.7957 14.1213 8.20629C13.5587 7.61689 12.7956 7.28576 12 7.28576Z"
                      fill="#F59E0B"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full rounded-badge py-[17px] ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 "
                  placeholder="Search for the location you want!"
                  required
                />
                <button
                  type="submit"
                  className="bg-h-secondary text-[14px] font-semibold flex items-center gap-1 text-white absolute right-1 top-1 rounded-badge text-sm px-4 py-3">
                  Search
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none">
                    <path
                      d="M9.99335 5.0018C9.76166 5.00135 9.53713 5.08254 9.35872 5.2313C9.25831 5.31506 9.17532 5.41793 9.11448 5.53402C9.05364 5.65011 9.01616 5.77714 9.00419 5.90782C8.99221 6.03851 9.00598 6.17029 9.0447 6.29562C9.08341 6.42094 9.14632 6.53735 9.22981 6.63818L13.6722 11.9863L9.38847 17.3444C9.3061 17.4465 9.24459 17.5639 9.20747 17.69C9.17036 17.8161 9.15837 17.9482 9.17219 18.079C9.18601 18.2097 9.22537 18.3364 9.28802 18.4518C9.35066 18.5672 9.43535 18.669 9.53721 18.7513C9.63981 18.8421 9.75996 18.9107 9.89012 18.9526C10.0203 18.9945 10.1576 19.0088 10.2936 18.9948C10.4295 18.9807 10.5611 18.9385 10.6801 18.8709C10.7991 18.8032 10.9029 18.7116 10.985 18.6016L15.7744 12.6149C15.9203 12.4364 16 12.2124 16 11.9813C16 11.7502 15.9203 11.5263 15.7744 11.3477L10.8164 5.36101C10.7169 5.24026 10.5905 5.14481 10.4475 5.0824C10.3045 5.01999 10.1489 4.99238 9.99335 5.0018Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* partnership */}
            <div className="">
              <p className="text-[#888B97] font-normal">Our Partnership </p>
              <div className="flex gap-8 items-center flex-wrap">
                <img src={p1} alt="" />
                <img src={p2} alt="" />
                <img src={p3} alt="" />
                <img src={p4} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute right-0 top-0 -z-50">
          <div className="relative ">
            <img className="w-[50vw] h-[100vh] rounded-bl-[80px]" src={banner} alt="" />

            <div className="absolute bottom-[48px] left-[48px]">
              {/* show pus */}
              <div className="flex items-center gap-4 p-6 rounded-[32px] bg-white">
                <img src={homeIcon} alt="" />
                <div className="">
                  <p className="font-semibold text-h-primary">56 Houses</p>
                  <p className="text-[#68799F] text-[12px] font-normal">
                    Sold Monthly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* feature card start */}
      <div className="">
        {/* <FeatureCard /> */}
      </div>
      {/* feature card end */}


      {/* ready sell section start */}
      <div className="">
        <ReadySell />
      </div>
      {/* ready sell section end */}
      
      {/* about us card start */}
      <div className="mt-20 overflow-x-hidden">
        {/* <AboutUs /> */}
      </div>
      {/* about us card end */}

      {/* blog section start */}
      <div className="mt-20 overflow-x-hidden">
        <BlogSection />
      </div>
      {/* blog section end */}
      
    </div>
  );
};

export default NewHome;
