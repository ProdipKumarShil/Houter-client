import Dnavbar from "../../components/Dashboard/Dnavbar/Dnavbar";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Dnavbar />
      <div className="grid grid-cols-1 md:grid-cols-5 max-w-screen-xl mx-auto">
        <div className="col-span-1 flex flex-col space-y-2">
          {/* <Link className="w-full bg-my-primary p-3 rounded-lg text-lg font-bold text-white" to='/dashboard/'>All House</Link>
          <Link className="w-full hover:bg-slate-300 p-3 rounded-lg text-lg font-bold text-black" to='/dashboard/addHouse'>Add House</Link>
          <Link className="w-full hover:bg-slate-300 p-3 rounded-lg text-lg font-bold text-black" to='/dashboard/bookingHouse'>Booking</Link> */}
          <NavLink to='/dashboard/allHouse' className={({isActive}) => isActive ? "w-full bg-my-primary p-3 rounded-lg text-lg font-bold text-white" : "w-full hover:bg-slate-300 p-3 rounded-lg text-lg font-bold text-black"}>All House</NavLink>
          <NavLink to='/dashboard/addHouse' className={({isActive}) => isActive ? "w-full bg-my-primary p-3 rounded-lg text-lg font-bold text-white" : "w-full hover:bg-slate-300 p-3 rounded-lg text-lg font-bold text-black"}>Add House</NavLink>
          <NavLink to='/dashboard/bookingHouse' className={({isActive}) => isActive ? "w-full bg-my-primary p-3 rounded-lg text-lg font-bold text-white" : "w-full hover:bg-slate-300 p-3 rounded-lg text-lg font-bold text-black"}>Booking</NavLink>
        </div>
        {/* dashboard pages */}
        <div className="col-span-4 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
