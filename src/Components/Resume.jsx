import React from "react";
import { Link, NavLink } from "react-router";
import Education from "./TimeLine";

const Resume = () => (
  <div className="mb-28 ">
    {/* title div */}
    <div className="text-center my-12">
      <small className="text-green-500">2+ years of Experience</small>
      <h3 className="text-2xl sm:text-3xl md:text-6xl font-bold">
        My <span className="text-green-500">Resume</span>
      </h3>
    </div>
    {/* resume doc */}
    <div className="w-full md:max-w-2/3 mx-auto bg-[#1f2125] shadow-2xl shadow-gray-800 px-4 py-8 rounded-md mb-12 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="transition-all duration-300 delay-200 text-center">
          <NavLink to="/"> Education</NavLink>
        </div>
        <div className="transition-all duration-300 delay-200 text-center">
          <NavLink to="/"> Professional Skills</NavLink>
        </div>
        <div className="transition-all duration-300 delay-200 text-center">
          <NavLink to="/"> Experience</NavLink>
        </div>
        <div className="transition-all duration-300 delay-200 text-center">
          <NavLink to="/"> Interview</NavLink>
        </div>
      </div>
    </div>
    <div className="w-full md:max-w-2/3 mx-auto">
      <Education></Education>
    </div>
  </div>
);

export default Resume;
