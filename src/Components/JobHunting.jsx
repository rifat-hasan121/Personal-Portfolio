import React from 'react';
import { FcFlashAuto } from 'react-icons/fc';
import { MdCancel } from 'react-icons/md';
import { Link } from 'react-router';

const JobHunting = () => {
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
            src="https://i.ibb.co/FqhD25d2/Screenshot-from-2025-06-28-17-02-51.png"
            alt=""
          />
        </div>
        <small className="text-[12px] text-gray-400 my-4">
          August 17, 2025
        </small>
        <h3 className="text-2xl font-semibold mb-6">
          The Best Ways to Do Market Research For Your Business Plan.
        </h3>
        <p className="text-[18px] text-gray-700 mb-6">
          <strong>Main Technology Stack Used</strong> <br />
          React.js – For building fast, interactive UI and managing
          component-based architecture. Tailwind CSS – For creating modern,
          responsive, and utility-first designs quickly. DaisyUI – Provides
          pre-built components on top of Tailwind CSS, speeding up UI
          development. React Icons – Used for integrating various icons to
          enhance UI aesthetics. React Router – For implementing seamless
          navigation across different pages. Context API & Hooks – For state
          management and handling reusable logic.
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
          Freelancher Task Market Places is a modern web application designed
          for freelancers and clients to connect over various jobs and tasks.
          Users can browse job listings, post new tasks, and interact through a
          smooth, responsive interface. The project focuses on delivering a
          clean and user-friendly experience using the latest frontend
          technologies.
        </p>
        <h1 className="text-2xl font-bold my-6">
          Live Project Link :{" "}
          <a
            href="https://freelance-task-marketplace.web.app"
            target="_blank"
            className="text-blue-700"
          >
            Live Demo
          </a>
        </h1>
        <h1 className="text-2xl font-bold my-6">
          GitHub Repository Link :{" "}
          <a
            href="https://github.com/rifat-hasan121/Quick-Hunt"
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

export default JobHunting;