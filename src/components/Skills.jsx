import React from "react";
import { SkillsInfo } from "../assests/data";
import Tilt from "react-parallax-tilt";
import { useTheme } from "../ThemeContext";

const Skills = () => {
  const { isDark } = useTheme();
  return (
    <div
      className={`w-[80%] flex mt-8 flex-wrap items-center justify-center`}
      id="skills"
    >
      <span className={`font-bold w-full text-center text-4xl ${isDark ? "text-white" : ""}`}>SKILLS</span>
      <div className="bg-purple-500 w-24 h-1 mt-0.5"></div>
      <p className={` text-lg lg:text-2xl w-full lg:text-center mt-4 font-semibold ${isDark ? "text-slate-300" : "text-slate-600"}`}>
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
      <div className="w-full  flex flex-wrap justify-center items-center">
        {SkillsInfo.map((data) => (
          <div
            key={data.skills.name}
            className={`border rounded-2xl lg:rounded-3xl flex flex-col flex-wrap w-full h-full lg:w-[40%] lg:h-96 mt-3 lg:m-6 transition-all ${
              isDark
                ? "bg-zinc-900/80 border-white/10 hover:shadow-purple-500/20 shadow-md"
                : "bg-white border-slate-200 hover:shadow-lg hover:shadow-purple-200/40 shadow-md"
            }`}
          >
            <h1 className={` text-center h-fit w-full p-2 font-bold lg:text-3xl text-xl lg:p-4 ${isDark ? "text-slate-300" : "text-slate-800"}`}>
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
                    className={`w-full flex flex-wrap border rounded-2xl h-fit p-2 justify-center items-center transition-colors ${
                      isDark
                        ? "border-slate-700/50 bg-zinc-800/50 hover:bg-zinc-700/50"
                        : "border-slate-200 bg-slate-50/50 hover:bg-slate-100/50"
                    }`}
                  >
                    <img
                      src={daata.logo}
                      alt={daata.name}
                      className="w-6 h-6 lg:w-8 lg:h-8"
                    />
                    <h1 className={`h-fit w-full lg:w-[70%] text-center ${isDark ? "text-slate-300" : ""}`}>
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
