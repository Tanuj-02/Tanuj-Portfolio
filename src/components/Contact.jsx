import emailjs from '@emailjs/browser'
import React from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  function onsubmit(data){
    emailjs
      .send(
        "service_f1zd193",
        "template_u3mzkbl",
        data,
        "pg7Yzo9S8Y_JB8gSG"
      )
      .then(
        ()=>{toast.success('Message Sent Successfully ✅', {
position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
})},
()=>{
  toast.error('Failed to Sent Message ❌', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
}
      )
    reset();
  }
  return (
    <div className="w-[80%] mt-8 flex flex-wrap items-center justify-center"
      id="contact">
        <ToastContainer/>
        <span className="font-bold w-full text-center text-4xl">CONTACT</span>
      <div className="bg-purple-500 w-38 h-1 mt-0.5"></div>
      <p className=" text-slate-300 text-lg lg:text-2xl w-full lg:text-center mt-4 font-semibold">
        I’d love to hear from you—reach out for any opportunities or questions!
      </p>
      <div className="flex flex-col items-center justify-center mt-6 lg:m-6 w-full lg:w-1/2 
  rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-white/10 shadow-lg p-6">
  <h3 className="w-full text-center text-2xl font-bold text-white mb-6">
    Connect With Me
  </h3>
  <form 
    onSubmit={handleSubmit(onsubmit)} 
    className="flex flex-col gap-4 w-full"
  >
    <input 
      type="text" required
      {...register("user_name")} 
      placeholder="Your Name"  
      className="w-full px-4 py-2 rounded-lg bg-zinc-800/80 text-white 
      border border-white/10 focus:outline-none focus:border-purple-500 
      placeholder:text-zinc-500 transition-all"
    />

    <input 
      type="email"  required
      {...register("user_email")} 
      placeholder="Your Email" 
      className="w-full px-4 py-2 rounded-lg bg-zinc-800/80 text-white 
      border border-white/10 focus:outline-none focus:border-purple-500 
      placeholder:text-zinc-500 transition-all"
    />

    <input 
      type="text" required 
      {...register("subject")} 
      placeholder="Subject" 
      className="w-full px-4 py-2 rounded-lg bg-zinc-800/80 text-white 
      border border-white/10 focus:outline-none focus:border-purple-500 
      placeholder:text-zinc-500 transition-all"
    />

    <textarea 
      {...register("message")} 
      placeholder="Message" 
      rows="4" required
      className="w-full px-4 py-2 rounded-lg bg-zinc-800/80 text-white 
      border border-white/10 focus:outline-none focus:border-purple-500 
      placeholder:text-zinc-500 transition-all resize-none"
    />

    <button 
      type="submit"
      className="mt-4 px-6 py-2 rounded-lg bg-purple-600/20 text-purple-400 
      border border-purple-500/30 hover:bg-purple-600/30 hover:text-purple-300 
      hover:shadow-lg transition-all duration-300 hover:cursor-pointer"
    >
      Send
    </button>
  </form>
</div>

    </div>
  )
}

export default Contact
