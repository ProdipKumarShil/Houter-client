import sub from "../../assets/home/subscribe.png";

const Subscription = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 relative">
      <img
        className="w-full h-[312px] object-cover rounded-[32px]"
        src={sub}
        alt=""
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-h-primary text-[32px] font-semibold text-center mb-8">
          Subscribe For More Info <br /> and update from Hounter
        </p>
        <div className="mb-8">
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM19 6L12.5 10.47C12.348 10.5578 12.1755 10.604 12 10.604C11.8245 10.604 11.652 10.5578 11.5 10.47L5 6H19Z"
                  fill="#3B82F6"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full rounded-badge py-[17px] ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 "
              placeholder="Enter your email address"
              required
            />
            <button
              type="submit"
              className="bg-h-secondary text-[14px] font-semibold flex items-center gap-1 text-white absolute right-1 top-[5px] rounded-badge text-sm px-4 py-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
