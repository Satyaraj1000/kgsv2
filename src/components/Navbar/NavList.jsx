import React from "react";
import { NavLink } from "react-router-dom";

const AboutNav = () => {
  return (
    <div>
      <ul className="absolute text-left w-52 top-full left-0 font-semibold bg-bluekga p-2 hidden group-hover:block divide-y-2 divide-white space-y-2 text-xl">
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/about-us/vision-and-mission">Vision & Mission</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/about-us/our-legacy">Our Legacy</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/about-us/tribute">A Tribute to Chairman</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/about-us/chairperson">Chairperson</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/about-us/director-of-academy">Director of Acedmy</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/about-us/head-mastress">Head Mastress</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/about-us/other-institute">Other Institute</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/about-us/achievements">Proud Achievements</NavLink>
        </li>
      </ul>
    </div>
  );
};

const AcademicsNav = () => {
  return (
    <div>
      <ul className="absolute text-left w-52 top-full left-0 font-semibold bg-bluekga p-2 hidden group-hover:block divide-y-2 divide-white space-y-2 text-xl">
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/academics/early-year-program">Early year Program</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/academics/pyp">PYP</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/academics/myp">MYP</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/academics/igcse">IGCSE</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/academics/a-level">AS & A Level</NavLink>
        </li>
      </ul>
    </div>
  );
};

const EventsNav = () => {
  return (
    <div>
      <ul className="absolute text-left w-52 top-full left-0 font-semibold bg-bluekga p-2 hidden group-hover:block divide-y-2 divide-white space-y-2 text-xl">
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/events/annual-day">Annual Day</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/events/graduation-day">Graduation Day</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/events/celebration">Celebration</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/events/visits--outgoing">Visits & Outgoing</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/events/fairs--execution">Fairs & Execution</NavLink>
        </li>
      </ul>
    </div>
  );
};

const CampusNav = () => {
  return (
    <div>
      <ul className="absolute text-left w-52 top-full left-0 font-semibold bg-bluekga p-2 hidden group-hover:block divide-y-2 divide-white space-y-2 text-xl">
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/campus/infrastructure-facilities">Infrastructure & Facilities</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/campus/videos">Videos</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/campus/photos">Photos</NavLink>
        </li>
      </ul>
    </div>
  );
};

const StudentNav = () => {
  return (
    <div>
      <ul className="absolute text-left w-52 top-full left-0  p-2 hidden font-semibold bg-bluekga group-hover:block divide-y-2 divide-white space-y-2 text-xl">
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/student/">Sporting Activity</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/student/">Projects</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/student/">Co-carricular</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/student/">Students Achievement</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/student/">Environmental Initiative</NavLink>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <NavLink to="/student/">MNU Conferences</NavLink>
        </li>
      </ul>
    </div>
  );
};

export { AboutNav, AcademicsNav, EventsNav, CampusNav, StudentNav };
