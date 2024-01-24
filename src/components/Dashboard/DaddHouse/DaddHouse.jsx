const DaddHouse = () => {
  return (
    <div className="w-full p-4 space-y-3">
      <p className="text-[24px] ">Add House Here</p>
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="House Name"
        type="text"
      />
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="House Address"
        type="text"
      />
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="Your City"
        type="text"
      />
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="Total Bedroom"
        type="number"
      />
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="Total Bathrooms"
        type="number"
      />
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="House Room Size"
        type="number"
      />
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="House Picture"
        type="text"
      />
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="House Availability Data"
        type="text"
      />
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="Rent Per Month"
        type="date"
      />
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="Phone Number"
        type="number"
      />
      <input
        className="border border-my-secondary p-3 rounded-lg w-full"
        placeholder="Description"
        type="text"
      />
    </div>
  );
};

export default DaddHouse;
