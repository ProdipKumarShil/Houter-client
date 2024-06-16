import { useHouse } from "../../hooks/useHouse";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  const { data: houses, isLoading } = useHouse();
  
  if (isLoading) {
    return (
      <span className="loading loading-spinner text-error mx-auto block"></span>
    );
  }
  return (
    <div className="max-w-screen-xl mx-auto mt-10">
      <p className="font-medium text-[24px] mb-4">Featured Rental</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {houses.slice(0, 4).map((house) => (
          <FeatureCard house={house} key={house._id} />
        ))}
      </div>
    </div>
  );
};

export default Feature;
