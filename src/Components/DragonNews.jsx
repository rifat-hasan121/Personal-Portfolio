import React from 'react';
import { FcFlashAuto } from "react-icons/fc";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router";

const DragonNews = () => {
    return (
      <div className="w-2xl mx-auto pb-8 my-12 bg-gray-950 p-4 rounded-sm shadow-2xl shadow-gray-800">
        <div className="flex justify-end items-center gap-4 mb-8">
          <div className=""></div>
          <Link to="/">
            <div className="">
              <MdCancel size={38} style={{ color: "red" }} />
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="rounded-sm transition-transform duration-300 hover:scale-105"
            src="https://i.ibb.co/Nn18J8fb/Screenshot-from-2025-06-28-17-48-36.png"
            alt=""
          />
        </div>
        <small className="text-[12px] text-gray-400 my-4">
          August 17, 2025
        </small>
        <h3 className="text-2xl font-semibold mb-6">
          Dragon News - Your Daily Dose of News
        </h3>
        <p className="text-[18px] text-gray-700 mb-6">
          <strong>Main Technology Stack Used</strong> <br />
          Dragon News is a comprehensive e-commerce platform designed to
          revolutionize the online grocery shopping experience. It allows users
          to browse a wide range of grocery products, add items to their cart,
          and securely checkout with ease. The platform features a user-friendly
          interface, advanced search capabilities, and personalized product
          recommendations based on user preferences. With a focus on speed and
          efficiency, Bulka Bazar aims to provide a seamless shopping experience
          for customers while offering robust management tools for vendors.
        </p>
        <div className="flex flex-col justify-center items-center">
          <img
            className="rounded-sm mb-2 transition-transform duration-300 hover:scale-105"
            src="https://rainbowit.net/themes/inbio/wp-content/uploads/2022/08/bl-big-01-1220x600.jpg"
            alt=""
          />
        </div>

        <p className="text-[12px] text-center text-gray-800 my-8">
          Image Caption
        </p>
        <p className="text-[18px] text-gray-700 mb-6">
          Dragon News is a comprehensive e-commerce platform designed to
          revolutionize the online grocery shopping experience. It allows users
          to browse a wide range of grocery products, add items to their cart,
          and securely checkout with ease. The platform features a user-friendly
          interface, advanced search capabilities, and personalized product
          recommendations based on user preferences. With a focus on speed and
          efficiency, Dragon News aims to provide a seamless shopping experience
          for customers while offering robust management tools for vendors.
        </p>
        <h1 className="text-2xl font-bold my-6">
          Live Project Link :{" "}
          <a
            href="https://the-dragon-news-2c592.web.app/category/0"
            target="_blank"
            className="text-blue-700"
          >
            Live Demo
          </a>
        </h1>
        <h1 className="text-2xl font-bold my-6">
          GitHub Repository Link :{" "}
          <a
            href="https://github.com/rifat-hasan121/dragon-news-web"
            target="_blank"
            className="text-blue-700"
          >
            GitHub - Client
          </a>
        </h1>

        <div>
          <div className="flex gap-6 items-center">
            <div>
              <FcFlashAuto size={38} />
            </div>
            <div>
              <h2 className=" font-semibold">
                A programming language is for thinking about programs, not for
                expressing programs you’ve already thought of. It should be a
                pencil, not a pen.
              </h2>
            </div>
          </div>
        </div>
        <p className="text-[18px] text-gray-700 mb-6 mt-6">
          While developing Freelancher Task Market Places, I faced several
          technical challenges. Integrating DaisyUI components with custom
          Tailwind styles required adjustments to maintain a consistent and
          cohesive design throughout the application. Managing dynamic routing
          and protecting routes for specific user roles posed complexity,
          demanding careful handling of navigation logic. Ensuring mobile
          responsiveness across all breakpoints involved significant testing and
          fine-tuning to provide a seamless experience on all devices.
          Additionally, implementing efficient state management and avoiding
          unnecessary re-renders was crucial to keep the application performant
          and smooth.
          <br />
          <br />
          Looking ahead, I plan to enhance the project by integrating a backend
          to store and manage job data, user profiles, and authentication
          securely. I also aim to add new features like user reviews, ratings,
          and messaging to improve interaction between freelancers and clients.
          Further improvements include implementing advanced filters and search
          functionalities for better job discovery, adding animations and
          micro-interactions for a more engaging user experience, and optimizing
          performance for larger data sets while improving SEO for better
          discoverability.
            </p>
        
      </div>
    );
};

export default DragonNews;