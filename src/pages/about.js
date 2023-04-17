import React from "react";
import {
  faGithub,
  faYoutube,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  const intro = [
    "Hi, I am Lasitha E.",
    "I am a Full Stack (focusing on Frontend) developer who is into open source, cool projects and new tech ! Always looking for exciting remote opportunities to contribute and work on. Currently situated at Bangalore, India and traveling here and there.",
  ];

  return (
    <div className="flex flex-row">
      <div className="flex flex-col ml-[50px]">
        <a
          target="_blank"
          href="https://twitter.com/lasitha_e"
          className="mt-40 mr-10"
        >
          <FontAwesomeIcon icon={faTwitter} size="xl" color="#a43434" />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/@bytesizedlife"
          className="mt-8"
        >
          <FontAwesomeIcon icon={faYoutube} size="xl" color="#a43434" />
        </a>
        <a target="_blank" href="https://github.com/LasithaE" className="mt-8">
          <FontAwesomeIcon icon={faGithub} size="xl" color="#a43434" />
        </a>
        <a
          target="_blank"
          href="https://medium.com/@lasithaeaswaran"
          className="mt-8"
        >
          <FontAwesomeIcon icon={faMedium} size="xl" color="#a43434" />
        </a>
        <a
          target="_blank"
          href="mailto:lasithaeaswaran@gmail.com"
          className="mt-8"
        >
          <FontAwesomeIcon icon={faEnvelope} size="xl" color="#a43434" />
        </a>
      </div>
      <div className="bg-darkPinkColor w-[60%] mt-10 ml-[10%] mr-[100px] p-10">
        <div className="flex flex-col">
          <div className="pb-5 text-2xl font-black text-brownColor">
            {intro[0]}
          </div>
          <div className="text-lg font-regular">{intro[1]}</div>
        </div>
        <div id="lassi" className="mt-4 right-0 bottom-0">
          <Image
            width={200}
            height={200}
            alt="Profile Pic"
            src="/assets/images/profilepic.png"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
{
  /* <div className="h-screen">
      <div className="flex flex-col lg:flex-row">
        <div className=" lg:block justify-center items-center h-screen float-left w-133 ml-110">
          <div className="hidden lg:bg-darkPinkColor w-20 h-20 rounded-md mt-20"></div>
          <div className="mt-10 items-center justify-center -ml-10 w-[70%] h-[75%] lg:absolute bg-cardColorLight ml-102 w-129 h-120 rounded-md -mt-11"></div>
          <div className="hidden lg:bg-brownColor w-20 h-20 rounded-md float-right mt-114 ml-111"></div>
        </div>

        <div id="mango" className="flex flex-col lg:flex-row ">
          <div className="ml-140">
            <Image
              width={300}
              height={300}
              alt="Profile Pic"
              src="/assets/images/profilepic.png"
            />
          </div>
          <div className="bg-cardColorLight w-14 h-14 rounded-full ml-140 -mt-20 absolute"></div>
        </div>
      </div>
    </div> */
}
