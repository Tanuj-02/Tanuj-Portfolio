import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoReorderThree } from "react-icons/io5";
import { Link } from "react-scroll";
import { navdata } from "../assests/data";
const Navbar = () => {
  

  const [isopen, setIsopen] = useState(false);
  // const [active, setActive] = useState(null);

  // const handleactive = (id) => {
  //   setActive(id);
  // };
  const closemenu = () => {
    setIsopen(false);
  };
  const handlenav = () => {
    setIsopen(!isopen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full lg:w-[80%] lg:mt-2 flex flex-wrap justify-between items-center text-2xl lg:rounded-full p-4 lg:p-3 bg-zinc-900/50 backdrop-blur-lg">
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
          <div
            key={data.id}
            // onClick={() => handleactive(data.id)}
            className={`cursor-pointer`}
          >
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
      <div className="hidden lg:flex gap-6">
        <a href="https://github.com/Tanuj-02" target="_blank" className="cursor-pointer hover:text-purple-500">
          <FaGithub size={25} />
        </a>
        <a href="https://www.linkedin.com/in/tanujmethi/" target="_blank" className="cursor-pointer hover:text-purple-500">
          <FaLinkedin size={25} />
        </a>
      </div>
      <button onClick={handlenav} className="lg:hidden">
        {isopen ? <ImCross size={25} /> : <IoReorderThree size={35} />}
      </button>
      {isopen && (
        <div className="w-full sticky z-50 ">
          <div className=" flex flex-wrap justify-center items-center gap-5 mt-4">
            {navdata.map((data) => (
              <div
                key={data.id}
                className={`w-full text-center cursor-pointer`}
              >
                <Link
                  to={data.id}
                  activeClass="text-purple-500"
                  spy={true}
                  lgooth={true}
                  offset={-80}
                  duration={200}
                  onClick={()=>
                    closemenu()
                  }
                >
                  {data.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex mt-8 justify-center gap-4">
            <a href="https://github.com/Tanuj-02" target="_blank" className="coursor-pointer text-center hover:text-purple-500">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/tanujmethi/" target="_blank" className="coursor-pointer text-center hover:text-purple-500">
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
