import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from "react-icons/fa"
import {BsFillPersonLinesFill} from "react-icons/bs"

function NavBar() {
    const [shadow, setShadow] = useState (false)
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    useEffect(()=> {
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true)
            } else  {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow )
    },[])
  return (
    <div className={shadow ? "fixed bg-white  w-full h-20 shadow-sm shadow-[#d4af37] z-[100]":"fixed w-full h-20 z-[100]" }>
        {/* Logo */}
     <div className=" flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Image src="/Logo.png" alt="/" width="125" height="50"/>
         <div>
            <ul className=" hidden md:flex">
                <Link href="/#home">
                <li className=" ml-10 text-sm uppercase hover:border-b">Home</li>
                </Link>
                <Link href="/#about">
                <li className=" ml-10 text-sm uppercase hover:border-b">About</li>
                </Link>
                <Link href="/#skills">
                <li className=" ml-10 text-sm uppercase hover:border-b">Skills</li>
                </Link>
                <Link href="/#projects">
                <li className=" ml-10 text-sm uppercase hover:border-b">Projects</li>
                </Link>
                <Link href="/#contact">
                <li className=" ml-10 text-sm uppercase hover:border-b">Contact</li>
                </Link>
                <a href='https://drive.google.com/file/d/1YzwgwhsMvEFf_M1Is2Mr6FfO_ZykrOHl/view?usp=sharing'
                        alt="CV"
                        target="_blank"
                        rel="norel noreferrer">
                    <li className="ml-10 text-sm uppercase hover:border-b">CV</li>
                </a>
              
            </ul>
            <div onClick={handleNav} className='md:hidden scale-105 ease-in duration-100 hover:shadow-lg shadow-gray-400'>
                <AiOutlineMenu size={25}/>
            </div>
        </div>
    </div>

        <div className={nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70": " "}>
            <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : 
            "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"}>
                <div>
                    <div className=' flex w-full justify-between items-center'>
                    <Image src="/Logo.png" alt="/" width="100" height="55"/>
                        <div onClick={handleNav} className='rounded-full shadow-xl shadow-gray-400 cursor-pointer p-3'>
                            <AiOutlineClose size={12}/> 
                        </div>
                    </div>
                    <div className=' border-b border-gray-300 my-4'>
                        <p className='font-body w-[85%] md:[90%] py-4'> Oh You found me, well we might as well build something together!</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link  href="/#home"> 
                        <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li>  
                        </Link>
                        <Link href="/#about"> 
                        <li onClick={()=> setNav(false)} className='py-4 text-sm'>About</li>  
                        </Link>
                        <Link href="/#projects"> 
                        <li onClick={()=> setNav(false)} className='py-4 text-sm'>Projects</li>  
                        </Link>
                        <Link href="/#skills"> 
                        <li onClick={()=> setNav(false)} className='py-4 text-sm'>Contact</li>  
                        </Link>
                        <a href='https://drive.google.com/file/d/1s4yPdaT2zK266bC1TR_tyb94qmHN-AvB/view?usp=share_link'
                        alt="Resume"
                        target="_blank"
                        rel="norel noreferrer"
                        className="font-normal text-sm py-4">
                       <li onClick={()=> setNav(false)} className="text-sm py-[0.45rem]" ></li> Resume
                        </a>
                    </ul>
                    <div className=' pt-40'>
                        <p className="uppercase tracking-widest text-[#5651e5] "> Let's Connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w[80%]'> 
                        <a href="https://www.linkedin.com/in/abneetpabyal/">
                            <div className=" rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaLinkedinIn/>
                            </div>
                        </a>
                        <a href="https://github.com/AbneetKP">
                            <div className=" rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaGithub/>
                            </div>
                        </a>
                        <a href="mailto:Abneet.P@gmail.com">
                            <div className=" rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <AiOutlineMail/>
                            </div>
                        </a>
                       

                        </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default NavBar