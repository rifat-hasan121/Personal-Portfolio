import React from "react";
import { motion } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router";

const FuzzyOverlayExample = () => {
  return (
    // NOTE: An overflow of hidden will be required on a wrapping
    // element to see expected results
    <div className="relative overflow-hidden">
      <ExampleContent />
      <FuzzyOverlay />
    </div>
  );
};

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        backgroundImage: 'url("https://www.hover.dev/black-noise.png")',
        // backgroundImage: 'url("/noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const ExampleContent = () => {
  return (
    <div className="relative grid rounded-sm place-content-center space-y-6 bg-neutral-950 p-8">
      <p className="text-center text-2xl sm:text-3xl md:text-6xl font-black text-neutral-50">
        Welcome to my Portfolio
      </p>
      <p className="text-center text-neutral-400">
        This is a basic example of my portfolio
      </p>
      <div className="flex items-center justify-center gap-3">
        <Link>
        <button className="text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors hover:bg-neutral-800">
          Projects
          </button>
          </Link>
        <a href="https://docs.google.com/document/d/1UGqyOUu1-76uzW56l7g0FDH2b0USkVrXb9XoMJMNH_4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="w-fit flex items-center gap-2 bg-green-500 md:px-4 md:py-2 md:font-semibold text-neutral-700 transition-colors hover:bg-green-300">
            <h2>My Resume</h2>
            <MdOutlineFileDownload size={28} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default FuzzyOverlayExample;
