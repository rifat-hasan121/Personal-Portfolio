import React from "react";
import "./styles.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

// Custom Typewriter component
const TypewriterWithColoredLastWord = ({ words, ...options }) => {
  const [text] = useTypewriter({
    words,
    ...options,
  });

  const wordsArray = text.split(" ");
  const lastWord = wordsArray.pop();
  const remainingText = wordsArray.join(" ");

  return (
    <h1 className="text-center text-3xl sm:text-4xl md:text-6xl font-bold">
      {remainingText && <span>{remainingText} </span>}
      <span className="text-green-500">{lastWord}</span>
      <Cursor />
    </h1>
  );
};

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
      {/* Grid layout with image and text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end justify-center overflow-hidden mb-8">
        {/* Image Section */}
        <div className="relative w-[594px] h-[535px] md:w-[794px] md:h-[735px] overflow-hidden">
          <div className="absolute inset-0 transform -rotate-6 clip-custom">
            <div className="w-full h-full bg-[url('https://cvio.bslthemes.com/wp-content/uploads/2020/01/man-800x720.jpg')] bg-no-repeat bg-center bg-cover"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="max-w-xl">
          <h1 className="text-xl font-semibold leading-snug">
            Hello, I’m <span className="text-green-500">Rifat Hasan</span>,
            Front-end Developer Based in Bangladesh.
          </h1>
        </div>
      </div>

      {/* Contact Info & Typewriter */}
      <div className="flex flex-wrap gap-4 sm:gap-8 md:gap-32 items-center">
        <p className="text-[14px] w-fit text-center md:text-left">
          E: rifathasannetrakona@gmail.com <br />
          T: +8801602944969
        </p>
        <TypewriterWithColoredLastWord {...typewriter} />
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
