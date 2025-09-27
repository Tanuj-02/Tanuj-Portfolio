import React, { useState } from "react";
import { projects } from "../assests/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { EffectCards } from "swiper/modules";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";
import "./Projects.css";
const Projects = () => {

const [open, setOpen] = useState(false)

const handleclick = () => {
  setOpen(!open)
}

  return (
    <div
      className="w-[80%] mt-8 flex flex-wrap items-center justify-center"
      id="projects"
    >
      <span className="font-bold w-full text-center text-4xl">Projects</span>
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
          <img src={data.image} alt="" className="w-[95%] rounded-2xl h-full m-2 object-cover" loading="lazy" />
        </div>

       
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 truncate">{data.title}</h3>
            <p className="text-zinc-400 mb-4 pt-2 line-clamp-3">{data.description}</p>
          </div>
          <div className="flex flex-wrap">
            {data.tags.map((tagsdata, index)=>
            <span key={index} className="inline-block bg-zinc-800/90 text-purple-500 border border-purple-500/30 text-xs font-semibold rounded-full px-2 py-1 mr-2 mb-2 transition-all hover:bg-purple-500/10 hover:shadow-lg">
              {tagsdata}
            </span>
            )}
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  <div className="custom-pagination flex justify-center mt-6"></div>
</div>

    </div>
  );
};

export default Projects;