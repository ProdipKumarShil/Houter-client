import gradient1 from "../../assets/gradient/sellGradient.svg";
import gradient2 from "../../assets/gradient/sellGradient2.svg";
import HeadingLeft from "../../shared/Heading/HeadingLeft";
import bedroom from "../../assets/icons/bedroom.svg";
import bathroom from "../../assets/icons/bathroom.svg";
import car from "../../assets/icons/car.svg";
import staris from "../../assets/icons/starisFloor.svg";
import phone from "../../assets/icons/phone.svg";
import home2 from '../../assets/home/sofa.png'
import flower from '../../assets/home/flower.png'
import bench from '../../assets/home/bench.png'

const AboutUsPage = () => {
  return (
    <div className="relative my-10">
      <img
        className="absolute right-0  -top-36 -z-40"
        src={gradient1}
        alt=""
      />
      <img
        className="absolute right-0 -top-72  -z-50"
        src={gradient2}
        alt=""
      />
      <div className="max-w-screen-xl mx-auto p-2 grid grid-cols-1 md:grid-cols-2">
        {/* text container */}
        <div className="">
          <HeadingLeft triggerName="sell" header="Ready to Sell!" title="Let’s tour and see our house!" />
          <p className="text-[#626687] mt-4">
            Houses recommended by our partners that have been curated to become
            the home of your dreams!
          </p>
          <p className="text-[#343558] font-semibold mt-4 mb-4">House Detail</p>
          {/* bedrooms and bathroom */}
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="">
              <div className="flex gap-4 items-center mb-4">
                <img src={bedroom} alt="" />
                <p className="text-[#3C4563] font-medium">4 Bedrooms</p>
              </div>
              <div className="flex gap-4 items-center mb-4">
                <img src={car} alt="" />
                <p className="text-[#3C4563] font-medium">1 Carport</p>
              </div>
            </div>
            <div className="">
              <div className="flex gap-4 items-center mb-4">
                <img src={bathroom} alt="" />
                <p className="text-[#3C4563] font-medium">2 Bathrooms</p>
              </div>
              <div className="flex gap-4 items-center mb-4">
                <img src={staris} alt="" />
                <p className="text-[#3C4563] font-medium">2 Floors</p>
              </div>
            </div>
          </div>

          <div className="border w-full my-9"></div>
          {/* contact */}
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <img
                className="w-14 h-14 object-cover rounded-full"
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
            <button className="active:scale-95 bg-h-secondary py-3 px-4 rounded-[32px] flex items-center gap-4">
              <img className="h-6 w-6" src={phone} alt="" />
              <p className="text-white font-semibold">Contact Now</p>
            </button>
          </div>
        </div>

        {/* img container */}
        <div className="relative">
          <img className="w-[448px] h-[416px] object-cover ml-auto rounded" src="https://res.cloudinary.com/dwhhe5dgs/image/upload/v1707118895/houter/assets/bg1_pmt6tj.png" alt="" />
          <img className=" absolute hidden md:block right-56 -bottom-14 w-[296px] h-[168px] object-cover" src={home2} alt="" />
          <img className=" absolute hidden md:block right-[115px] -bottom-14 w-[96px] h-[80px] object-cover" src={flower} alt="" />
          <img className=" absolute hidden md:block right-[8px] -bottom-14 w-[96px] h-[80px] object-cover" src={bench} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;