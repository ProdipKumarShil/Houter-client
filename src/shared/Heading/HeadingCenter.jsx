const HeadingCenter = ({header, title}) => {
  return (
    <div className="">
      <p className="text-center mb-3">
        <div className="w-[32px] mx-auto border border-[#F59E0B] mb-2"></div>{" "}
        <p className="font-medium text-[#F59E0B]">{header}</p>
      </p>
      <p className="font-semibold text-h-primary text-[32px] text-center">{title}</p>
    </div>
  );
};

export default HeadingCenter;
