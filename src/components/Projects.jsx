import React, { useState } from "react";
import { projects } from "../assests/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { EffectCards } from "swiper/modules";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";
import "./Projects.css";
import { ImCross } from "react-icons/im";
import { RiShareBoxFill } from "react-icons/ri";
const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectproject, setSelectproject] = useState(null);
  const handleclick = (project) => {
    setOpen(!open);
    setSelectproject(project);
    console.log(open);
  };

  return (
    <div
      className="w-[80%] mt-8 flex flex-wrap items-center justify-center"
      id="projects"
    >
      <span className="font-bold w-full text-center text-4xl">PROJECTS</span>
      <div className="bg-purple-500 w-38 h-1 mt-0.5"></div>
      <p className="text-slate-300 text-base lg:text-2xl text-wrap w-full lg:text-center mt-4 font-semibold">
        My projects reflect my skills and creativity in action. Here are the
        details of the work I have done so far.
      </p>
      <div></div> {/* Mobile */}
      <div className="w-full mt-4 lg:hidden">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-[95%] h-[500px]"
        >
          {projects.map((data) => (
            <SwiperSlide
              onClick={() => handleclick(data)}
              className="
        border border-white/10 
        bg-zinc-900/80 
        backdrop-blur-sm 
        rounded-2xl 
        shadow-md 
        hover:shadow-purple-500/20 
        hover:-translate-y-2 
        transition-transform 
        duration-300 
        overflow-hidden
        flex flex-col
      "
            >
              <div className="w-full h-48 object-cover rounded-xl overflow-hidden">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 truncate">
                    {data.title}
                  </h3>
                  <p className="text-zinc-400 mb-4 pt-2 line-clamp-3">
                    {data.description}
                  </p>
                </div>
                <div className="flex flex-wrap">
                  {data.tags.map((tagdata, index) => (
                    <span
                      key={index}
                      className="inline-block bg-zinc-800/90 text-purple-500 border border-purple-500/30 text-xs font-semibold rounded-full px-2 py-1 mr-2 mb-2 transition-all hover:bg-purple-500/10 hover:shadow-lg"
                    >
                      {tagdata}
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Large screen */}
      <div className="hidden lg:block w-full">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          modules={[Pagination, Navigation, Mousewheel, Keyboard]}
          className="mySwiper w-full h-[450px] mt-8"
        >
          {projects.map((data, i) => (
            <SwiperSlide
              key={i}
              onClick={() => handleclick(data)}
              className="
          border border-white/10 
          bg-zinc-900/80 
          backdrop-blur-lg 
          rounded-2xl 
          shadow-lg 
          hover:shadow-purple-500/40 
          hover:-translate-y-1 
          transition-transform 
          duration-300 
          overflow-hidden
          flex flex-col
        "
            >
              <div className="w-full h-48 object-cover flex justify-center items-center rounded-xl overflow-hidden">
                <img
                  src={data.image}
                  alt=""
                  className="w-[95%] rounded-2xl h-full m-2 object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 truncate">
                    {data.title}
                  </h3>
                  <p className="text-zinc-400 mb-4 pt-2 line-clamp-3">
                    {data.description}
                  </p>
                </div>
                <div className="flex flex-wrap">
                  {data.tags.map((tagsdata, index) => (
                    <span
                      key={index}
                      className="inline-block bg-zinc-800/90 text-purple-500 border border-purple-500/30 text-xs font-semibold rounded-full px-2 py-1 mr-2 mb-2 transition-all hover:bg-purple-500/10 hover:shadow-lg"
                    >
                      {tagsdata}
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination flex justify-center mt-6"></div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 lg:top-8 lg:right-12 text-white hover:text-purple-500 transition"
          >
            <ImCross className="w-6 h-6" />
          </button>

          <div
            className="
        relative flex flex-col items-center text-center lg:text-left 
        rounded-3xl bg-zinc-900/95 backdrop-blur-md 
        border-4 border-white/10 shadow-lg 
        w-full max-w-3xl lg:h-auto 
        p-6
      "
          >
            <img
              src={selectproject.image}
              alt={selectproject.title}
              className="
          w-[95%] h-40 lg:h-72 
          object-contain 
          rounded-2xl shadow-md mb-6 bg-zinc-800
        "
              loading="lazy"
            />

            <h2 className="text-xl lg:text-3xl font-bold text-white mb-4">
              {selectproject.title}
            </h2>

            {/* Description */}
            <p className="text-zinc-400 text-sm lg:text-base mb-6 leading-relaxed px-2">
              {selectproject.description}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start mb-6">
              {selectproject.tags.map((data, index) => (
                <span
                  key={index}
                  className="
              inline-block bg-zinc-800/90 text-purple-500 
              border border-purple-500/30 
              text-xs lg:text-sm font-semibold 
              rounded-full px-3 py-1 mr-2 mb-2 
              transition-all hover:bg-purple-500/10 hover:shadow-lg
            "
                >
                  {data}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={selectproject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
            px-4 py-2 rounded-lg bg-zinc-800/80 text-white 
            border border-white/10 
            hover:bg-purple-600/20 hover:text-purple-400 
            transition-all duration-300
          "
              >
                View Code
              </a>
              <a
                href={selectproject.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="
            px-4 py-2 rounded-lg bg-zinc-800/80 text-white 
            border border-white/10 flex items-center gap-1 
            hover:bg-purple-600/20 hover:text-purple-400 
            transition-all duration-300
          "
              >
                Visit <RiShareBoxFill className="inline-block" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
