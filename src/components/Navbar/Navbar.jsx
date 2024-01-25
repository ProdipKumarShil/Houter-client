import { Link } from "react-router-dom";
import { getUser } from "../../hooks/getUser";

const Navbar = () => {
  const user = getUser();
  const handleLogOut = () => localStorage.clear()
  return (
    <div className="navbar items-center bg-base-100 max-w-screen-xl mx-auto">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl mr-10">
          Houter
        </Link>
        <div className="md:flex flex-row gap-5 hidden ">
          <Link>For Sale</Link>
          <Link to="/allHouse">For Rent</Link>
          <Link>Daily Rental</Link>
          <Link>Projects</Link>
        </div>
      </div>
      <div className="flex-none">
        <div className="">
          <Link className="font-[18px] text-white rounded-md py-1 px-5 bg-my-primary">
            Advertise
          </Link>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {user && (
              <>
                <li>
                  <Link to="/dashboard/allHouse">Dashboard</Link>
                </li>
                <li>
                  <Link onClick={handleLogOut} to="/">Logout</Link>
                </li>
              </>
            )}
            {!user && (
              <>
                <li>
                  <Link to="/signUp">Sign Up</Link>
                </li>
                <li>
                  <Link to="/signIn">Sign In</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
