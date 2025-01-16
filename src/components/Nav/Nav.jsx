import React, { useState } from "react";
import { Link } from "react-router";
import Logo from "../../assets/logo.png";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[var(--white)] shadow-custom p-4">
      <div className="container flex items-center justify-evenly px-4">
        <div className="nav-btns  flex items-center gap-4">
          <button className="custom-btn w-[150px]">تواصل معنا</button>

          <label class="flex items-center  cursor-pointer gap-2">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <span class=" text-sm font-medium text-gray-900 dark:text-gray-300">
              <i class="fa-solid fa-globe me-1"></i>
              English
            </span>
            <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="nav-links">
          <ul className="flex gap-10 items-center">
            <li>مقالاتنا</li>
            <li>الوظائف</li>
            <li>من نحن</li>
            <li>أعمالنا</li>
            <li>تكنلوجيا المعلومات والأجهزه</li>
            <li>خدماتنا</li>{" "}
            <Link to="/">
              <img src={Logo} alt="" className="w-[100px] h-[100px]" />
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
