import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="h-full">
        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden flex items-center p-4 bg-gray-800 text-white">
          <button onClick={toggleSidebar}>
            {/* Hamburger Icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <span className="ml-4 text-xl">Menu</span>
        </div>

        {/* Sidebar */}
        <div className=" flex justify-between flex-col h-full">
          <div
            className={`fixed inset-y-0 w-fit left-0 z-50  bg-gray-800 md:bg-white text-white md:text-gray-800 transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:translate-x-0 md:relative`}
          >
            <div className="flex justify-between flex-col h-full">
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-6">Lemon Inc.</h2>
                <ul>
                  <li
                    className={`mb-4 ${
                      location.pathname === "/" ? "font-bold" : ""
                    }`}
                  >
                    <Link to="/" className="block hover:text-blue-400">
                      Home
                    </Link>
                  </li>
                  <li
                    className={`mb-4 ${
                      location.pathname === "/stores" ? "font-bold" : ""
                    }`}
                  >
                    <Link to="/stores" className="block hover:text-blue-400">
                      Stores
                    </Link>
                  </li>
                  <li
                    className={`mb-4 ${
                      location.pathname === "/products" ? "font-bold" : ""
                    }`}
                  >
                    <Link to="/products" className="block hover:text-blue-400">
                      Products
                    </Link>
                  </li>
                  <li
                    className={`mb-4 ${
                      location.pathname === "/settings" ? "font-bold" : ""
                    }`}
                  >
                    <Link to="/settings" className="block hover:text-blue-400">
                      Settings
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="flex items-center p-4 bg-card rounded-lg ">
                <img
                  aria-hidden="true"
                  alt="User Profile Picture"
                  src="https://placehold.co/40x40?text=👤"
                  class="rounded-full mr-3"
                />
                <div class="flex-1">
                  <p class="font-semibold text-foreground">Andy Samberg</p>
                  <p class="text-muted-foreground">andy.samberg@gmail.com</p>
                </div>
                <button class="text-primary hover:text-primary/80">&gt;</button>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay to close the sidebar when clicking outside */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
