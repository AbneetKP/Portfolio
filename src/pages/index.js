import Head from "next/head";
import Image from "next/image";
import { Inter, Island_Moments } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const parkNBarkSlides = [
    { url: "/ParknBarkHome.jpeg" },
    { url: "/ParksPage.jpeg" },
    { url: "/ModalScreen.jpeg" },
  ];

  const masaheSlides = [
    { url: "/Hero.png" },
    { url: "/Home.png" },
    { url: "/HomeMT.png" },
    { url: "/ClientSchedule.png" },
    { url: "/Calendar.png" },
    { url: "/TheTeam.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? masaheSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === masaheSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const [currentIndexP, setCurrentIndexP] = useState(0);

  const prevSlideP = () => {
    const isFirstSlideP = currentIndexP === 0;
    const newIndexP = isFirstSlideP
      ? parkNBarkSlides.length - 1
      : currentIndexP - 1;
    setCurrentIndexP(newIndexP);
  };

  const nextSlideP = () => {
    const isLastSlideP = currentIndexP === parkNBarkSlides.length - 1;
    const newIndexP = isLastSlideP ? 0 : currentIndexP + 1;
    setCurrentIndexP(newIndexP);
  };
  return (
    <div>
      <div>
        {/* header */}
        <div className="navbar bg-white h-20 fixed top-0 w-full z-50 flex justify-between items-center">
          <div className="h-16">
            <Image src="/Logo.png" alt="logo" width={100} height={100} />
          </div>

          <div className=" flex text-xl">
            <a href="https://www.linkedin.com/in/abneetpabyal/">
              {" "}
              <div className="text-black mr-2 text-4xl">
                {" "}
                <AiFillLinkedin />
              </div>
            </a>
            <a href="https://github.com/AbneetKP">
              {" "}
              <div className="text-black text-4xl mr-8">
                {" "}
                <AiFillGithub />
              </div>
            </a>
          </div>
        </div>

        <div className="sm:p-10">
          {/* // grid 1 */}
          <div className="grid  grid-cols-1 sm:grid-cols-5 mt-16">
            <div className="flex flex-col justify-between bg-gradient-to-r from-amber-400 to-amber-500 h-[45rem] sm:h-[40rem] col-span-3 p-4 ml-8 mt-12 sm:mt-8 mr-8 mb-4 drop-shadow-2xl rounded-lg">
              <div className="text-4xl font-extrabold text-white font-heading p-4 sm:m-8">
                Hi my name is Abneet
                <div className="font-title text-xl mt-4  ">
                  {" "}
                  Frontend Developer
                </div>
                {/* Links */}
                <div className="flex">
                  <a href="https://www.linkedin.com/in/abneetpabyal/">
                    {" "}
                    <div className="text-white mt-2 mr-2">
                      {" "}
                      <AiFillLinkedin />
                    </div>
                  </a>
                  <a href="https://github.com/AbneetKP">
                    {" "}
                    <div className="text-white mt-2">
                      {" "}
                      <AiFillGithub />
                    </div>
                  </a>
                </div>
              </div>
              <div className="text-white font-body m-2 sm:m-8 text-lg">
                Recently divulged into front-end development. Alongside a
                bachelors degree in applied business adminstration with a major
                in marketing. My appittude for learning has only strengthened
                with various projects. I have an array of hobbies, from
                collecting trading cards, gaming, hiking, camping and traveling.
              </div>
            </div>
            {/* place holder Image */}
            <div className="flex flex-col self-end h-[40rem] col-span-2 ml-8  mt-8 mr-8 mb-4 first-letter:mb-4 drop-shadow-2xl rounded-lg">
              <Image
                src="/Abneet-1.jpg"
                alt="Me"
                width={650}
                height={725}
                className="drop-shadow-2xl rounded-2xl object-cover h-[40rem] w-full"
              />
            </div>
          </div>
          {/* divide */}
          <div className="grid grid-cols-1 sm:grid-cols-2 pl-4 pr-4">
            <div className=" bg-slate-100 p-1 m-4 drop-shadow-2xl rounded-lg  h-[2.5rem] sm:h-[4rem] col-span-2 text-center text-2xl ">
              {" "}
              <div className="text-center font-heading sm:text-4xl text-2xl font-extrabold text-black flex items-center justify-center h-[2rem] sm:h-[3.5rem] rounded-2xl">
                {" "}
                TECHNOLOGIES
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 pl-4 pr-4">
            <div className=" bg-white drop-shadow-2xl h-[5rem] sm:h-[10rem] col-span-2 1 m-4 flex justify-between items-center rounded-2xl">
              <Image
                src="/Js.png"
                alt="js"
                width={150}
                height={100}
                className=" h-[2.5rem] w-[2.5rem] sm:h-[8.5rem] sm:w-[10.5rem] ml-2"
              />
              <Image
                src="/CSS3.png"
                alt="css"
                width={65}
                height={100}
                className="h-[2rem] w-[1rem] sm:h-[7rem] sm:w-[5rem]"
              />
              <Image
                src="/Node.png"
                alt="node-express"
                width={150}
                height={100}
                className="h-[2rem] w-[2rem] sm:h-[9.5rem] sm:w-[10.5rem]"
              />
              <Image
                src="/React.jpg"
                alt="react"
                width={85}
                height={100}
                className="h-[2rem] w-[2rem] sm:h-[7rem] sm:w-[7rem]"
              />
              <Image
                src="/Tailwind1.png"
                alt="tailwind"
                width={85}
                height={100}
                className="mr-8 h-[2rem] w-[2rem] sm:h-[7.5rem] sm:w-[7.5rem]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 pl-4 pr-4">
            <div className=" bg-slate-100 m-4 drop-shadow-2xl rounded-lg h-[2.5rem] sm:h-[4rem] col-span-2 text-center text-2xl ">
              {" "}
              <div className="text-center font-heading sm:text-4xl font-extrabold text-black flex items-center justify-center h-[2rem] sm:h-[3.5rem] rounded-2xl">
                {" "}
                PROJECTS
              </div>
            </div>
          </div>

          {/* gird 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-1 pl-4 pr-4">
            {/* Park n Bark */}
            <div className=" m-4 h-[50rem] drop-shadow-2xl rounded-2xl group ">
              <div
                style={{
                  backgroundImage: `url(${parkNBarkSlides[currentIndexP].url})`,
                }}
                className=" w-full h-full bg-cover bg-top rounded-2xl duration-500"
              ></div>
              {/* left arrow */}
              <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-3 p-2 text-2xl cursor-pointer">
                <IoIosArrowDropleft onClick={prevSlideP} size={30} />
              </div>
              {/* right arrow */}
              <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-3 p-2 text-2xl cursor-pointer">
                <IoIosArrowDropright onClick={nextSlideP} size={30} />
              </div>
            </div>
            {/* Masahe */}
            <div className=" h-[50rem]  m-4 drop-shadow-2xl rounded-2xl group">
              <div
                style={{
                  backgroundImage: `url(${masaheSlides[currentIndex].url})`,
                }}
                className=" w-full h-full bg-cover bg-top rounded-2xl duration-500"
              ></div>
              {/* left arrow */}
              <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-3 p-2 text-2xl cursor-pointer">
                <IoIosArrowDropleft onClick={prevSlide} size={30} />
              </div>
              {/* right arrow */}
              <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-3 p-2 text-2xl cursor-pointer">
                <IoIosArrowDropright onClick={nextSlide} size={30} />
              </div>
            </div>
          </div>
          {/* Happy Fats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 pl-4 pr-4">
            <div className="bg-gradient-to-r  from-amber-400 to-amber-500  m-4 drop-shadow-2xl rounded-2xl h-[45rem]">
              <Image
                src="/Happyfats.png"
                alt="Happyfats"
                width={650}
                height={725}
                className=" drop-shadow-2xl rounded-2xl object-cover h-[45rem] w-full"
              />
            </div>
            <div className="bg-gradient-to-r  from-amber-400 to-amber-500 h-[45rem] m-4 drop-shadow-2xl rounded-2xl text-center font-body flex flex-col justify-center">
              <div className="sm:mb-12 text-xl font-title text-white text-top">
                {" "}
                About the project
              </div>
              <div className="m-6 text-sm md:text-lg font-body text-white">
                {" "}
                Happy fats is a nourishing and easy snack for outdoor
                adventures, rush- hour traffic commutes, bagged lunches and
                more. The company brand features an outdoorsy and natural
                essence and it's obvious that it's made for nature lovers and
                people on-the-go.
              </div>
              <div className=" m-6 text-sm md:text-lg font-body text-white">
                {" "}
                I researched and developed multi-channel communications and
                marketing plans, aligning with company goals. Developed a
                comprehensive advertising plan including prices and value
                proposition, while maintaining budget of $1000 including (SEM,
                magazine panel, and social media advertising). Saw an increased
                follower count by 30% after implementation.
              </div>
            </div>
          </div>
          {/* Airdrie POWER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 pl-4 pr-4">
            <div className="bg-gradient-to-r  from-amber-400 to-amber-500 m-4 drop-shadow-2xl rounded-2xl  ">
              <Image
                src="/AirdriePower.png"
                alt="AirdriePower"
                width={650}
                height={400}
                className="drop-shadow-2xl rounded-2xl object-cover h-[45rem] w-full"
              />
            </div>
            <div className="bg-gradient-to-r  from-amber-400 to-amber-500 h-[45rem] p-1 m-4 drop-shadow-2xl rounded-2xl flex flex-col text-center justify-center font-body">
              {" "}
              <div className="sm:mb-12 text-xl font-title text-white text-top">
                {" "}
                About the project
              </div>
              <div className=" m-6 text-sm md:text-lg font-body text-white">
                {" "}
                Airdrie P.O.W.E.R (Protecting Our Women with Emergency
                Resources) is a non-profit organization that gives women in
                Airdrie and surrounding areas a way to leave an abusive
                relationship. It helps create a safe and sustainable environment
                that allows women to feel empowered by providing them with
                emergency resources, education and support for leaving their
                negative situation behind.{" "}
              </div>
              <div className=" m-6 text-sm md:text-lg font-body text-white">
                {" "}
                I developed a diagonstic report that encompassed the target
                market, campaign objectives, message descriptions, promotional
                elements with a timeline and a budget. ​The implementation of
                digital marketing, social media, and events for Airdrie
                P.O.W.E.R to bring more attnetion to domestic voilence.
                Additionally I created web designs, guides for consistentcy for
                the branding portfolio.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 pl-4 pr-4">
            <div className=" bg-slate-100 p-1 m-4 drop-shadow-2xl rounded-lg  h-[4rem] col-span-2 text-center text-2xl ">
              {" "}
              <div className="text-center font-heading text-4xl font-extrabold text-black flex items-center justify-center h-[3.5rem] rounded-2xl">
                {" "}
                EDUCATION
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:ml-20 xl:ml-32">
            <div className="sm:h-[15rem] object-right ">
              <Image
                src="/InceptionU.png"
                alt="InceptionU"
                width={500}
                height={150}
                className="object-center"
              />
            </div>
            <div className="sm:h-[10rem] m-4">
              {" "}
              <Image
                src="/SAIT.png"
                alt="Sait"
                width={500}
                height={150}
                className=" md:mt-10"
              />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className=" flex text-center bg-slate-100 p-2 m-4 drop-shadow-2xl rounded-xl sm:h-10 items-center justify-center ">
              {" "}
              <div className="sm:text-xl text-black rounded-2xl font-title ">
                Certifcate (Full Stack Developer)
              </div>{" "}
            </div>
            {/*  */}
            <div className=" flex text-center bg-slate-100 p-2 m-4 drop-shadow-2xl rounded-xl h-[8rem] md:h-14 lg:h-10 items-center justify-center">
              {" "}
              <div className=" sm:text-xl text-black rounded-2xl font-title ">
                {" "}
                Bachelor's of Applied Business Adminstration (Marketing){" "}
              </div>
            </div>
          </div>
          {/*  */}

          <div className="flex justify-center">
            <a href="https://www.linkedin.com/in/abneetpabyal/">
              {" "}
              <div className=" text-9xl mt-10 mr-5">
                {" "}
                <AiFillLinkedin />
              </div>
            </a>
            <a href="https://github.com/AbneetKP">
              {" "}
              <div className=" text-9xl mt-10 ml-5">
                {" "}
                <AiFillGithub />
              </div>
            </a>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}
