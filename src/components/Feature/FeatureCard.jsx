import img from "../../assets/home/cardPic.png";
import chair from "../../assets/icons/chair.svg";
import strais from '../../assets/icons/staris.svg'
import m from '../../assets/icons/m.svg'

const FeatureCard = () => {
  return (
    <div className="border p-[10px]">
      <img className="w-full h-[165px] object-cover " src={img} alt="" />
      <div className="space-y-[10px] mt-[10px]">
        <p className="text-2xl font-medium">290.000 $</p>
        <p className="">Apartment for sale</p>
        <p className="text-sm text-[#00000080]">London, Oxford St.</p>
        <p className="text-sm text-[#00000080]">26 November 2020</p>
      </div>
      <div className="mt-[10px] flex items-center gap-3">
        <div className="flex items-center gap-2">
          <img src={chair} alt="" />
          <p className="text-sm">2+1</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={strais} alt="" />
          <p className="text-sm">8</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={m} alt="" />
          <p className="text-sm">110 m²</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
