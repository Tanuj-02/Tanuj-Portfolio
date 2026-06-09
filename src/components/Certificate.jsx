import React from 'react'
import { useTheme } from '../ThemeContext'

const Certificate = () => {
  const {isDark} = useTheme();
  return (
     <div
      className="w-[90%] lg:w-[80%] mt-8 flex flex-wrap items-center justify-center"
      id="certificate"
    >
      <span className={`font-bold w-full text-center text-4xl ${isDark ? "text-white" : ""}`}>Certificate</span>
      <div className="bg-purple-500 w-24 h-1 mt-0.5"></div>
      <p className={` text-lg lg:text-2xl w-full lg:text-center mt-4 font-semibold ${isDark ? "text-slate-300" : "text-slate-600"}`}>
        A collection of certifications that showcase my expertise, learning journey, and commitment to professional excellence.
      </p>
      Certificate
    </div>
  )
}

export default Certificate