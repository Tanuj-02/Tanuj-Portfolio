import React from "react";
import { SkillsInfo } from "../assests/data";
import Tilt from "react-parallax-tilt";
const Skills = () => {
  return (
    <div
      className="w-[80%] flex mt-8 flex-wrap items-center justify-center"
      id="skills"
    >
      <span className="font-bold w-full text-center text-4xl">SKILLS</span>
      <div className="bg-purple-500 w-24 h-1 mt-0.5"></div>
      <p className=" text-slate-300 text-lg lg:text-2xl w-full lg:text-center mt-4 font-semibold">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
      <div className="w-full  flex flex-wrap justify-center items-center">
        {SkillsInfo.map((data) => (
          <div
            key={data.skills.name}
            className="border rounded-2xl lg:rounded-3xl  bg-zinc-900/80 backdrop-blur-lg transition-all hover:shadow-[0_5px_25px_rgba(139,92,246,0.3)] shadow-[0_1px_5px_rgba(139,92,246,0.5)] border-zinc-700/50 flex flex-col flex-wrap w-full h-full lg:w-[40%] lg:h-96 mt-3 lg:m-6"
          >
            <h1 className=" text-slate-300 text-center h-fit w-full p-2 font-bold lg:text-3xl text-xl lg:p-4">
              {data.title}
            </h1>
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 lg:grid-cols-3 w-full h-[80%] gap-3 justify-center items-center lg:p-5 p-3 ">
                {data.skills.map((daata) => (
                  <div
                    key={daata.name}
                    className="w-full flex flex-wrap border border-slate-300 rounded-2xl h-fit p-2 justify-center items-center"
                  >
                    <img
                      src={daata.logo}
                      alt={daata.name}
                      className="w-6 h-6 lg:w-8 lg:h-8"
                    />
                    <h1 className="h-fit w-full lg:w-[70%] text-center">
                      {daata.name}
                    </h1>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
