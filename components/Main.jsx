import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typed from "react-typed";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-3"
            strings={[
              "Whoo!",
              "Thanks for coming!",
              "Let's build something AMAZING!",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#5651e5]"> Marius</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Fullstack Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I’m focused on building responsive fullstack web applications while
            learning new technologies.
          </p>
          <p className="text-[#5651e5] font-bold text-3xl">
            I Code Therefore I Am.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/suciu-marius-72a840245/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg text-[#5651e5] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/sumarius56"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg text-[#5651e5] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg text-[#5651e5] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
