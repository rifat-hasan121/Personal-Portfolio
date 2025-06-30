import { useState } from "react";

const TimelineItem = ({ title, institute, description, grade }) => {
  return (
    <div className="relative flex mb-12">
      {/* Left vertical branch and dot */}
      <div className="relative flex flex-col items-center w-14">
        {/* upper vertical line */}
        <div className="flex-1 w-px bg-green-400"></div>

        {/* dot */}
        <div className="w-4 h-4 rounded-full border-2 border-green-400 bg-white hover:bg-green-400 transition-colors duration-300"></div>

        {/* lower vertical line */}
        <div className="flex-1 w-px bg-green-400"></div>
      </div>

      {/* horizontal connector and content */}
      <div className="flex items-center w-full">
        {/* horizontal connector */}
        <div className="w-10 h-px bg-green-400"></div>

        {/* content box */}
        <div className="ml-4 bg-[#0f1520] p-5 rounded-lg shadow-lg w-full">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">{title}</h3>
            {grade && (
              <span className="text-green-400 font-bold text-lg">{grade}</span>
            )}
          </div>
          {institute && (
            <p className="text-gray-400 text-sm mt-1">{institute}</p>
          )}
          <p className="mt-3 text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Timeline = ({ children }) => {
  return (
    <div className="relative ml-8">
      {/* Main vertical line */}
      <div className="absolute top-0 left-3 w-px h-full bg-green-400"></div>
      <div>{children}</div>
    </div>
  );
};

const MyResume = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabData = {
    education: (
      <Timeline>
        <TimelineItem
          title="SSC in Science"
          institute="Moulovi Nogor High School (2023 - 2024)"
          grade="4.94/5"
          description="The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
        />
        <TimelineItem
          title="Diploma in Engineering (CST)"
          institute="Mymensingh Polytechnic Institute (2024 - Running)"
          description="The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante."
        />
      </Timeline>
    ),
    skills: (
      <Timeline>
        <TimelineItem
          title="HTML & CSS"
          description="Expert in building modern, responsive layouts."
        />
        <TimelineItem
          title="JavaScript"
          description="Strong knowledge of ES6+, DOM manipulation, and APIs."
        />
        <TimelineItem
          title="React"
          description="Experience with component-based development and state management."
        />
      </Timeline>
    ),
    experience: (
      <Timeline>
        <TimelineItem
          title="Frontend Developer"
          institute="Freelance (2023 - Present)"
          description="Worked on multiple client projects building responsive web apps using HTML, CSS, JavaScript, and React."
        />
      </Timeline>
    ),
    interview: (
      <Timeline>
        <TimelineItem
          title="Interview Preparation"
          description="Practiced Data Structures, Algorithms, and soft skills to excel in technical interviews."
        />
      </Timeline>
    ),
  };

  const tabs = [
    { key: "education", label: "Education" },
    { key: "skills", label: "Professional Skills" },
    { key: "experience", label: "Experience" },
    { key: "interview", label: "Interview" },
  ];

  return (
    <div className="min-h-screen  text-white py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <small className="text-green-500">1 YEAR+ ESPERANCE</small>
        <h3 className="text-2xl sm:text-3xl md:text-6xl font-bold">
          My <span className="text-green-500">Resume</span>
        </h3>
      </div>

      {/* Tabs */}
      <nav className="flex justify-center space-x-8 py-4 ">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`text-green-400 py-2 border-b-2 ${
              activeTab === tab.key
                ? "border-green-400"
                : "border-transparent hover:border-green-400"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 mt-10">{tabData[activeTab]}</div>
    </div>
  );
};

export default MyResume;
