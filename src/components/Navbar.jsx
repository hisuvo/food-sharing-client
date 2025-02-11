import { useContext } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import ThemeToggle from "../Shared/ThemeToggle";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100 shadow-sm container py-4 mx-auto">
      <div className="flex-1">
        <Link to="/" className="flex flex-col md:flex-row gap-2 items-center">
          <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
          <h1 className="font-bold text-xl">Food</h1>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <Link to="/availableFood">Available Foods</Link>
          </li>

          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <ThemeToggle />
              </li>
              <li>
                <Link to="/addFood" className="justify-between">
                  Add Food
                </Link>
              </li>
              <li>
                <Link to={`/myManageFood`}> My Manages Food </Link>
              </li>
              <li>
                <Link to="/myRequestFood">My Food Request</Link>
              </li>
              <li className="mt-2">
                <NavLink to={"/login"} onClick={logOut} className="block">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
