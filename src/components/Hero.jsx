import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import tanujimage from "../assests/tanuj-removebg-preview.png";

const Hero = () => {
  return (
    <div className="mt-20 w-[80%] flex flex-wrap " id="about">
      <div className="lg:w-[50%] flex-col  flex flex-wrap  p-2 order-2 lg:order-1 ">
        <h1 className="lg:text-5xl text-4xl font-bold">Hi, I am</h1>
        <h1 className="lg:text-5xl text-4xl font-bold">Tanuj Methi</h1>
        <h1>
          <span className="lg:text-5xl text-xl font-bold whitespace-nowrap">
            I am a{" "}
            <span className="text-purple-500 font-bold ">
              <Typewriter
                words={["Coder", "Web Developer", "Coffee Lover"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              ></Typewriter>
            </span>
          </span>
        </h1>
        <br />
        <p className="lg:text-2xl text-base text-slate-300">
          As a third-year B.Tech student, I am continuously learning and
          improving my web development skills. So far, I’ve worked with React,
          JavaScript, and Tailwind CSS, and I’m currently diving deeper into
          Node.js and DevOps.
        </p>
        <br />
        <button className="shadow-[0_0_2px_#a855f7,0_0_2px_#a855f7,0_0_25px_#a855f7] transition cursor-pointer hover:scale-110 bg-purple-500 font-bold rounded-3xl p-3 w-fit text-xl">
          Download Resume
        </button>
        <br />
      </div>
      <div className="lg:w-[50%]  mx-auto flex flex-wrap justify-center items-center lg:order-2">
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
        >
          <img
            src={tanujimage}
            alt="Tanuj Methi"
            className="border-2 border-purple-500 lg:w-80 lg:h-80 rounded-full"
          />
        </Tilt>
      </div>
    </div>
  );
};

export default Hero;
