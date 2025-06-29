import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // Optional: FontAwesome icon

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-50 bg-green-500 text-white p-2 rounded-full shadow-lg transition-all duration-300 ${
        isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={27} className="text-xl" />
    </button>
  );
};

export default ScrollToTopButton;
