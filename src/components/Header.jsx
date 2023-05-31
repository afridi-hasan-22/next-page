import React, { useState } from "react";
import {
  Bars3BottomRightIcon,
  BoltIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuopen, setIsmenuOpen] = useState(false);
  return (
    <div className="bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 md:px-24">
      <div className="relative flex items-center justify-between">
        {/* logo sction */}
        <Link to="/" className="inline-flex items-center">
          <BoltIcon className="h-6 w-6 text-blue-500"></BoltIcon>
          <span className="ml-2 text-xl font-bold tracking-wide">nextPage</span>
        </Link>

        {/* Nav items */}
        <ul className="items-center hidden lg:flex space-x-8 font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-blue-500" : "")}
            >
              About
            </NavLink>
          </li>
        </ul>
        {/* Mobile Section */}
        <div className="lg:hidden ">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsmenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-6 text-gray-600"></Bars3BottomRightIcon>
          </button>
          {isMenuopen && (
            <div className="absolute bg-white w-full top-0 left-0 z-10 p-5 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <Link to="/" className="inline-flex items-center mb-4">
                    <BoltIcon className="h-6 w-6 text-blue-500"></BoltIcon>
                    <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                      nextPage
                    </span>
                  </Link>
                </div>
                <div>
                    <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    onClick={() => setIsmenuOpen(false)}
                    >
                        <XMarkIcon className="w-6 text-gray-600"/>
                    </button>
                </div>
              </div>
              {/* Mobile Navbar */}
              <nav>
                <ul className="space-y-6">
                    <li>
                        <Link
                        to='/'
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500"
                        >Home</Link>
                    </li>
                    <li>
                        <Link
                        to='/books'
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500"
                        >Books</Link>
                    </li>
                    <li>
                        <Link
                        to='/about'
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500"
                        >About Us</Link>
                    </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
