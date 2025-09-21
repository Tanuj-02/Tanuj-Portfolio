import React from "react";

const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 bg-purple-500/10 blur-2xl"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
