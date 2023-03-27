import React from 'react'

function About() {
  return (
    <div id="about" className='w-full md:h-screen p-4    flex items-center py-16'>
        <div className=' max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className=" col-span-2">
                <p className=" uppercase font-title text-2xl tracking-widest text-[#d4af37]">About Me</p>
                <h1 className="py-4">First of all who even am I?</h1>
                <p className="py-2"> As I am sure you know by now my name is Abneet, Abneet Pabyal</p>
                <p className="py-2"> 
                I am first generation Canadian, born in Surrey British Columbia and moved to
                <span className="text-[#d4af37]">Calgary</span> in 2012. I have background in Marketing, and recently
                completed a <span className="text-[#d4af37]"> fullstack developer program </span>. I am adept
                <span className="text-[#d4af37]"> JavaScript, HTML, CSS </span> and steadily learning more surronding the
                industry and abundance of open resources. I enjoy
                <span className="text-[#d4af37]"> digital marketing </span> and <span className="text-[#d4af37]">web developement </span>as these are
                my core passions, and the concept of always being introduced new methods,
                frameworks, and efficencies of the industries really drew me in.
                </p>
                <p className='py-2'>
                     2022 of August, I had no prior knowledge of anything related to web or software devleopment.
                     I was enticed by the industry after visiting San Fransico, it had peaked my interest, and 
                     I took a deep dive soon after into another field after completing my first degree. 
                     I believe my desire for Front-End deveolpment is nicely complimented by my marketing knowledge.
                </p>
               
            </div>
            <div className=" w-full h-auto m-auto shadow-sm shadow-[#d4af37] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <img src="/Abneet.jpg" alt="/" className="rounded-xl" />
            </div>
        </div>
      
    </div>
  )
}

export default About