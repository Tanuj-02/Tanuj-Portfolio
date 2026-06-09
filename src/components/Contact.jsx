import React from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useTheme } from "../ThemeContext";
import axios from "axios";

const Contact = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { isDark } = useTheme();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  async function onsubmit(data) {
    try{
      await axios.post(`${API_URL}/send`,data)

      toast.success("Message Sent Successfully ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: isDark ? "dark" : "light",
            transition: Bounce,
          });

      reset();
    } catch(error){
       toast.error("Failed to Sent Message ❌", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: isDark ? "dark" : "light",
            transition: Bounce,
          });

      console.log(error);
    }
  }
  return (
    <div
      className="w-[90%] lg:w-[80%] mt-8 flex flex-wrap items-center justify-center"
      id="contact"
    >
      <ToastContainer />
      <span className={`font-bold w-full text-center text-4xl ${isDark ? "text-white" : ""}`}>CONTACT</span>
      <div className="bg-purple-500 w-38 h-1 mt-0.5"></div>
      <p className={` text-lg lg:text-2xl w-full lg:text-center mt-4 font-semibold ${isDark ? "text-slate-300" : "text-slate-600"}`}>
        I'd love to hear from you—reach out for any opportunities or questions!
      </p>
      <div
        className={`flex flex-col items-center justify-center mt-6 lg:m-6 w-full lg:w-1/2 rounded-2xl border shadow-md p-6 ${
          isDark
            ? "bg-zinc-900/90 border-white/10"
            : "bg-white border-slate-200"
        }`}
      >
        <h3 className={`w-full text-center text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
          Connect With Me
        </h3>
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="flex flex-col gap-4 w-full"
        >
          <input
            type="text"
            required
            {...register("name", {
              minLength: { value: 3, message: "Minimum Length at least 3" },
            })}
            placeholder="Your Name"
            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-purple-400 transition-all ${
              isDark
                ? "bg-slate-800/50 text-white border-slate-700 placeholder-slate-400 focus:bg-slate-700/50"
                : "bg-slate-100/50 text-slate-900 border-slate-200 placeholder-slate-500 focus:bg-white"
            }`}
          />
          {errors.user_name && <span className={`text-sm ${isDark ? "text-red-400" : "text-red-500"}`}>{errors.user_name.message}</span>}
          <input
            type="email"
            required
            {...register("email")}
            placeholder="Your Email"
            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-purple-400 transition-all ${
              isDark
                ? "bg-slate-800/50 text-white border-slate-700 placeholder-slate-400 focus:bg-slate-700/50"
                : "bg-slate-100/50 text-slate-900 border-slate-200 placeholder-slate-500 focus:bg-white"
            }`}
          />

          <input
            type="text"
            required
            {...register("subject", {
              maxLength: { value: 75, message: "Max Length is 75" },
            })}
            placeholder="Subject"
            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-purple-400 transition-all ${
              isDark
                ? "bg-slate-800/50 text-white border-slate-700 placeholder-slate-400 focus:bg-slate-700/50"
                : "bg-slate-100/50 text-slate-900 border-slate-200 placeholder-slate-500 focus:bg-white"
            }`}
          />
          {errors.subject && <span className={`text-sm ${isDark ? "text-red-400" : "text-red-500"}`}>{errors.subject.message}</span>}
          <textarea
            {...register("message")}
            placeholder="Message"
            rows="4"
            required
            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-purple-400 transition-all resize-none ${
              isDark
                ? "bg-slate-800/50 text-white border-slate-700 placeholder-slate-400 focus:bg-slate-700/50"
                : "bg-slate-100/50 text-slate-900 border-slate-200 placeholder-slate-500 focus:bg-white"
            }`}
          />

          <input
            type="submit"
            disabled={isSubmitting}
            className={`mt-4 px-6 py-2 rounded-lg border transition-all duration-300 hover:cursor-pointer font-medium focus:outline-none ${
              isDark
                ? "bg-slate-800/80 text-white border-slate-700 hover:bg-purple-600/80 hover:text-white hover:border-purple-500 hover:shadow-lg"
                : "bg-slate-200 text-slate-900 border-slate-300 hover:bg-purple-200 hover:text-purple-700 hover:border-purple-300 hover:shadow-md disabled:opacity-70"
            }`}
            value={isSubmitting ? "Sending" : "Send"}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
