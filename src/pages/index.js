import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // grid 1
    <div>
      <div className="grid  grid-cols-1 md:grid-cols-5">
        <div className="flex flex-col bg-slate-100 h-[40rem] col-span-3 p-4 m-8 mr-4 drop-shadow-2xl rounded-lg">
          <div className=" text-black  text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-red-600 font-heading  ">
            Hi my name is Abneet
          </div>
          <div className="text-black font-body mt-10 mr-20">
            Recently divulged into front-end development. Alongside a bachelors
            degree in applied business adminstration with a majort marekting. My
            appittude for learning has only strengthened with various projects I
            experienced. I have an array of hobbies, from collecting trading
            cards, gaming, hiking, camping and traveling.
          </div>
        </div>

        <div className="flex flex-col self-end bg-slate-100 h-[40rem] col-span-2 m-8 ml-4 drop-shadow-2xl rounded-lg">
          <img
            src="/Abneet.jpg"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      {/* gird 2 */}
      <div className="grid grid-cols-2 pl-4 pr-4">
        <div className="flex flex-col bg-slate-100 h-[35rem] p-4 m-4 drop-shadow-2xl rounded-lg"></div>

        <div className="flex flex-col bg-slate-100 h-[35rem] p-4 m-4 drop-shadow-2xl rounded-lg"></div>
      </div>
    </div>
  );
}
