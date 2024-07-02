import React, { useEffect, useState } from "react";
import { FaRestroom, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Chef Recipe"; // Set the website title
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black h-20 fixed z-10 w-full fix px-6 md:px-12 lg:px-20 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className="text-4xl italic text-sky-500">Chef Recipe</span>
        <FaRestroom className="text-rose-700 text-4xl" />
      </div>

      <nav className="hidden md:flex items-center space-x-20">
        <ul className="flex space-x-6">
          <li>
            <a
              href="#home"
              className="text-white text-xl hover:underline decoration-sky-600 underline-offset-8"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="text-white text-xl hover:underline decoration-sky-600 underline-offset-8"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#mens"
              className="text-white text-xl hover:underline decoration-sky-600 underline-offset-8"
            >
              Mens
            </a>
          </li>
        </ul>
        <button className="text-sky-500 rounded-md hover:bg-sky-500 hover:text-red-600 text-xl border border-sky-500 w-auto px-4 py-2">
          Sign In
        </button>
      </nav>

      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-white text-2xl">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-white flex flex-col items-center space-y-6 py-4 z-50">
          <a
            href="#home"
            className="text-xl hover:underline decoration-sky-600 underline-offset-8"
            onClick={toggleMobileMenu}
          >
            Home
          </a>
          <a
            href="#blog"
            className="text-xl hover:underline decoration-sky-600 underline-offset-8"
            onClick={toggleMobileMenu}
          >
            Blog
          </a>
          <a
            href="#mens"
            className="text-xl hover:underline decoration-sky-600 underline-offset-8"
            onClick={toggleMobileMenu}
          >
            Mens
          </a>
          <button
            className="text-sky-500 rounded-md hover:bg-sky-500 hover:text-red-600 text-xl border border-sky-500 w-auto px-4 py-2"
            onClick={toggleMobileMenu}
          >
            Sign In
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
