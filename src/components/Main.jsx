import React from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from "react-icons/fa"
import {BsFillPersonLinesFill} from "react-icons/bs"
function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="uppercase text-sm tracking-widest text-gray-600">
            <p>Oh hey there, you found me, Lets build together</p>
            <h1 className="py-4 text-gray-700"> I am <span className='text-[#d4af37]'> Abneet</span></h1>
            <h1 className="py-2 text-gray-600"> Marketing / Home Development </h1>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto"> I am currently a project manager for Pabyal Construction and actively seeking new opportunties to learn and grow in my career.</p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a href="https://www.linkedin.com/in/abneetpabyal/">
                           <div className=" rounded-full shadow-xl shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300" >
                            <FaLinkedinIn size={20}/>
                            </div>
                        </a>
                        <a href="https://github.com/AbneetKP">
                            <div className=" rounded-full shadow-xl shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub size={20}/>
                            </div>
                        </a>
                        <a href="mailto:Abneet.P@gmail.com">
                            <div className=" rounded-full shadow-xl shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail size={20}/>
                            </div>
                        </a>
                           
         </div>
        </div>
        </div>
    </div>
  )
}

export default Main