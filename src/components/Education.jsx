import React, { useState } from "react";
import { education } from "../assests/data";

const Education = () => {
  const [activeId, setActiveId] = useState(null);
  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id));

  return (
    <div
      className="w-[80%] mt-8 flex flex-wrap items-center justify-center"
      id="education"
    >
      <span className="font-bold w-full text-center text-4xl">EDUCATION</span>
      <div className="bg-purple-500 w-38 h-1 mt-0.5 rounded-sm"></div>
      <p className="text-slate-300 text-base lg:text-2xl text-wrap w-full lg:text-center mt-4 font-semibold">
        My education has been a journey of learning and development. Here are
        the details of my academic background
      </p>
      <div className="w-full mt-6 flex flex-col items-center">
        {/* Desktop */}
        <div className="hidden md:flex relative flex-col items-center w-full max-w-5xl">
          <div className="absolute left-1/2 top-6 bottom-6 w-[3px] bg-gray-700 -translate-x-1/2"></div>

          <div className="flex flex-col gap-16 w-full">
            {education.map((edu, index) => {
              const isLeft = index % 2 === 0;
              const isActive = activeId === edu.id;

              return (
                <div
                  key={edu.id}
                  className={`relative flex w-full ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* center dot + logo */}
                  <div className="absolute left-1/2 top-6 -translate-x-1/2 flex flex-col items-center z-10">
                    <div
                      className={`w-6 h-6 rounded-full border-4 border-zinc-900 shadow-lg ${
                        isActive ? "bg-purple-500" : "bg-zinc-800"
                      }`}
                    ></div>
                    <img
                      src={edu.img}
                      alt={`${edu.school} logo`}
                      className="w-16 h-16 mt-2 rounded-full bg-white p-1 object-contain shadow-md"
                    />
                  </div>
                  <article
                    onClick={() => toggle(edu.id)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") toggle(edu.id);
                    }}
                    className={`relative border border-white/10 bg-zinc-900/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 w-[45%] cursor-pointer transition-transform duration-300 overflow-hidden ${
                      isActive
                        ? "scale-105"
                        : "hover:-translate-y-1 hover:shadow-purple-500/30"
                    }`}
                    style={{ textAlign: isLeft ? "left" : "right" }}
                    aria-expanded={isActive}
                  >
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-zinc-400 text-sm">{edu.school}</p>
                    <p className="text-zinc-400 text-sm mb-2">{edu.date}</p>
                    <p className="text-purple-500 text-sm font-medium mb-2">
                      {edu.grade}
                    </p>
                    <div
                      className={`transition-[max-height,opacity] duration-300 overflow-hidden ${
                        isActive ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-zinc-300 text-sm mt-2">{edu.desc}</p>
                    </div>
                    <div
                      className={`absolute top-6 w-4 h-4 rotate-45 hidden md:block ${
                        isLeft
                          ? "-right-2 border-r-2 border-t-2 border-gray-700 bg-zinc-900/80"
                          : "-left-2 border-l-2 border-t-2 border-gray-700 bg-zinc-900/80"
                      }`}
                    />
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-6 w-full max-w-md mt-4">
          {education.map((edu) => {
            const isActive = activeId === edu.id;
            return (
              <article
                key={edu.id}
                onClick={() => toggle(edu.id)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggle(edu.id);
                }}
                className={`border border-white/10 bg-zinc-900/80 backdrop-blur-sm rounded-2xl shadow-md p-5 text-center cursor-pointer transition-transform duration-300 ${
                  isActive
                    ? "scale-105"
                    : "hover:-translate-y-1 hover:shadow-purple-500/20"
                }`}
                aria-expanded={isActive}
              >
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-14 h-14 mb-3 rounded-full bg-white p-1 shadow-md mx-auto object-contain"
                />
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-zinc-400 text-sm">{edu.school}</p>
                <p className="text-zinc-400 text-sm mb-2">{edu.date}</p>
                <p className="text-purple-500 text-sm font-medium mb-2">
                  {edu.grade}
                </p>
                <div
                  className={`transition-[max-height,opacity] duration-300 overflow-hidden ${
                    isActive ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-zinc-300 text-sm mt-2">{edu.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
