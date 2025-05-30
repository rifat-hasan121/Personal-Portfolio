import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import Feature from "../Components/Feature";
import Resume from "../Components/Resume";
import MyBlogs from "../Components/MyBlogs";
import MyProjects from "../Components/MyProjects";
import ContactCard from "../Components/ContactCard";

const RootPages = () => {
  return (
    <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
      <Home></Home>
      <Feature></Feature>
      <MyProjects></MyProjects>
      <Resume></Resume>
      <MyBlogs></MyBlogs>
      <ContactCard></ContactCard>
    </div>
  );
};

export default RootPages;
