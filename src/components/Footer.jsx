import React from "react";
import { navdata } from "../assests/data";
import { Link } from "react-scroll";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-[80%] mt-12 ">
      <h1 className="text-purple-500 text-2xl font-semibold text-center">
        Tanuj Methi
      </h1>
      <div className="flex flex-wrap justify-center gap-2 lg:gap-4 items-center m-6">
        {navdata.map((data) => (
          <Link
            to={data.id}
            spy={true}
            lgooth={true}
            offset={-80}
            duration={200}
          >
            <span
              key={data.id}
              className="lg:text-base text-sm hover:cursor-pointer hover:scale-110"
            >
              {data.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center text-xl">
        <a
          href="https://github.com/Tanuj-02"
          target="_blank"
          className="hover:text-purple-500 hover:scale-125"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/tanujmethi/"
          target="_blank"
          className="hover:text-purple-500 hover:scale-125"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/tanuj_0202?igsh=bWI0bXNqYndwY3N3"
          target="_blank"
          className="hover:text-purple-500 hover:scale-125"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
