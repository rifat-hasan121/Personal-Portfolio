import React, { useState } from "react";
import "./HoverUnderlineList.css";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router";

const Navbar = ({ onScrollTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (section) => {
    onScrollTo(section);
    setMenuOpen(false);
  };

  return (
    <div className="relative z-50">
      <nav className="flex justify-between items-center px-6 py-4 bg-transparent">
        {/* Logo */}
        <div className="flex items-center space-x-2 md:text-2xl">
          <span className="text-green-400">Rifat</span>
          <span className="font-bold">Hasan</span>
          <span className="text-yellow-400">☀</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-sm">
          <li onClick={() => handleScroll("hero")} className="hover-underline text-green-500">
             Home
          </li>

          <li
            onClick={() => handleScroll("feature")}
            className="hover-underline text-green-500"
          >
           
            Feature
          </li>
          <li
            onClick={() => handleScroll("services")}
            className="hover-underline text-green-500"
          >
            Services
          </li>
          <li
            onClick={() => handleScroll("resume")}
            className="hover-underline text-green-500"
          >
            Resume
          </li>
          <li onClick={() => handleScroll("blogs")} className="hover-underline text-green-500">
            Blogs
          </li>
          <li
            onClick={() => handleScroll("contact")}
            className="hover-underline text-green-500"
          >
            Contact
          </li>
        </ul>

        {/* Mobile Icon with animation */}
        <div className="lg:hidden">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            initial={{ rotate: 0 }}
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                >
                  <HiX size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                >
                  <HiMenu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu with animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden flex flex-col bg-transparent backdrop-blur-sm text-white px-6 py-4 space-y-4 absolute top-16 left-0 right-0 shadow-md"
          >
            <li
              onClick={() => handleScroll("hero")}
              className="hover-underline"
            >
              Home
            </li>
            <li
              onClick={() => handleScroll("feature")}
              className="hover-underline"
            >
              Feature
            </li>
            <li
              onClick={() => handleScroll("services")}
              className="hover-underline"
            >
              Services
            </li>
            <li
              onClick={() => handleScroll("resume")}
              className="hover-underline"
            >
              Resume
            </li>
            <li
              onClick={() => handleScroll("blogs")}
              className="hover-underline"
            >
              Blogs
            </li>
            <li
              onClick={() => handleScroll("contact")}
              className="hover-underline"
            >
              Contact
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
