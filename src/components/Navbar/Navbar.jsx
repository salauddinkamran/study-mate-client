import React from "react";
import { Link, Links } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import logoIcon from "../../assets/image/book-2.png"

const Navbar = () => {
  const items = (
    <>
      <li>
        {" "}
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="find-partners">Find Partners</Link>{" "}
      </li>
    </>
  );
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
              <ul className="menu menu-horizontal px-1 text-lg font-semibold flex gap-5">{items}</ul>
            </div>
            <div className="navbar-end">
              <Link to="/register">Register</Link>
            </div>
          </div>
        </nav>
      </MyContainer>
    </div>
  );
};

export default Navbar;
