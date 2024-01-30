
const HeadingLeft = ({header, title}) => {
  return (
    <div className="">
      <p className="flex items-center gap-2"><div className="w-[32px] border border-[#F59E0B]"></div> <p className="font-medium text-[#F59E0B]">{header}</p></p>
      <p className="font-semibold text-h-primary text-[32px]">{title}</p>
    </div>
  )
}

export default HeadingLeft