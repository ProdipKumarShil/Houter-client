import Dnavbar from "../../components/Dashboard/Dnavbar/Dnavbar";
import { NavLink, Outlet } from "react-router-dom";
import { getUser } from "../../hooks/getUser";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const user = getUser()
  const [owner, setOwner] = useState(false)
  useEffect(() => {
    if(user && user?.role ==="owner"){
      setOwner(true)
    }
  }, [user])
  return (
    <div>
      <Dnavbar />
      <div className="grid grid-cols-1 md:grid-cols-5 max-w-screen-xl mx-auto">
        <div className="col-span-1 flex flex-col space-y-2">
          <NavLink to='/dashboard/profile' className={({isActive}) => isActive ? "w-full bg-h-secondary p-3 rounded-lg text-lg font-bold text-white" : "w-full hover:bg-slate-300 p-3 rounded-lg text-lg font-bold text-black"}>Profile</NavLink>
          {/* {owner ? <>
            <NavLink to='/dashboard/allHouse' className={({isActive}) => isActive ? "w-full bg-h-secondary p-3 rounded-lg text-lg font-bold text-white" : "w-full hover:bg-slate-300 p-3 rounded-lg text-lg font-bold text-black"}>All House</NavLink>
            <NavLink to='/dashboard/addHouse' className={({isActive}) => isActive ? "w-full bg-h-secondary p-3 rounded-lg text-lg font-bold text-white" : "w-full hover:bg-slate-300 p-3 rounded-lg text-lg font-bold text-black"}>Add House</NavLink>
          </> : <NavLink to='/dashboard/bookingHouse' className={({isActive}) => isActive ? "w-full bg-h-secondary p-3 rounded-lg text-lg font-bold text-white" : "w-full hover:bg-slate-300 p-3 rounded-lg text-lg font-bold text-black"}>Booking</NavLink>
          } */}
            <NavLink to='/dashboard/allHouse' className={({isActive}) => isActive ? "w-full bg-h-secondary p-3 rounded-lg text-lg font-bold text-white" : "w-full hover:bg-slate-300 p-3 rounded-lg text-lg font-bold text-black"}>All House</NavLink>
            <NavLink to='/dashboard/addHouse' className={({isActive}) => isActive ? "w-full bg-h-secondary p-3 rounded-lg text-lg font-bold text-white" : "w-full hover:bg-slate-300 p-3 rounded-lg text-lg font-bold text-black"}>Add House</NavLink>
           <NavLink to='/dashboard/bookingHouse' className={({isActive}) => isActive ? "w-full bg-h-secondary p-3 rounded-lg text-lg font-bold text-white" : "w-full hover:bg-slate-300 p-3 rounded-lg text-lg font-bold text-black"}>Booking</NavLink>
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
