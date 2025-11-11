import React, { use } from "react";
import { Link, Links, NavLink } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import logoIcon from "../../assets/image/book-2.png";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const items = (
    <>
      <li>
        {" "}
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/find-partners">Find Partners</NavLink>{" "}
      </li>
      {user && (
        <>
          <li>
            {" "}
            <NavLink to="/create-partner-profile">Create Partner Profile</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/my-connections">My Connections</NavLink>{" "}
          </li>
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast("SignOut Successfully");
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  return (
    <div className="shadow-sm">
      <MyContainer>
        <nav>
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  {items}
                </ul>
              </div>
              <Link className="text-xl flex items-center">
                <img className="w-16 h-16" src={logoIcon} alt="" />
                <span className="font-bold">StudyMate</span>
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-lg font-semibold flex gap-5">
                {items}
              </ul>
            </div>
            <div className="navbar-end flex gap-5">
              {user ? (
                <div className="flex gap-2">
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          // src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          src={user.photoURL}
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex="-1"
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                      <li>
                        <a className="justify-between">
                          Profile
                          <span className="badge">Update</span>
                        </a>
                      </li>
                      {/* <li>{ user.}</li> */}
                      <li>
                        <a onClick={handleSignOut}>Logout</a>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className=" flex gap-5">
                  <Link className="text-lg font-semibold" to="/login">
                    Login
                  </Link>
                  <Link className="text-lg font-semibold" to="/register">
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </MyContainer>
    </div>
  );
};

export default Navbar;
