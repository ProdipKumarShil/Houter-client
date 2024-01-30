import { Link } from "react-router-dom"

const HCard = ({home}) => {
  const {name, price, _id, userName, img, address} = home
  return (
    <Link to={`/house/${_id}`} className="panel w-[340px]">
      <img className="w-[340px] h-[382px] object-cover rounded-[24px] mb-[24px]" src={img} alt="" />
      <div className="">
        <p className="text-[24px] font-medium text-[#0E1735] mb-2">{name}</p>
        <p className="text-[20px] text-[#3C4563] font-medium mb-[24px]">$ {price}.00</p>
        <div className="flex items-center gap-4">
          <img className="w-10 h-10 object-cover rounded-full" src="https://s3-alpha-sig.figma.com/img/35de/90fb/12a790d479bee66f26626dba559056bd?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F66sww3iUUHS5PX5Ijw0Grq6PstvGQbleyp0jFG1JKzD0EoDldyvZggdvbRiX7dCfqdH3rm3HxODV2qgeY-utzv0u3822Zmfs8Kp6LU7w8O3uRc3TzNVPjbpCM2yAfh5791vpqek6bM0YogMuM417mbcaC9fHXdBY7QjJPGcyi-2ZBNVamRtne6-FdYIxPnVDbfxnPhS4apnoLsxxU1vQRTOD~099-mrOZxShK6Yv9unApfoQDp~~ZqnYNvOncqD8ExuItKCMRHAFDVBIk7KvaAjqnGqvGeZXEOA5NM4LnB0fgFbU9cz-pBkU0UuyZtq7j7wvbRjV16XoIgib~IjSg__" alt="" />
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