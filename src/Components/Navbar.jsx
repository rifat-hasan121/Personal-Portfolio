import React from 'react';



const Navbar = () => {

  
    return (
      <div>
        <nav className="flex justify-between items-center px-6 py-4 bg-transparent fixed backdrop-blur-xl top-0 left-0 right-0">
          <div className="flex items-center space-x-2">
            <span className="text-green-400">Rifat</span>
            <span className="font-bold">Hasan</span>
            <span className="text-yellow-400">☀</span>
          </div>

          <div>
            <ul className="hidden lg:flex space-x-6 text-sm">
           <li>Home</li>
           <li>Feature</li>
           <li>Skills</li>
           <li>Resume</li>
           <li>Blogs</li>
            </ul>
          </div>
        </nav>
      </div>
    );
};

export default Navbar;