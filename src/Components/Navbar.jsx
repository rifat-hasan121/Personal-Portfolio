import React, { useState, useEffect } from "react";
import "./HoverUnderlineList.css";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ onScrollTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (section) => {
    onScrollTo(section);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const currentY = window.scrollY;

      setIsScrolled(currentY > 10); // show blur when scrolling
      setScrollingDown(currentY > scrollY);
      setScrollY(currentY);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, [scrollY]);

  return (
    <div className="relative z-50">
      <nav
        className={`flex justify-between items-center px-6 py-4 fixed top-0 right-0 left-0 transition-all duration-300 ease-in-out ${
          isScrolled ? "backdrop-blur-xl bg-white/10" : ""
        } ${scrollingDown ? "-translate-y-full" : "translate-y-0"} z-50`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2 md:text-2xl font-bold">
          <span className="text-green-400">Rifat</span>
          <span className="font-bold">Hasan</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-sm text-green-500">
          {["hero", "feature", "services", "resume", "blogs", "contact"].map(
            (item) => (
              <li
                key={item}
                onClick={() => handleScroll(item)}
                className="hover-underline cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            )
          )}
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

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden flex flex-col bg-white/10 backdrop-blur-md text-white px-6 py-4 space-y-4 absolute top-16 left-0 right-0 shadow-md"
          >
            {["hero", "feature", "services", "resume", "blogs", "contact"].map(
              (item) => (
                <li
                  key={item}
                  onClick={() => handleScroll(item)}
                  className="hover-underline cursor-pointer"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </li>
              )
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
