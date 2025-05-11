import { useContext } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import ThemeToggle from "../Shared/ThemeToggle";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100 dark:bg-gray-900 dark:text-gray-50 shadow-sm container py-4 mx-auto">
      <div className="flex-1">
        <Link to="/" className="flex flex-col md:flex-row gap-2 items-center ">
          <img
            className="w-auto h-7 sm:h-8 dark:bg-gray-50"
            src={logo}
            alt=""
          />
          <h1 className="font-bold text-xl">Food</h1>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/availableFood">Available Foods</NavLink>
          </li>
          {user?.email === "suvodatta72@gmail.com" ? (
            <li>
              <NavLink to="/admin-dashbord">Admin Dashbord</NavLink>
            </li>
          ) : (
            ""
          )}

          {!user && (
            <li>
              <NavLink to="/login">Login</NavLink>
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-gray-900 rounded-box w-52"
            >
              <li>
                <ThemeToggle />
              </li>
              <li>
                <NavLink to="/addFood" className="justify-between">
                  Add Food
                </NavLink>
              </li>
              <li>
                <NavLink to={`/myManageFood`}> My Manages Food </NavLink>
              </li>
              <li>
                <NavLink to="/myRequestFood">My Food Request</NavLink>
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
