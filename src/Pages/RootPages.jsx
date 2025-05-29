import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import Feature from "../Components/Feature";
import Resume from "../Components/Resume";
import MyBlogs from "../Components/MyBlogs";

const RootPages = () => {
  return (
    <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
      <Home></Home>
      <Feature></Feature>
      <Resume></Resume>
      <MyBlogs></MyBlogs>
    </div>
  );
};

export default RootPages;
