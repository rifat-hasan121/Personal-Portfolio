import React from "react";
import "./styles.css";
import {  Cursor } from "react-simple-typewriter";
import { TypeAnimation } from "react-type-animation";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronDown,
  Code2,
  Target,
} from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";

import FuzzyOverlayExample from "./FuzzyOverlayExample";
import { motion } from "framer-motion";
import CustomCursor from "./CustomCursor";
import { BiLogoGmail } from "react-icons/bi";
import { MdPhone } from "react-icons/md";
import CanvasCursor from "./CanvasCursor";

// Custom Typewriter component
// const TypewriterWithColoredLastWord = ({ words, ...options }) => {
//   const [text] = useTypewriter({
//     words,
//     ...options,
//   });

  
 

//   const wordsArray = text.split(" ");
//   const lastWord = wordsArray.pop();
//   const remainingText = wordsArray.join(" ");

//   return (
//     <h1 className="text-center text-3xl sm:text-4xl md:text-6xl font-bold">
//       {remainingText && <span>{remainingText} </span>}
//       <span className="text-green-500">{lastWord}</span>
//       <Cursor />
//     </h1>
//   );
// };

const Home = () => {
  const typewriter = {
    words: [
      "I am a Frontend Developer.",
      "I Code Cool Website!",
      "I Love Codding!",
    ],
    loop: true,
    cursor: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  };


  return (
    <div className="min-h-screen flex flex-col justify-center px-4 md:px-8 relative">
      <CustomCursor></CustomCursor>
      {/* <CanvasCursor></CanvasCursor> */}

      <div>
        {/* Grid layout with image and text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center overflow-hidden mb-8 -z-50">
          {/* Image Section */}
          <div className="relative w-[360px] h-[500px] md:w-[620px] md:h-[602px] lg:w-[794px] lg:h-[735px] overflow-hidden">
            <div className="absolute inset-0 transform -rotate-6 clip-custom">
              <div className="w-full h-full bg-[url('https://i.ibb.co/8gF60LMm/android-chrome-512x512.png')] bg-no-repeat bg-center bg-cover"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="max-w-xl space-y-10">
            {/* <FuzzyOverlayExample></FuzzyOverlayExample> */}
            {/* <h1 className="text-xl font-semibold leading-snug">
              Hello, I’m <span className="text-green-500">Rifat Hasan</span>,
              Front-end Developer Based in Bangladesh.
            </h1> */}
            <motion.p
              className="text-lg font-mono text-green-500 font-medium tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {"<"} Hello World {"/>"}
            </motion.p>
            {/* Main heading with staggered blur */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                <span className="gradient-text">Hi, I'm</span>
              </h1>
              <h1 className="text-6xl lg:text-8xl font-display font-bold leading-tight text-[#ffebf3]">
                Rifat <span className="text-green-900">Hasan</span>
              </h1>
              {/* Animated role with blur effect */}
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-2xl lg:text-4xl font-medium mb-4"
              >
                <TypeAnimation
                  sequence={[
                    "MERN Stack Developer",
                    2000,
                    "Front-End Developer",
                    2000,
                    "React.js Specialist",
                    2000,
                    "Node.js Developer",
                    2000,
                    "UI/UX Enthusiast",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="gradient-text font-display"
                />
              </motion.div>

              {/* Description with blur hover */}
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 1 }}
                className="space-y-4"
              >
                <p className="text-lg text-[#ffebf3]/80 leading-relaxed max-w-xl blur-text-hover">
                  Passionate about crafting modern, responsive web applications
                  that blend clean code with engaging user experiences.
                </p>
                <p className="text-base text-[#ffebf3]/70 leading-relaxed max-w-xl blur-text-hover">
                  Specialized in{" "}
                  <span className="font-mono text-primary">React.js</span>,
                  <span className="font-mono text-primary"> Node.js</span>,
                  <span className="font-mono text-primary"> MongoDB</span>, and
                  <span className="font-mono text-primary">
                    {" "}
                    Express.js
                  </span>{" "}
                  with advanced animations.
                </p>
              </motion.div>
              {/* Social Links with enhanced effects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex space-x-6 my-4"
              >
                <motion.a
                  href="https://github.com/rifat-hasan121"
                  target="_blank"
                  whileHover={{ scale: 1.2, y: -8, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 rounded-2xl glass-card bg-[rgba(255, 235, 243, 0.02)] hover:bg-[#00c951]/10 transition-all duration-300 group card-hover"
                >
                  <BsGithub size={38} style={{ color: "#00c951" }} />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/md-rifat-hasan-46256b325/"
                  target="_blank"
                  whileHover={{ scale: 1.2, y: -8, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 rounded-2xl glass-card bg-[rgba(255, 235, 243, 0.02)] hover:bg-[#00c951]/10 transition-all duration-300 group card-hover"
                >
                  <FaLinkedin size={38} style={{ color: "#00c951" }} />
                </motion.a>

                <motion.a
                  href="mailto:rifathasannetrakona@gmail.com"
                  whileHover={{ scale: 1.2, y: -8, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 rounded-2xl glass-card bg-[rgba(255, 235, 243, 0.02)] hover:bg-[#00c951]/10 transition-all duration-300 group card-hover"
                >
                  <IoMdMailUnread size={38} style={{ color: "#00c951" }} />
                </motion.a>
              </motion.div>
              {/* CTA Buttons with enhanced styling */}
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 btn-primary rounded-2xl font-medium transition-all duration-300 flex items-center justify-center space-x-3 animate-glow group mt-4"
                >
                  <span className="font-bold text-primary">View My Work</span>
                  <ChevronDown
                    size={20}
                    style={{ color: "#00c951" }}
                    className="group-hover:translate-y-1 transition-transform"
                  />
                </motion.a>

                <motion.a
                  href="https://docs.google.com/document/d/1UGqyOUu1-76uzW56l7g0FDH2b0USkVrXb9XoMJMNH_4/edit?usp=sharing"
                  target="_blank"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 glass-card hover:bg-text/5 text-[#ffebf3] rounded-2xl font-medium transition-all duration-300 flex items-center justify-center space-x-3 card-hover group mt-4"
                >
                  <Download
                    size={20}
                    style={{ color: "#00c951" }}
                    className="group-hover:translate-y-1 transition-transform"
                  />
                  <span className="font-display text-primary">Download CV</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Contact Info & Typewriter */}
        <div className="flex flex-wrap gap-4 sm:gap-8 md:gap-32 items-center -z-50">
          <p className="text-[14px] w-fit text-center md:text-left">
            <div className="flex gap-2 items-center">
              <div>
                <BiLogoGmail />
              </div>
              <div>
                <a
                  href="mailto:rifathasannetrakona@gmail.com"
                  target="_blank"
                  className="hover:text-green-500"
                >
                  rifathasannetrakona@gmail.com
                </a>
              </div>
            </div>
            <br />

            <div className="flex gap-2 items-center">
              <div>
                <MdPhone />
              </div>
              <div>
                <a href="tel:+8801602944969" className="hover:text-green-500">
                  +8801602944969
                </a>
              </div>
            </div>
          </p>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center space-y-2"
            >
              <div className="w-6 h-10 border-2 border-text/20 rounded-full flex justify-center relative overflow-hidden">
                <motion.div
                  className="w-1 h-3 bg-[#00c951] rounded-full mt-2"
                  animate={{ y: [0, 16, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <p className="text-xs text-[#ffebf3]/50 font-mono">scroll</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Fixed Social Bar (only appears on this component) */}
      <div className="fixed right-0 top-3/4 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-50">
        <div className="rotate-90 text-white text-sm tracking-widest mb-4">
          Follow Me
        </div>
        <div className="w-px h-16 bg-white my-6" />
        <a
          href="https://www.linkedin.com/in/md-rifat-hasan-46256b325/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-500 hover:cursor-pointer"
        >
          <FaLinkedinIn size={18} />
        </a>
        <a
          href="https://www.facebook.com/rabularafatpappu.pappu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-700 hover:cursor-pointer"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href="https://www.instagram.com/rifat_hasan_9999/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-500 hover:cursor-pointer"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href="https://x.com/rifathasan1211"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 hover:cursor-pointer"
        >
          <FaXTwitter size={18} />
        </a>
      </div>
    </div>
  );
};

export default Home;
