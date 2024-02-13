import React from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from "react-icons/fa"
import {BsFillPersonLinesFill} from "react-icons/bs"
import {HiOutlineChevronDoubleUp} from "react-icons/hi"
function Contact() {
  return (
    <div id="contact" className=" w-full :h-screen">
        <div className="max-w-[1240px] m-auto px-4 py-16 w-full">
            <p className=" text-xl tracking-widest uppercase text-[#d4af37]"> Contact</p>
            <h2 className="py-4">Get in touch</h2>
            <div className="grid lg:grid-cols-5 gap-8">
                {/* left */}
                <div className=" col-span-3 lg:col-span-2 w-full h-full shadow-sm shadow-[#d4af37] rounded-xl p-4">
                    <div className=" lg:p-4 h-full">
                        <div>
                            <img className="rounded-xl hover:scale-105 ease-in duration-300" src="/Contact.jpg" alt="/" />
                        </div>
                        <div>
                            <h2 className="py-2">Abneet Pabyal</h2>
                            <p>Marketing & Home Development</p>
                            <p className="py-4">I am looking for full-time positions to further advance my career.</p>
                        </div>
                        <div>
                    <p className=" uppercase pt-8">  Connect With Me</p>
                    <div className=" flex items-center justify-between py-4"> 
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
                            {/* <div className=" rounded-full shadow-xl shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <BsFillPersonLinesFill size={20}/>
                            </div> */}
                        </div>
                    </div>
                    </div>  
                    
                </div>
                {/* right */}
                <div className=" col-span-3 w-full h-auto shadow-sm shadow-[#d4af37] rounded-xl lg:p-4">
                    <div className="p-4">
                        <form>
                            <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
                                <div className=" flex flex-col">
                                <label className=" uppercase text-sm py-2"> Name </label>
                                <input type="text" className=" border-2 rounded-lg p-3 flex- border-[#E8D596]" />  


                                </div>
                                <div className=" flex flex-col">
                                <label className=" uppercase text-sm py-2"> Phone Numebr </label>
                                <input type="text" className=" border-2 rounded-lg p-3 flex- border-[#E8D596]" />  


                                </div>
                            </div>
                            <div className=" flex flex-col py-2">
                                <label className=" uppercase text-sm py-2"> Email</label>
                                <input type="email" className=" border-2 rounded-lg p-3 flex- border-[#E8D596]" />  

                            </div>
                            <div className=" flex flex-col py-2">
                                <label className=" uppercase text-sm py-2"> Subject</label>
                                <input type="text" className=" border-2 rounded-lg p-3 flex border-[#E8D596]" />  

                            </div>
                            <div className=" flex flex-col py-2">
                                <label className=" uppercase text-sm py-2"> Message</label>
                                <textarea className=" border-2 rounded-lg p-3 border-[#E8D596]" rows={10} />  

                            </div>
                            <button className=" w-full p-4 mt-4"> Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className=" flex justify-center py-12">
                <Link href="/">
                    <div className="rounded-full shadow-xl shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <HiOutlineChevronDoubleUp className="text-[#E8D596]"/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact