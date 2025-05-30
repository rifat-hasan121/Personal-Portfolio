import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router';

const MyProjects = () => {
    return (
      <div className="my-28">
        <div className="text-center my-12">
          <small className="text-green-500">
            VISIT MY PROJECTS AND KEEP YOUR FEEDBACK
          </small>
          <h3 className="text-2xl sm:text-3xl md:text-6xl font-bold">
            My <span className="text-green-500">Projects</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
          <Link to="/development">
            <div className="max-w-sm mx-auto bg-gray-900 text-white rounded-2xl shadow-lg pb-12 overflow-hidden transition hover:shadow-xl hover:text-green-500">
              <img
                src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-01-340x250.jpg"
                alt="Market Research"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="text-green-500 font-semibold uppercase">
                    TECHNICIAN
                  </span>
                  <span className="flex items-center gap-1">
                    <CiHeart />
                    3233
                  </span>
                </div>
                <h2 className="text-lg mt-4 font-semibold leading-tight">
                  The Quickest Way to Deliver Your Message? Make It Visual.
                </h2>
              </div>
            </div>
          </Link>
          <Link to="/development">
            <div className="max-w-sm mx-auto bg-gray-900 text-white rounded-2xl shadow-lg pb-12 overflow-hidden transition hover:shadow-xl hover:text-green-500">
              <img
                src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/road-sign-direction-perforated-paper-arrow-340x250.jpg"
                alt="Market Research"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="text-green-500 font-semibold uppercase">
                    TECHNICIAN
                  </span>
                  <span className="flex items-center gap-1">
                    <CiHeart />
                    5300
                  </span>
                </div>
                <h2 className="text-lg mt-4 font-semibold leading-tight">
                  The Quickest Way to Deliver Your Message? Make It Visual.
                </h2>
              </div>
            </div>
          </Link>
          <Link to="/development">
            <div className="max-w-sm mx-auto bg-gray-900 text-white rounded-2xl shadow-lg pb-12 overflow-hidden transition hover:shadow-xl hover:text-green-500">
              <img
                src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-06-340x250.jpg"
                alt="Market Research"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="text-green-500 font-semibold uppercase">
                    TECHNICIAN
                  </span>
                  <span className="flex items-center gap-1">
                    <CiHeart />
                    2334
                  </span>
                </div>
                <h2 className="text-lg mt-4 font-semibold leading-tight">
                  The Quickest Way to Deliver Your Message? Make It Visual.
                </h2>
              </div>
            </div>
          </Link>
          <Link to="/development">
            <div className="max-w-sm mx-auto bg-gray-900 text-white rounded-2xl shadow-lg pb-12 overflow-hidden transition hover:shadow-xl hover:text-green-500">
              <img
                src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-05-340x250.jpg"
                alt="Market Research"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="text-green-500 font-semibold uppercase">
                    TECHNICIAN
                  </span>
                  <span className="flex items-center gap-1">
                    <CiHeart />
                    6500
                  </span>
                </div>
                <h2 className="text-lg mt-4 font-semibold leading-tight">
                  The Quickest Way to Deliver Your Message? Make It Visual.
                </h2>
              </div>
            </div>
          </Link>
          <Link to="/development">
            <div className="max-w-sm mx-auto bg-gray-900 text-white rounded-2xl shadow-lg pb-12 overflow-hidden transition hover:shadow-xl hover:text-green-500">
              <img
                src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-04-340x250.jpg"
                alt="Market Research"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="text-green-500 font-semibold uppercase">
                    TECHNICIAN
                  </span>
                  <span className="flex items-center gap-1">
                    <CiHeart />
                    1230
                  </span>
                </div>
                <h2 className="text-lg mt-4 font-semibold leading-tight">
                  The Quickest Way to Deliver Your Message? Make It Visual.
                </h2>
              </div>
            </div>
          </Link>
          <Link to="/development">
            <div className="max-w-sm mx-auto bg-gray-900 text-white rounded-2xl shadow-lg pb-12 overflow-hidden transition hover:shadow-xl hover:text-green-500">
              <img
                src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-03-340x250.jpg"
                alt="Market Research"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="text-green-500 font-semibold uppercase">
                    TECHNICIAN
                  </span>
                  <span className="flex items-center gap-1">
                    <CiHeart />
                    2309
                  </span>
                </div>
                <h2 className="text-lg mt-4 font-semibold leading-tight">
                  The Quickest Way to Deliver Your Message? Make It Visual.
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
};

export default MyProjects;