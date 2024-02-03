import { Link } from "react-router-dom";
import { getUser } from "../../../hooks/getUser";

const Dprofile = () => {
  const user = getUser();
  console.log(user);
  return (
    <div className="w-full p-4">
      <form className="max-w-96 mx-auto space-y-5" action="">
        <p className="text-h-primary text-[24px] font-bold text-center">Profile</p>
        <img className="block mx-auto w-32 h-32 rounded-full border-8 border-slate-300" src={user?.img} alt="" />
        <input
          className="border border-my-secondary p-3 rounded-lg w-full"
          placeholder="Enter Your Name"
          type="text"
          defaultValue={user?.name}
        />
        <input
          className="border border-my-secondary p-3 rounded-lg w-full"
          placeholder="Enter Your Email"
          type="email"
          defaultValue={user?.email}
        />
        <button className=" hover:text-white hover:bg-h-primary duration-75 text-h-primary border border-h-primary active:scale-95  py-3 rounded-lg w-full font-bold">
          Update
        </button>
        <Link to='/dashboard/addHouse' className=" block text-center bg-h-secondary active:scale-95 text-white py-3 rounded-lg w-full font-bold">
          Add House
        </Link>
      </form>
      <div className="flex justify-between items-center px-2 max-w-96 mx-auto my-5">
        <button className="btn btn-xs text-red-600 ">Delete Account</button>
        <button className="btn btn-xs text-red-600 ">Sign Out</button>
      </div>
    </div>
  );
};

export default Dprofile;
