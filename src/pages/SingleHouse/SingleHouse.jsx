import location from "../../assets/icons/location.svg";
import tick from "../../assets/icons/tick.svg";
import phone from '../../assets/icons/phone.svg';
import message from '../../assets/icons/message.svg';

const SingleHouse = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-2 grid grid-cols-4 gap-10">
      <div className="col-span-4 md:col-span-3 ">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="">
            <p className="text-[24px] ">Large Family House</p>
            <div className="flex items-center gap-2 mt-2">
              <img src={location} alt="" />
              <p className="text-sm">London, Oxford St.</p>
            </div>
          </div>
          <p className="text-[24px] font-medium">290.000 $</p>
        </div>

        {/* general info */}
        <div className="p-5 border mt-10">
          <p className="text-[20px] mb-5">General Information</p>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="space-y-[15px]">
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
            </div>
            <div className="space-y-[15px] mt-[15px] md:mt-0">
              <Items />
              <Items />
              <Items />
              <Items />
              <Items />
            </div>
          </div>
        </div>
        {/* Explanation */}
        <div className="border p-5 mt-10">
          <p className="text-[20px] mb-5">Explanation</p>
          <p className="text-[#00000080]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ac
            convallis tellus pellentesque non odio consectetur bibendum. Auctor
            leo risus in tristique sit enim nec sed. Ridiculus vulputate
            facilisi a velit cursus sapien egestas nec, accumsan.{" "}
          </p>
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
            src="https://s3-alpha-sig.figma.com/img/f296/ee16/05d90dd04e8447b05e4b21d2c028e6af?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XEYqhRN08FGJuwGtC5cnrf7p0dJXMOFbHlIRpZ8JtudOzQegV0xc~rcr9vrKKypQoRWB~I3OyN9IUyhrlm-~gZcE5IEgyLnPD-LsE7DLqGdxqOUjFQSRxtzXQZrNdJscR8ty2InHCiZN66RXnAEMclnGBf6xGXKvXEC-Krv0DjhibwHDLOCM7BdyCN6DoX7q9e0kEb~meRcTTRDmT568EaOnYgtNZdYrogulI1OIQUjn-qiTJokpHBtUf6q7nJfTbNtuaMmqh8OxW3nCNThJ-OEkQ4CPDfhS9HAnnntyI-AsdjDV6DItKToDvozEjopbeFeECUFDQfE-HcyO4GpIRQ__"
            alt=""
          />
          <div className="flex flex-col justify-center text-center space-y-1">
            <p>Micheal James</p>
            <p className="text-my-secondary">Real Estate Specialist</p>
            <button className="flex bg-[#31AA52] text-white py-3 rounded-lg items-center justify-center gap-4"> <img src={phone} alt="" /> <span>VIEW PHONE</span></button>
            <button className="flex border text-[#434FAA] border-[#434FAA]  py-3 rounded-lg items-center justify-center gap-4"> <img src={message} alt="" /> <span>VIEW PHONE</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHouse;

const Items = () => {
  return (
    <div className="flex items-center gap-4">
      <p className=" text-[#00000080]">Advertise No:</p>
      <p>0-1234</p>
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
