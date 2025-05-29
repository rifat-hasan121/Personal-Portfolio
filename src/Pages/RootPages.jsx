import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import Feature from "../Components/Feature";

const RootPages = () => {
  return (
    <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
      <Home></Home>
      <Feature></Feature>
    </div>
  );
};

export default RootPages;
