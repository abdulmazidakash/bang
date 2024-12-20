
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logoIcon from "../assets/icons/lingo-logo.png";
import userLogout from "../assets/icons/userLogout.png";
import { AuthContext } from "../contexts/AuthProvider";
import LogoutWithImage from "./Buttons/LogoutWithImage";

export default function NavBar() {
  const { user } = useContext(AuthContext);
  const items = [
    <li key="home">
      <NavLink to="/">Home</NavLink>
    </li>,
    <li key="start-learning">
      <NavLink to="/start-learning">Start Learning</NavLink>
    </li>,
    <li key="tutorials">
      <NavLink to="/tutorials">Tutorials</NavLink>
    </li>,
    <li key="about-us">
      <NavLink to="/about-us">About Us</NavLink>
    </li>,
    user ? (
      <li key="profile">
        <NavLink to="/profile">My Profile</NavLink>
      </li>
    ) : null,
  ];
  return (
    <div className="navbar bg-[#00BBA6] p-6 shadow-lg border-b">
      <div className="navbar-start">
        <div className="dropdown z-50">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1000] mt-3 w-52 p-2 shadow font-semibold">
            {items}
            <div className=" items-center justify-center flex flex-row">
              {user ? (
                <LogoutWithImage />
              ) : (
                <Link to="/login" className="btn btn-ghost">
                  <p>Login</p>
                  <img src={userLogout} className="w-5 h-5" />
                </Link>
              )}
            </div>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img  src={logoIcon} alt="Logo" className="w-14 h-14 bg-white rounded-full" />
          <p className="text-4xl font-extrabold text-gray-600">Lingo Bingo</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex font-semibold">
        <ul className="menu menu-horizontal px-1">{items}</ul>
      </div>
      <div className="navbar-end hidden md:flex">
        {user ? (
          <LogoutWithImage />
        ) : (
          <Link to="/login" className="btn">
            <p>Login</p>
            <img src={userLogout} className="w-5 h-5" />
          </Link>
        )}
      </div>
    </div>
  );
}