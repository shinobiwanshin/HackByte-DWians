import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../assetsdup/Logo.png";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#1f282e] text-white px-8 py-4 shadow-md w-full fixed z-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto text-xl">
        <div>
          <Link to="/" className="hover:text-gray-300">
            <img src={logo} alt="Logo" className="w-35 h-20 drop-shadow-md" />
          </Link>
        </div>
        <div className="space-x-6">
          <Link
            to="/"
            className="hover:text-2xl transition-all ease-in-out duration-200"
          >
            Home
          </Link>
          <Link
            to="/#"
            className="hover:text-2xl transition-all ease-in-out duration-200"
          >
            Services
          </Link>
          <Link
            to="/#"
            className="hover:text-2xl transition-all ease-in-out duration-200"
          >
            About
          </Link>
          <Link
            to="/#"
            className="hover:text-2xl transition-all ease-in-out duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
