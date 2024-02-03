import location from "../../assets/icons/location.svg";
import tick from "../../assets/icons/tick.svg";
import phone from "../../assets/icons/phone.svg";
import { Carousel } from "react-responsive-carousel";
import { useLoaderData } from "react-router-dom";
import moment from "moment";

const SingleHouse = () => {
  const {name, images, address, bathroom, bedroom, city, availableDate, description, number, roomSize, user, price} = useLoaderData()
  return (
    <div className="max-w-screen-xl mx-auto p-2 grid grid-cols-4 gap-10">
      <div className="col-span-4 md:col-span-3 ">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="">
            <p className="text-[24px] ">{name}</p>
            <div className="flex items-center gap-2 mt-2">
              <img src={location} alt="" />
              <p className="text-sm">{address}</p>
            </div>
          </div>
          <p className="text-[24px] font-medium">{price} $</p>
        </div>
        {/* Carousel */}
        <MyCarousel imgs={images} />
        {/* general info */}
        <div className="p-5 border mt-10">
          <p className="text-[20px] mb-5">General Information</p>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="space-y-[15px]">
              <Items text="City" info={city} />
              <Items text="Price" info={price + '$'} />
              <Items text="Bathroom" info={bathroom} />
              <Items text="Available Date" info={moment(availableDate).format('DD MMM, YYYY')} />
              
            </div>
            <div className="space-y-[15px] mt-[15px] md:mt-0">
              <Items text="Bedroom" info={bedroom} />
              <Items text="Number" info={number} />
              <Items text="Room Size" info={roomSize} />
              <Items text="Renter" info={user.name} />
            </div>
          </div>
        </div>
        {/* Explanation */}
        <div className="border p-5 mt-10">
          <p className="text-[20px] mb-5">Explanation</p>
          <p className="text-[#00000080]">{description}</p>
        </div>
        {/* features */}
        <div className="p-5 border mt-10 grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <p className="text-[20px] mb-5">Interior Features</p>
            <div className="space-y-[5px]">
              <Feature text="ADSL" />
              <Feature text="Alarm" />
              <Feature text="Balcony" />
              <Feature text="Laundry room" />
              <Feature text="Dressing room" />
              <Feature text="Shower" />
              <Feature text="Satin color" />
            </div>
          </div>
          <div className="mt-[24px] md:mt-0">
            <p className="text-[20px] mb-5">External Features</p>
            <div className="space-y-[5px]">
              <Feature text="Elevator" />
              <Feature text="Gardened" />
              <Feature text="Fitness" />
              <Feature text="Security" />
              <Feature text="Car park" />
              <Feature text="Market" />
            </div>
          </div>
        </div>
      </div>
      {/* profile */}
      <div className="col-span-4 md:col-span-1">
        <div className="p-5 border">
          <img
            className="w-[115px] h-[115px] rounded-full block mx-auto "
            src={user.img}
            alt=""
          />
          <div className="flex flex-col justify-center text-center space-y-1">
            <p>{user.name}</p>
            <p className="text-my-secondary">Real Estate Specialist</p>
            <div className="mt-5 ">
              <button className="flex w-full bg-h-secondary text-white py-3 mt-5 rounded-lg items-center justify-center gap-4">
                {" "}
                <img src={phone} alt="" /> <span>Call</span>
              </button>
              <button className="mt-3 w-full border text-h-primary border-h-primary  py-3 rounded-lg">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHouse;

const Items = ({text, info}) => {
  return (
    <div className="flex items-center gap-4">
      <p className=" text-[#00000080]">{text}</p>
      <p>{info}</p>
    </div>
  );
};

const Feature = ({ text }) => {
  return (
    <div className="flex gap-[10px]">
      <img src={tick} alt="" />
      <p className="text-[#00000080]">{text}</p>
    </div>
  );
};

const MyCarousel = ({ imgs }) => {
  return (
    <Carousel className="mt-4" showArrows={true} showIndicators={false} showStatus={false}>
      {imgs.map((img, index) => (
        <div key={index}>
          <img className="w-full object-cover" src={img} />
        </div>
      ))}
    </Carousel>
  );
};
