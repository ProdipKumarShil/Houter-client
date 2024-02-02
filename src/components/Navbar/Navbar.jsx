import { Link } from "react-router-dom";
// import { getUser } from "../../hooks/getUser";
import logo from "../../assets/logo/houterLogo.svg";
import { getUser } from "../../hooks/getUser";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    setUser(getUser)
  }, [])
  
  const handleSignOut = () => {
    localStorage.clear()
    setUser(null)
  }
  return (
    <div className="bg-gradient-to-r bg-opacity-5 from-h-secondary to-h-primary mb-[30px]">
      <div className="max-w-screen-xl py-4 mx-auto p-2 flex items-center justify-between">
        <Link to="/" className="flex gap-3 items-center">
          <img src={logo} alt="" />
          <p className="text-[16px] font-bold text-h-primary">Houter</p>
        </Link>
        <div className="md:flex items-center gap-6 hidden">
          <Link
            to="/allHouse"
            className="text-white text-[14px] font-semibold px-4 py-2 border border-[#ffffff4d] rounded-badge bg-[#ffffff1a]">
            For Rent
          </Link>
          <Link
            to="/blogs"
            className="text-white text-[14px] font-semibold px-4 py-2 border border-[#ffffff4d] rounded-badge bg-[#ffffff1a]">
            Blogs
          </Link>
          <Link
            to="/aboutUs"
            className="text-white text-[14px] font-semibold px-4 py-2 border border-[#ffffff4d] rounded-badge bg-[#ffffff1a]">
            About Us
          </Link>
          {
            user ? <div className="dropdown dropdown-bottom dropdown-end">
            <img src={user?.img} tabIndex={0} className="border active:scale-95 border-[#ffffff4d] w-12 h-12 object-cover rounded-full" />
            
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/allHouse'>For Rent</Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
              <li>
                <Link to="/aboutUs">About Us</Link>
              </li>
              <li onClick={handleSignOut}>
                <Link>Sign out</Link>
              </li>
            </ul>
          </div> : <Link
            to="/signUp"
            className="ml-8 text-[14px] font-semibold px-6 py-3 border border-[#ffffff4d] rounded-badge bg-[#D1FAE5] text-h-secondary">
            Sign Up!
          </Link> 
          }
        </div>
      </div>
    </div>
    // <div className="navbar items-center bg-base-100 max-w-screen-xl mx-auto">
    //   <div className="flex-1">
    //     <Link to="/" className="btn btn-ghost text-xl mr-10">
    //       Houter
    //     </Link>
    //     <div className="md:flex flex-row gap-5 hidden ">
    //       <Link>For Sale</Link>
    //       <Link to="/allHouse">For Rent</Link>
    //       <Link>Daily Rental</Link>
    //       <Link>Projects</Link>
    //     </div>
    //   </div>
    //   <div className="flex-none">
    //     <div className="">
    //       <Link className="font-[18px] text-white rounded-md py-1 px-5 bg-my-primary">
    //         Advertise
    //       </Link>
    //     </div>
    //     <div className="dropdown dropdown-end">
    //       <div
    //         tabIndex={0}
    //         role="button"
    //         className="btn btn-ghost btn-circle avatar">
    //         <div className="w-10 rounded-full">
    //           <img
    //             alt="Tailwind CSS Navbar component"
    //             src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
    //           />
    //         </div>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    //         {user && (
    //           <>
    //             <li>
    //               <Link to="/dashboard/allHouse">Dashboard</Link>
    //             </li>
    //             <li>
    //               <Link onClick={handleLogOut} to="/">Logout</Link>
    //             </li>
    //           </>
    //         )}
    //         {!user && (
    //           <>
    //             <li>
    //               <Link to="/signUp">Sign Up</Link>
    //             </li>
    //             <li>
    //               <Link to="/signIn">Sign In</Link>
    //             </li>
    //           </>
    //         )}
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
