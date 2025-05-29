import React from 'react';

const Navbar = () => {
    return (
      <div>
        <nav className="flex justify-between items-center px-6 py-4 bg-transparent fixed top-0 left-0 right-0">
          <div className="flex items-center space-x-2">
            <span className="text-green-400">Rifat</span>
            <span className="font-bold">Hasan</span>
            <span className="text-yellow-400">☀</span>
          </div>

          <div>
            <ul className="hidden lg:flex space-x-6 text-sm">
              <li className="hover:text-green-400 cursor-pointer">Home</li>
              <li className="hover:text-green-400 cursor-pointer">Feature</li>
              <li className="hover:text-green-400 cursor-pointer">Resume</li>
              <li className="hover:text-green-400 cursor-pointer">Works</li>
              <li className="hover:text-green-400 cursor-pointer">Blog</li>
              <li className="hover:text-green-400 cursor-pointer">Contacts</li>
              <li className="hover:text-green-400 cursor-pointer">Shop</li>
              <li className="hover:text-green-400 cursor-pointer">
                Light Version
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
};

export default Navbar;