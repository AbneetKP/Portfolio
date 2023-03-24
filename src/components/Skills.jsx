import React from 'react'
import Image from 'next/image'

function Skills() {
  return (
    <div className=" w-full lg:h-screen p-2">
        <div className=" max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <p className="text-xl tracking-widest uppercase text-[#d4af37]">Skills</p>
            <h2 className="py-4"> These are my skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="p-6 shadow-sm shadow-[#d4af37] rounded-xl hover:scale-105 ease-in duration-300"> 
                <div className='grid gird-cols-2 gap-4 justify-center items-center'>
                <div className="m-auto">
                    <Image src="/Hmtl.png" alt="/" width={64} height={64} />
                </div>
                <div className="flex flex-col items-center justify-center"> 
                 <h3> HMTL</h3>
                 </div>
                
                 </div>
            </div>

            <div className="p-6 shadow-sm shadow-[#d4af37] rounded-xl hover:scale-105 ease-in duration-300"> 
             <div className='grid gird-cols-2 gap-4 justify-center items-center'>
                <div className="m-auto">
                    <Image src="/CSS3.png" alt="/" width={50} height={50} />
                </div>
                <div className="flex flex-col items-center justify-center"> 
                <h3> CSS </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-sm shadow-[#d4af37] rounded-xl hover:scale-105 ease-in duration-300"> 
             <div className='grid gird-cols-2 gap-4 justify-center items-center'>
                <div className="m-auto">
                    <Image src="/Js.png" alt="/" width={115} height={115} />
                </div>
                <div className="flex flex-col items-center justify-center"> 
                <h3> JavaScript </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-sm shadow-[#d4af37] rounded-xl hover:scale-105 ease-in duration-300"> 
             <div className='grid gird-cols-2 gap-4 justify-center items-center'>
                <div className="m-auto">
                    <Image src="/Tailwind1.png" alt="/" width={80} height={80} />
                </div>
                <div className="flex flex-col items-center justify-center"> 
                <h3> Tailwind </h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-sm shadow-[#d4af37] rounded-xl hover:scale-105 ease-in duration-300"> 
             <div className='grid gird-cols-2 gap-4 justify-center items-center'>
                <div className="m-auto">
                    <Image src="/React.jpg" alt="/" width={80} height={80} />
                </div>
                <div className="flex flex-col items-center justify-center"> 
                <h3> React </h3>
                </div>
              </div>
            </div>


            <div className="p-6 shadow-sm shadow-[#d4af37] rounded-xl hover:scale-105 ease-in duration-300"> 
             <div className='grid gird-cols-2 gap-4 justify-center items-center'>
                <div className="m-auto">
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