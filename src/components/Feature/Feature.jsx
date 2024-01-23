import FeatureCard from "./FeatureCard";

const Feature = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-10">
      <p className="font-medium text-[24px] mb-4">Featured Rental</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  );
};

export default Feature;
