

import React, { useRef, useState } from "react";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { useInView, motion } from "framer-motion"; // eslint-disable-line no-unused-vars

const MyProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedFilter, setSelectedFilter] = useState("All");

  // projects
  // will connect to the server soon
  const projects = [
    {
      id: 1,
      title: "Bulk Bazar – A Full-Stack Restaurant Management App",
      description:
        "Bulk Bazar is a comprehensive restaurant management application that allows users to create accounts, manage their restaurant profiles, and post menus. Customers can browse available restaurants, view their menus, and place orders. The app features a user-friendly interface with authentication, JWT for secure access, and a responsive design.",
      image:
        "https://i.ibb.co/pB7Br43D/Screenshot-from-2025-06-28-17-27-59.png",
      category: "Full Stack",
      tech: ["React", "Tailwind", "Node.js", "MongoDB", "Express", "JWT"],
      github: "https://github.com/rifat-hasan121/Bulka-Bazzar",
      live: "https://assignment-11-f22d8.web.app/",
      date: "2025-05-26",
    },
    {
      id: 2,
      title: "Quick Hunt - A Full-Stack task management web application",
      description:
        "Quick Hunt is a full-stack task management web application that allows users to create accounts, manage their tasks, and collaborate with others. Users can create, update, and delete tasks, set deadlines, and track progress. The app features a modern design with authentication, JWT for secure access, and a responsive layout.",
      image:
        "https://i.ibb.co/FqhD25d2/Screenshot-from-2025-06-28-17-02-51.png",
      category: "Full Stack",
      tech: ["React", "Tailwind", "Firebase", "Express", "Node.JS"],
      github: "https://github.com/rifat-hasan121/Quick-Hunt",
      live: "https://freelance-task-marketplace.web.app/",
      date: "2025-5-02",
    },
    {
      id: 3,
      title: "Dragon News - A News Portal",
      description:
        "Dragon News is a news portal that provides users with the latest news articles from various categories. Users can browse articles, read detailed content, and filter news by category. The app features a clean design with responsive layouts, making it easy to access news on any device.",
      image:
        "https://i.ibb.co/Nn18J8fb/Screenshot-from-2025-06-28-17-48-36.png",
      category: "Frontend",
      tech: ["React", "Tailwind", "Javascript"],
      github: "https://github.com/rifat-hasan121/dragon-news-web",
      live: "https://the-dragon-news-2c592.web.app/category/01",
      date: "2025-04-21",
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="pb-32 px-4 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold gradient-text mb-6">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00c951] to-[#0d592b] mx-auto mb-8"></div>
          <p className="text-xl text-[#ffebf3]/80 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of full-stack applications and frontend
            projects that showcase my expertise in modern web development
            technologies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedFilter === category
                  ? "bg-[#0d592b] text-[#ffebf3]"
                  : "glass-effect text-[#ffebf3]/70 hover:text-[#00c951] hover:bg-[#00c951]/10"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden hover:bg-[#00c951]/5 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-[#00c951]/90 text-[#ffebf3] px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-display font-bold text-[#ffebf3] group-hover:text-[#00c951] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-[#ffebf3]/60 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {new Date(project.date).toLocaleDateString()}
                  </div>
                </div>

                <p className="text-[#ffebf3]/80 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#1c1c1c]/50 rounded-full text-sm text-[#ffebf3]/70 border border-text/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <motion.a
                    href={project.github}
                    target="_black"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-lg hover:bg-[#00c951]/20 transition-all duration-200"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_black"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-[#00c951] hover:bg-[#00c951]/90 text-[#ffebf3] rounded-lg transition-all duration-200"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MyProjects;