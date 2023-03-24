import React from 'react'
import Image from 'next/image'
import Html from "/public/Hmtl.png"
import CSS3 from "/public/CSS3.png"
import Js from "/public/Js.png"
function Skills() {
  return (
    <div id="skills" className=" w-full lg:h-screen p-2">
        <div className=" max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <p className="text-xl tracking-widest uppercase text-[#d4af37]">Skills</p>
            <h2 className="py-4"> These are my skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="p-6 shadow-sm shadow-[#d4af37] rounded-xl hover:scale-105 ease-in duration-300"> 
                <div className='grid gird-cols-2 gap-4 justify-center items-center'>
                <div className="m-auto w-20 h-24">
                    <Image src={Html} alt="/"/>
                </div>
                <div className="flex flex-col items-center justify-center"> 
                 <h3> HMTL</h3>
                 </div>
                
                 </div>
            </div>

            <div className="p-6 shadow-sm shadow-[#d4af37] rounded-xl hover:scale-105 ease-in duration-300"> 
             <div className='grid gird-cols-2 gap-4 justify-center items-center'>
                <div className="m-auto w-16 h-24">
                    <Image src={CSS3} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center"> 
                <h3> CSS </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-sm shadow-[#d4af37] rounded-xl hover:scale-105 ease-in duration-300"> 
             <div className='grid gird-cols-2 gap-4 justify-center items-center'>
                <div className="m-auto w-28 h-24  ">
                    <Image src={Js} alt="/" className=" w-full h-full" />
                </div>
                <div className="flex flex-col items-center justify-center"> 
                <h3> JavaScript </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-sm shadow-[#d4af37] rounded-xl hover:scale-105 ease-in duration-300"> 
             <div className='grid gird-cols-2 gap-4 justify-center items-center'>
                <div className="m-auto h-24">
                    <Image src="/Tailwind.png" alt="/" width={80} height={80} />
                </div>
                <div className="flex flex-col items-center justify-center"> 
                <h3> Tailwind </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-sm shadow-[#d4af37] rounded-xl hover:scale-105 ease-in duration-300"> 
             <div className='grid gird-cols-2 gap-4 justify-center items-center'>
                <div className="m-auto h-24">
                    <Image src="/React.jpg" alt="/" width={80} height={80} />
                </div>
                <div className="flex flex-col items-center justify-center"> 
                <h3> React </h3>
                </div>
              </div>
            </div>


            <div className="p-6 shadow-sm shadow-[#d4af37] rounded-xl hover:scale-105 ease-in duration-300"> 
             <div className='grid gird-cols-2 gap-4 justify-center items-center'>
                <div className="m-auto h-24">
                    <Image src="/Node.png" alt="/" width={150} height={150} />
                </div>
                <div className="flex flex-col items-center justify-center"> 
                <h3> Node & Express </h3>
                </div>
              </div>
            </div>
            

            </div>
        </div>
    </div>
  )
}

export default Skills