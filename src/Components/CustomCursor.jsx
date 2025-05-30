import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsLinkHovered(true);
    const handleMouseLeave = () => setIsLinkHovered(false);

    window.addEventListener("mousemove", moveCursor);

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 15,
        y: position.y - 15,
        width: isLinkHovered ? 60 : 50,
        height: isLinkHovered ? 60 : 50,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        borderRadius: "50%",
          backgroundColor: "rgb(0, 201, 81)",
        opacity:"30%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
