import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import Feature from "../Components/Feature";
import Resume from "../Components/Resume";
import MyBlogs from "../Components/MyBlogs";
import MyProjects from "../Components/MyProjects";
import ContactCard from "../Components/ContactCard";
import ScrollToTopButton from "../Components/ScrollToTopButton";
import ClickSoundToggle from "../Components/ClickSoundToggle";
import clickSoundFile from "../assets/click.mp3"; // 

const RootPages = () => {
  const heroRef = useRef(null);
  const featureRef = useRef(null);
  const servicesRef = useRef(null);
  const resumeRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  // ✅ সাউন্ড অন/অফ করার state
  const [soundEnabled, setSoundEnabled] = useState(true);
  const clickSound = useRef(new Audio(clickSoundFile));

  // ✅ ক্লিক সাউন্ড বাজানো ফাংশন
  const playClickSound = () => {
    if (soundEnabled) {
      clickSound.current.currentTime = 0;
      clickSound.current.play();
    }
  };

  // ✅ Scroll ফাংশন
  const scrollToSection = (section) => {
    playClickSound();
    section.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-11/12 mx-auto">
      <Navbar
        onScrollTo={(sectionName) => {
          if (sectionName === "hero") scrollToSection(heroRef);
          else if (sectionName === "feature") scrollToSection(featureRef);
          else if (sectionName === "services") scrollToSection(servicesRef);
          else if (sectionName === "resume") scrollToSection(resumeRef);
          else if (sectionName === "blogs") scrollToSection(blogsRef);
          else if (sectionName === "contact") scrollToSection(contactRef);
        }}
      />
      <div ref={heroRef}>
        <Home />
      </div>
      <div ref={featureRef}>
        <Feature />
      </div>
      <div ref={servicesRef}>
        <MyProjects />
      </div>
      <div ref={resumeRef}>
        <Resume />
      </div>
      <div ref={blogsRef}>
        <MyBlogs />
      </div>
      <div ref={contactRef}>
        <ContactCard />
      </div>
      <ClickSoundToggle onToggle={setSoundEnabled} />
      <ScrollToTopButton />
    </div>
  );
};

export default RootPages;
