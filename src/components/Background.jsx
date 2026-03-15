import React from "react";
import { useTheme } from "../ThemeContext";

const Background = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
      isDark 
        ? "bg-zinc-900" 
        : "bg-slate-50"
    }`}>
      {isDark ? (
        <>
          <div className="absolute inset-0 bg-purple-500/10 blur-2xl"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-35"></div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-purple-200/10 blur-2xl"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-90"></div>
        </>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;