import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoReorderThree } from "react-icons/io5";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { Link } from "react-scroll";
import { navdata } from "../assests/data";
import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const closemenu = () => {
    setIsopen(false);
  };

  const handlenav = () => {
    setIsopen(!isopen);
  };

  return (
    <nav className={`fixed top-0 z-50 w-full lg:w-[80%] lg:mt-2 flex flex-wrap justify-between items-center text-2xl lg:rounded-full p-4 lg:p-3 backdrop-blur-md transition-all duration-300 ${
      isDark
        ? "bg-zinc-900/50 border border-white/10 text-white"
        : "bg-white/60 border border-slate-200/40 shadow-sm text-slate-800"
    }`}>
      <Link
        to="about"
        activeClass="text-purple-500"
        spy={true}
        lgooth={true}
        offset={-80}
        duration={200}
      >
        <span className="cursor-pointer hover:text-purple-500">
          Tanuj Methi
        </span>
      </Link>
      <div className="hidden lg:flex flex-wrap justify-between items-center gap-7">
        {navdata.map((data) => (
          <div key={data.id} className={`cursor-pointer`}>
            <Link
              to={data.id}
              activeClass="text-purple-500"
              spy={true}
              lgooth={true}
              offset={-80}
              duration={200}
            >
              {data.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="hidden lg:flex gap-6 items-center">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-white/10 transition-all"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDark ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}
        </button>
        <a
          href="https://github.com/Tanuj-02"
          target="_blank"
          className="cursor-pointer hover:text-purple-500"
        >
          <FaGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/tanujmethi/"
          target="_blank"
          className="cursor-pointer hover:text-purple-500"
        >
          <FaLinkedin size={25} />
        </a>
      </div>

      {/* Mobile hamburger button with rotation animation */}
      <button
        onClick={handlenav}
        className={`lg:hidden transition-transform duration-300 ${isopen ? "rotate-90" : "rotate-0"}`}
      >
        {isopen ? <ImCross size={25} /> : <IoReorderThree size={35} />}
      </button>

      {/* Mobile menu with slide-down + fade + staggered item animation */}
      <div
        className={`w-full lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isopen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="flex flex-col items-center gap-5">
          {navdata.map((data, index) => (
            <div
              key={data.id}
              className={`w-full text-center cursor-pointer transition-all duration-300 ${
                isopen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: isopen ? `${index * 60}ms` : "0ms" }}
            >
              <Link
                to={data.id}
                activeClass="text-purple-500"
                spy={true}
                lgooth={true}
                offset={-80}
                duration={200}
                onClick={() => closemenu()}
              >
                {data.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Social icons — fixed alignment with items-center and consistent icon sizes */}
        <div
          className={`flex mt-8 mb-2 justify-center items-center gap-4 transition-all duration-300 ${
            isopen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
          style={{ transitionDelay: isopen ? `${navdata.length * 60}ms` : "0ms" }}
        >
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-slate-200/50 dark:hover:bg-white/10 transition-all"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}
          </button>
          <a
            href="https://github.com/Tanuj-02"
            target="_blank"
            className="flex items-center justify-center w-9 h-9 cursor-pointer hover:text-purple-500"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/tanujmethi/"
            target="_blank"
            className="flex items-center justify-center w-9 h-9 cursor-pointer hover:text-purple-500"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;