
import React from 'react';
import { PiTimer } from 'react-icons/pi';
import { Link } from 'react-router';

const MyBlogs = () => {
    return (
      <div className="mb-32">
        <div className="text-center my-12">
          <small className="text-green-500">
            VISIT MY BLOG AND KEEP YOUR FEEDBACkK
          </small>
          <h3 className="text-2xl sm:text-3xl md:text-6xl gradient-text font-bold mb-4">
            My <span className="text-green-500">Blog</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link to="/development">
            <div className="max-w-sm mx-auto bg-gray-900 text-white rounded-2xl shadow-lg pb-12 overflow-hidden transition hover:shadow-xl hover:text-green-500">
              <img
                src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/marketing-young-cute-business-lady-striped-shirt-office-showing-raising-results-1-340x250.jpg" // Replace with actual image path or use an import
                alt="Market Research"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="text-green-500 font-semibold uppercase">
                    Development
                  </span>
                  <span className="flex items-center gap-1">
                    <PiTimer />4 min read
                  </span>
                </div>
                <h2 className="text-lg mt-4 font-semibold leading-tight">
                  The Best Ways to Do Market Research For Your Business Plan.
                </h2>
              </div>
            </div>
          </Link>

          <Link to="/quote">
            <div className="max-w-sm mx-auto bg-gray-900 text-white rounded-2xl shadow-lg pb-12 overflow-hidden transition hover:shadow-xl hover:text-green-500">
              <img
                src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/pretty-curly-young-woman-writing-notes-startup-project-340x250.jpg"
                alt="Market Research"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="text-green-500 font-semibold uppercase">
                    QUOTE
                  </span>
                  <span className="flex items-center gap-1">
                    <PiTimer />5 min read
                  </span>
                </div>
                <h2 className="text-lg mt-4 font-semibold leading-tight">
                  The Easiest Way to Become a Successful Writer and Authors.
                </h2>
              </div>
            </div>
          </Link>

          <Link to="/technician">
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
                    <PiTimer />4 min read
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

export default MyBlogs;