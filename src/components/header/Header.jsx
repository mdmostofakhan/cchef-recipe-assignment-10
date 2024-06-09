import React, { useEffect } from "react";
import { FaRestroom } from "react-icons/fa";

const Header = () => {
  useEffect(() => {
    document.title = "Chef Recipe"; // Set the website title
  }, []);

  return (
    <header className="bg-black h-20 px-6 md:px-12 lg:px-20 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className="text-4xl italic text-sky-500">Chef Recipe</span>
        <FaRestroom className="text-rose-700 text-4xl" />
      </div>

      <nav className="hidden md:flex items-center space-x-20">
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="text-white text-xl hover:underline decoration-sky-600 underline-offset-8">
              Home
            </a>
          </li>
          <li>
            <a href="#blog" className="text-white text-xl hover:underline decoration-sky-600 underline-offset-8">
              Blog
            </a>
          </li>
          <li>
            <a href="#mens" className="text-white text-xl hover:underline decoration-sky-600 underline-offset-8">
              Mens
            </a>
          </li>
        </ul>
        <button className="text-white rounded-md hover:bg-sky-500 hover:text-red-600 text-xl border w-auto px-4 py-2">
          Sign In
        </button>
      </nav>

      <div className="md:hidden">
        {/* Mobile menu button can go here */}
      </div>
    </header>
  );
};

export default Header;
