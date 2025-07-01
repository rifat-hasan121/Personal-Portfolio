import { FaCode, FaMobileScreenButton } from "react-icons/fa6";
import { FiMousePointer } from "react-icons/fi";
import { GrUpdate } from "react-icons/gr";
import { ImHeadphones } from "react-icons/im";
import { IoReloadOutline, IoSettingsSharp } from "react-icons/io5";
import { LuPenLine } from "react-icons/lu";
import { RiAppsLine, RiPagesFill } from "react-icons/ri";
import { RxText } from "react-icons/rx";
import { TbEaseInOutControlPoints } from "react-icons/tb";

const Feature = () => {
  return (
    <div className="py-32">
      <div className="text-center">
        {" "}
        <small className="text-green-500">MY INBIO FEATURE</small>
        <h3 className="text-2xl sm:text-3xl gradient-text md:text-6xl font-bold mb-4">
          Awesome <span className="">Feature</span>
        </h3>
      </div>
      {/* card div */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12 ">
        <div className="bg-[#1d232a] shadow-2xl shadow-gray-800 px-6 py-10 rounded-sm space-y-3 transition-all duration-300 delay-100 hover:saturate-150">
          <RiPagesFill size={55} style={{ color: "#00c951" }} />
          <h3 className="text-2xl font-semibold">Elementor Page Builder</h3>
          <p className="text-sm text-slate-400">
            Elementor is the best FREE WordPress Website Builder, Create
            beautiful sites and pages using a drag and drop interface.
          </p>
        </div>
        <div className="bg-[#1d232a] shadow-2xl shadow-gray-800 px-6 py-10 rounded-sm space-y-3 transition-all duration-300 delay-100 hover:saturate-150">
          <IoSettingsSharp size={55} style={{ color: "#00c951" }} />
          <h3 className="text-2xl font-semibold">Power Full Theme Options</h3>
          <p className="text-sm text-slate-400">
            Redux Framework has been built from the ground up to be the most
            flexible framework around.
          </p>
        </div>
        <div className="bg-[#1d232a] shadow-2xl shadow-gray-800 px-6 py-10 rounded-sm space-y-3 transition-all duration-300 delay-100 hover:saturate-150">
          <FiMousePointer size={55} style={{ color: "#00c951" }} />
          <h3 className="text-2xl font-semibold">
            Full demo with One Click Installation
          </h3>
          <p className="text-sm text-slate-400">
            Do more with just one click install demo or update your theme.
          </p>
        </div>
        <div className="bg-[#1d232a] shadow-2xl shadow-gray-800 px-6 py-10 rounded-sm space-y-3 transition-all duration-300 delay-100 hover:saturate-150">
          <LuPenLine size={55} style={{ color: "#00c951" }} />
          <h3 className="text-2xl font-semibold">Gutenberg Capabilities</h3>
          <p className="text-sm text-slate-400">
            Gutenberg is a codename for a whole new paradigm in WordPress site
            building and publishing, that aims to revolutionize...
          </p>
        </div>
        <div className="bg-[#1d232a] shadow-2xl shadow-gray-800 px-6 py-10 rounded-sm space-y-3 transition-all duration-300 delay-100 hover:saturate-150">
          <FaMobileScreenButton size={55} style={{ color: "#00c951" }} />
          <h3 className="text-2xl font-semibold">Responsive Ready</h3>
          <p className="text-sm text-slate-400">
            Inbio site will always looks cool and great on any mobile device or
            bvrowsers.
          </p>
        </div>
        <div className="bg-[#1d232a] shadow-2xl shadow-gray-800 px-6 py-10 rounded-sm space-y-3 transition-all duration-300 delay-100 hover:saturate-150">
          <FaCode size={55} style={{ color: "#00c951" }} />
          <h3 className="text-2xl font-semibold">Well Documented Codes</h3>
          <p className="text-sm text-slate-400">
            The Inbio code is awesome well documented code. And Its
            customization is very easily
          </p>
        </div>
        <div className="bg-[#1d232a] shadow-2xl shadow-gray-800 px-6 py-10 rounded-sm space-y-3 transition-all duration-300 delay-100 hover:saturate-150">
          <TbEaseInOutControlPoints size={55} style={{ color: "#00c951" }} />
          <h3 className="text-2xl font-semibold">Unlimited Colors</h3>
          <p className="text-sm text-slate-400">
            Inbio comes with live color customizer. Just select your color and
            enjoy the magic.
          </p>
        </div>
        <div className="bg-[#1d232a] shadow-2xl shadow-gray-800 px-6 py-10 rounded-sm space-y-3 transition-all duration-300 delay-100 hover:saturate-150">
          <IoReloadOutline size={55} style={{ color: "#00c951" }} />
          <h3 className="text-2xl font-semibold">Fast Loading Speed</h3>
          <p className="text-sm text-slate-400">
            Inbio is faster loading speed. Inbio create your theme so much
            faster
          </p>
        </div>
        <div className="bg-[#1d232a] shadow-2xl shadow-gray-800 px-6 py-10 rounded-sm space-y-3 transition-all duration-300 delay-100 hover:saturate-150">
          <RiAppsLine size={55} style={{ color: "#00c951" }} />
          <h3 className="text-2xl font-semibold">SEO & SMM Friendly</h3>
          <p className="text-sm text-slate-400">
            Inbio can made it ranked first by search engines. Inbio optimized
            for search engines according to the latest SEO trends and guidelines
          </p>
        </div>
        <div className="bg-[#1d232a] shadow-2xl shadow-gray-800 px-6 py-10 rounded-sm space-y-3 transition-all duration-300 delay-100 hover:saturate-150">
          <RxText size={55} style={{ color: "#00c951" }} />
          <h3 className="text-2xl font-semibold">Google Font</h3>
          <p className="text-sm text-slate-400">
            A collection of Google fonts are integrated with the theme. You can
            use any of them that goes with your branding.
          </p>
        </div>
        <div className="bg-[#1d232a] shadow-2xl shadow-gray-800 px-6 py-10 rounded-sm space-y-3 transition-all duration-300 delay-100 hover:saturate-150">
          <GrUpdate size={55} style={{ color: "#00c951" }} />
          <h3 className="text-2xl font-semibold">Easy Lifetime Update</h3>
          <p className="text-sm text-slate-400">
            All users can receive updates for free and for life. Even manual
            update only takes one click for you.
          </p>
        </div>
        <div className="bg-[#1d232a] shadow-2xl shadow-gray-800 px-6 py-10 rounded-sm space-y-3 transition-all duration-300 delay-100 hover:saturate-150">
          <ImHeadphones size={55} style={{ color: "#00c951" }} />
          <h3 className="text-2xl font-semibold">Fast & Friendly Support</h3>
          <p className="text-sm text-slate-400">
            We are provide 24 hours support for all clients.You can purchase
            without hesitation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
