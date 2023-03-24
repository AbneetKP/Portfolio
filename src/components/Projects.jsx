import React from 'react'
import Image from 'next/image'
import ParknBark from "/public/ParknBark.png"
import Masahe from "/public/Masahe.png"
import Link from 'next/link'
import Projectitem from './Projectitem'
function Projects() {
  return (
    <div className="w-full">
     <div className="max-w-[1240] mx-auto px-2 py-16">
        <p className=" text-xl tracking-widest uppercase text-[#d4af37]">Projects</p>
         <h2 className="py-4">What I've built so far in my journey</h2>
          <div className="grid md:grid-cols-2 gap-8">
        <Projectitem 
        title="Dog Park Finder" 
        backgroundImg={ParknBark}
        projectUrl = "https://github.com/abbyrobinson13/park-n-bark" 
        />

<Projectitem 
        title="Massage App" 
        backgroundImg={Masahe}
        projectUrl = "https://github.com/heythereitisme/Masahe" 
        />
          </div>
     </div>
    </div>
  )
}

export default Projects