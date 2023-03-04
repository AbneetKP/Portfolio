import Head from "next/head";
import Image from "next/image";
import { Inter, Island_Moments } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
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
    { url: "/landing-v.png" },
    { url: "/landing.png" },
    { url: "/Onepager1.png" },
    { url: "/Onepager2.png" },
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
      <div className=" md:ml-24 md:mr-24 md:mt-20 md:mb-20 h-max">
        <div className="p-10">
          {/* // grid 1 */}
          <div className="grid  grid-cols-1 sm:grid-cols-5">
            <div className="flex flex-col justify-between bg-gradient-to-r from-cyan-500 to-blue-500 h-[40rem] col-span-3 p-4 ml-8 mt-8 mr-4 mb-4 drop-shadow-2xl rounded-lg">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400 font-heading p-4 m-8">
                Hi my name is Abneet
                <div className="font-title text-xl mt-4">
                  {" "}
                  Frontend Developer
                </div>
              </div>
              <div className="text-white font-body m-8">
                Recently divulged into front-end development. Alongside a
                bachelors degree in applied business adminstration with a majort
                marekting. My appittude for learning has only strengthened with
                various projects I experienced. I have an array of hobbies, from
                collecting trading cards, gaming, hiking, camping and traveling.
              </div>
            </div>

            <div className="flex flex-col self-end h-[40rem] col-span-2 mr-8 mt-8 ml-4 mb-4 drop-shadow-2xl rounded-lg">
              <img
                src="/Abneet-1.jpg"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* gird 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 pl-4 pr-4">
            {/* Park n Bark */}
            <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 p-1 m-4 drop-shadow-2xl rounded-2xl group">
              <div
                style={{
                  backgroundImage: `url(${parkNBarkSlides[currentIndexP].url})`,
                }}
                className="  w-full h-full bg-cover bg-bottom rounded-2xl duration-500"
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
            <div className="flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500 h-[40rem] p-1 m-4 drop-shadow-2xl rounded-2xl group">
              <div
                style={{
                  backgroundImage: `url(${masaheSlides[currentIndex].url})`,
                }}
                className="  w-full h-full bg-cover bg-bottom rounded-2xl duration-500"
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
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-1 m-4 drop-shadow-2xl rounded-2xl h-[45rem]">
              <img
                src="/Happyfats.png"
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
            <div className="bg-slate-100 h-[45rem] p-1 m-4 drop-shadow-2xl rounded-2xl text-center font-body flex flex-col justify-center">
              <div className="m-6 ">
                {" "}
                Happy fats is a nourishing and easy snack for outdoor
                adventures, rush- hour traffic commutes, bagged lunches and
                more. The company brand features an outdoorsy and natural
                essence and it's obvious that it's made for nature lovers and
                people on-the-go.
              </div>
              <div className=" m-6">
                {" "}
                Researched and developed multi-channel communications and
                marketing plans, aligning with company goals. Developed
                comprehensive advertising plan including prices and value
                proposition, while maintaining budget of $1000 including (SEM,
                magazine panel, and social media advertising) Increased
                followers by 30% after implementation.
              </div>
            </div>
          </div>
          {/* Airdrie POWER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 pl-4 pr-4">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-1 m-4 drop-shadow-2xl rounded-2xl  h-[45rem]">
              <img
                src="/AirdriePower.png"
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
            <div className="bg-slate-100 h-[45rem] p-1 m-4 drop-shadow-2xl rounded-2xl flex flex-col text-center justify-center font-body">
              {" "}
              <div className=" m-6">
                {" "}
                Airdrie P.O.W.E.R (Protecting Our Women with Emergency
                Resources) is a non-profit organization that gives women in
                Airdrie and surrounding areas a way to leave an abusive
                relationship. It helps create a safe and sustainable environment
                that allows women to feel empowered by providing them with
                emergency resources, education and support for leaving their
                negative situation behind.{" "}
              </div>
              <div className=" m-6">
                {" "}
                Target market, campaign objectives, message descriptions,
                promotional elements with a timeline and a budget that will help
                Airdrie P.O.W.E.R gain more brand awareness. ​The implementation
                of digital marketing, social media, as well as events and
                experiences are essential to help attract more awareness and
                increased funding.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
