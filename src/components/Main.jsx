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
            <h1 className="py-2 text-gray-600"> A Front-End Web Developer </h1>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto"> I am a frontend developer who specializes in building seamless digital user experiences. I recenlty completed a certification for Fullstack and found myself immersed in Front-End web developement. In the last 7 months my skills have quickly floruished.</p>
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
                            <div className=" rounded-full shadow-xl shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail size={20}/>
                            </div>
                            <div className=" rounded-full shadow-xl shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <BsFillPersonLinesFill size={20}/>
                            </div>
         </div>
        </div>
        </div>
    </div>
  )
}

export default Main