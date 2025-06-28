import React from 'react';
import { FcFlashAuto } from 'react-icons/fc';
import { MdCancel } from 'react-icons/md';
import { Link } from 'react-router';

const BulkaBazar = () => {
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
            src="https://i.ibb.co/pB7Br43D/Screenshot-from-2025-06-28-17-27-59.png"
            alt="Bulka Bazar - Your Online Grocery Store"
          />
        </div>
        <small className="text-[12px] text-gray-400 my-4">
          August 17, 2025
        </small>
        <h3 className="text-2xl font-semibold mb-6">
          Bulka Bazar - Your Online Grocery Store
        </h3>
        <p className="text-[18px] text-gray-700 mb-6">
          <strong>Main Technology Stack Used</strong> <br />
          This project has been developed using a modern MERN stack
          architecture, combining React.js for building a dynamic and responsive
          frontend along with Tailwind CSS and DaisyUI for designing sleek,
          customizable user interfaces. React Router ensures smooth client-side
          navigation, while React Hook Form and Framer Motion enhance form
          handling and UI animations respectively. The backend is powered by
          Node.js, Express.js, and MongoDB, where MongoDB serves as the database
          for storing product and user data. Authentication and security are
          implemented via Firebase Authentication and JWT (JSON Web Token) for
          protected routes and secure user sessions. Additional technologies
          used include Axios for API communication, Swiper JS for creating
          sliders, React Icons for UI icons, and environment variables for
          safely managing sensitive configuration like Firebase and MongoDB
          credentials. Tools like SweetAlert or toast notifications are
          integrated to provide user feedback during CRUD operations, and the
          platform is fully responsive across devices.
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
          Bulka Bazar is a comprehensive e-commerce platform designed to
          revolutionize the online grocery shopping experience. It allows users
          to browse a wide range of grocery products, add items to their cart,
          and securely checkout with ease. The platform features a user-friendly
          interface, advanced search capabilities, and personalized product
          recommendations based on user preferences. With a focus on speed and
          efficiency, Bulka Bazar aims to provide a seamless shopping experience
          for customers while offering robust management tools for vendors.
        </p>
        <h1 className="text-2xl font-bold my-6">
          Live Project Link :{" "}
          <a
            href="https://assignment-11-f22d8.web.app/"
            target="_blank"
            className="text-blue-700"
          >
            Live Demo
          </a>
        </h1>
        <h1 className="text-2xl font-bold my-6">
          GitHub Repository Link :{" "}
          <a
            href="https://github.com/rifat-hasan121/Bulka-Bazzar"
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

export default BulkaBazar;