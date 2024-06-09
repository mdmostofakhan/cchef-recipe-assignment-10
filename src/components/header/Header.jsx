import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaRestroom } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

const Header = () => {
  useEffect(() => {
    document.title = "Chef Recipe"; // Set the website title

    const menuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }, []);

  return (
    <div className="">
       
      <div className="navbar p-4 bg-black flex flex-col lg:flex-row items-center">
        <div className="flex justify-between items-center">
          <div>
            <a className="btn btn-ghost mb-3 lg:mb-0 text-cyan-50 text-xl flex items-center">
              <span className="text-4xl italic text-sky-500">Chef Recipe</span>
              <small className="text-6xl text-rose-700 ml-2">
                <FaRestroom />
              </small>
            </a>
          </div>

          <div className="navbar-end hidden lg:flex w-full  lg:w-auto">
            <ul className="menu menu-horizontal  px-1">
              <li>
                <a className="text-white text-xl hover:underline decoration-sky-600 underline-offset-8 transform translate-x-2">
                  Home
                </a>
              </li>
              <li>
                <details>
                  <summary className="text-white text-xl hover:underline decoration-sky-600 underline-offset-8 transform translate-x-2">
                    Blog
                  </summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a className="text-white text-xl hover:underline decoration-sky-600 underline-offset-8 transform translate-x-2">
                  Mens
                </a> 
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end flex lg:hidden w-full  justify-end">
          <button className="text-white" id="mobile-menu-button">
            <MdMenu></MdMenu>
          </button>
        </div>

        <div className="navbar-end lg:flex hidden text-xl mr-24">
          <button className="text-white rounded-md hover:bg-sky-500 hover:text-red-600 text-xl border w-full lg:w-auto p-2 decoration-sky-600 transform translate-x-2">
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* <div className="lg:hidden hidden" id="mobile-menu">
                <ul className="menu menu-vertical px-1">
                    <li><a className='text-white text-xl hover:underline decoration-sky-600 underline-offset-8 transform translate-x-2'>Home</a></li>
                    <li>
                        <details>
                            <summary className='text-white text-xl hover:underline decoration-sky-600 underline-offset-8 transform translate-x-2'>Blog</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a className='text-white text-xl hover:underline decoration-sky-600 underline-offset-8 transform translate-x-2'>Contact</a></li>
                    <li>
                        <button className='text-white rounded-md hover:bg-sky-500 hover:text-red-600 text-xl border w-full p-2 decoration-sky-600 transform translate-x-2'>
                            Sign In
                        </button>
                    </li>
                </ul>
            </div> */}
    </div>
  );
};

export default Header;
