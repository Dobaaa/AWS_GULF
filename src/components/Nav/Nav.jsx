import React, { useState } from "react";
import { Link } from "react-router";
import Logo from "../../assets/logo.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[var(--white)] shadow-custom p-4 text-[10px]  xl:text-[14px] ">
      <div className="container flex items-center justify-between lg:justify-evenly px-4">
        {/* Buttons Section */}
        <div className="nav-btns hidden items-center gap-4  md:flex">
          <button className="custom-btn w-[150px]">تواصل معنا</button>

          <label className="flex items-center cursor-pointer gap-2">
            <input type="checkbox" value="" className="sr-only peer" checked />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
              <i className="fa-solid fa-globe me-1"></i>
              English
            </span>
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        {/* Navbar Links */}
        <div
          className={`${
            isMenuOpen ? "hidden" : "hidden"
          } flex-col lg:flex lg:flex-row lg:gap-10 items-center`}
        >
          <ul className="flex  flex-col  lg:visible lg:flex-row gap-4 lg:gap-10 items-center">
            <li>مقالاتنا</li>
            <li>الوظائف</li>
            <li>من نحن</li>
            <li>أعمالنا</li>
            <li>تكنلوجيا المعلومات والأجهزه</li>
            <li>خدماتنا</li>
          </ul>
        </div>
        {/* Logo Section */}
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-[100px] h-[100px]" />
        </Link>
        {/* Toggle Button for Small Screens */}
        <button
          className="block lg:hidden p-2 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md p-4 mt-2 rounded-md">
          <ul className="flex flex-col gap-4">
            <li>مقالاتنا</li>
            <li>الوظائف</li>
            <li>من نحن</li>
            <li>أعمالنا</li>
            <li>تكنلوجيا المعلومات والأجهزه</li>
            <li>خدماتنا</li>
            <div className="nav-btns flex items-center gap-4">
              <button className="custom-btn w-[150px]">تواصل معنا</button>

              <label className="flex flex-col items-center cursor-pointer gap-2">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  defaultChecked
                />

                <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  <i className="fa-solid fa-globe me-1"></i>
                  English
                </span>
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
