import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { AboutNav, AcademicsNav, CampusNav, EventsNav, StudentNav } from "./NavList";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full z-10 sticky">
        <div className="w-full h-14 md:h-16 lg:h-24 flex items-center justify-between px-4 md:px-8">
          <div>
            <div className="space-x-3 md:space-x-6 inline-flex items-center">
              <img
                className="w-10 md:w-14 lg:w-24"
                src="/assets/images/logo.png"
                alt=""
              />
              <div className="flex items-center space-x-2">
                <h1 className="text-lg w-fit sm:text-3xl tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl font-bold text-sky-900 font-[Caedo-Bold]">
                  KAPOL GLOBAL ACADEMY
                </h1>
                <p className="text-lg w-fit sm:text-xl md:text-2xl lg:text-4xl text-sky-900 font-semibold">
                  (IGCSE)
                </p>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          {
            menuOpen && (
              <div className="w-full h-full">

              </div>
            ) 
          }
        </div>

        <div className="w-full h-14 bg-bluekga hidden lg:block">
          <div className="w-full h-full px-10">
            <ul className="w-full h-full flex items-center justify-between text-xl font-semibold text-white">
              <li className="relative group h-full items-center flex">
                <NavLink
                  to="/"
                  className={({isActive})=>{
                    isActive ? 'text-pinkkga'
                    : 'text-white'
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="relative group h-full items-center flex">
                <a href="#" className="flex items-center gap-1">
                  About Us
                  <FaAngleDown />
                </a>
                <AboutNav />
              </li>
              <li className="relative group h-full items-center flex">
                <a href="#" className="flex items-center gap-1">
                  Academics
                  <FaAngleDown />
                </a>
                <AcademicsNav />
              </li>
              <li className="relative group h-full items-center flex">
                <a href="#" className="flex items-center gap-1">
                  Events
                  <FaAngleDown />
                </a>
                <EventsNav />
              </li>
              <li className="relative group h-full items-center flex">
                <a href="#" className="flex items-center gap-1">
                  Campus
                  <FaAngleDown />
                </a>
                <CampusNav />
              </li>
              <li className="relative group h-full items-center flex">
                <a href="#" className="flex items-center gap-1">
                  Student Life
                  <FaAngleDown />
                </a>
                <StudentNav />
              </li>
              <li className="relative group h-full items-center flex">
                <a
                  href="#"
                  className="transform transition-all duration-500"
                >
                  Carriers
                </a>
              </li>
              <li className="relative group h-full items-center flex">
                <NavLink
                  to="/contact-us"
                  className="transform transition-all duration-500"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
