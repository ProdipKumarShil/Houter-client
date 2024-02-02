import chair from "../../assets/icons/chair.svg";
import strais from '../../assets/icons/staris.svg'
import m from '../../assets/icons/m.svg'
import moment from "moment";
import { Link } from "react-router-dom";

const FeatureCard = ({house}) => {
  const {_id, name, price, address, bathroom, bedroom, roomSize, availableDate, images} = house
  
  return (
    <Link to={`/house/${_id}`} className="border p-[10px] featureCard">
      <img className="w-full h-[165px] object-cover " src={images[0]} alt="" />
      <div className="space-y-[10px] mt-[10px]">
        <p className="text-2xl font-medium">{price} $</p>
        <p className="">{name}</p>
        <p className="text-sm text-[#00000080]">{address}</p>
        <p className="text-sm text-[#00000080]">{moment(availableDate).format('DD MMMM, YYYY')}</p>
      </div>
      <div className="mt-[10px] flex items-center gap-3">
        <div className="flex items-center gap-2">
          <img src={chair} alt="" />
          <p className="text-sm">{bedroom}</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={strais} alt="" />
          <p className="text-sm">{bathroom}</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={m} alt="" />
          <p className="text-sm">{roomSize} m²</p>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
