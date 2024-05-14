import React from "react";

const AboutNav = () => {
  return (
    <div>
      <ul className="absolute text-left w-52 top-full left-0 font-semibold bg-bluekga p-2 hidden group-hover:block divide-y-2 divide-white space-y-2 text-xl">
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">Vision & Mission</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">Our Legacy</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">A Tribute</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">Chairperson</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">Director of Acedmy</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">Head Mastress</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">Other Institute</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">Proud Achievements</a>
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
          <a href="">Early year Program</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">PYP</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">MYP</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">IGCSE</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">AS & A Level</a>
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
          <a href="">Annual Day</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">Graduation Day</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">Celebration</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">Visits & Outgoing</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">Fairs & Execution</a>
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
          <a href="">Infrastructure & Facilities</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">Videos</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">Photos</a>
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
          <a href="">Sporting Activity</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">Projects</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">Co-carricular</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">Students Achievement</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">Environmental Initiative</a>
        </li>
        <li className="hover:text-pinkkga transform transition-all duration-300">
          <a href="">MNU Conferences</a>
        </li>
      </ul>
    </div>
  );
};


export {AboutNav, AcademicsNav, EventsNav, CampusNav, StudentNav};