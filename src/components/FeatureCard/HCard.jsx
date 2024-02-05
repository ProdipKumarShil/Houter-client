import { Link } from "react-router-dom"

const HCard = ({home}) => {
  const {name, price, _id, userName, img, address, userImg} = home
  return (
    <Link to={`/house/${_id}`} className="panel w-[340px]">
      <img className="w-[340px] h-[382px] object-cover rounded-[24px] mb-[24px]" src={img} alt="" />
      <div className="">
        <p className="text-[24px] font-medium text-[#0E1735] mb-2">{name}</p>
        <p className="text-[20px] text-[#3C4563] font-medium mb-[24px]">$ {price}.00</p>
        <div className="flex items-center gap-4">
          <img className="w-10 h-10 object-cover rounded-full" src={userImg} alt="" />
          <div className="">
            <p className="text-[18px] gap-1 font-medium text-[#0E1735]">{userName}</p>
            <p className="text-[14px] font-normal text-[#888B97]">{address}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default HCard