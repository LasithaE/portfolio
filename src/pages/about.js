import React from "react";
import {
  faGithub,
  faYoutube,
  faMedium,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  const intro = [
    "Hi, I am Lasitha 👋🏻",
    "I am a Full Stack (focusing on Frontend) developer who is into open source, cool projects and new tech !",
    "Always looking for exciting remote opportunities to contribute and work on. Currently situated at Bangalore, India and traveling here and there.",
  ];

  return (
    <div>
      <div className="flex flex-row lg:hidden">
        <div className="flex flex-col ml-[50px] mr-[60px]">
          <a
            target="_blank"
            href="https://twitter.com/lasitha_e"
            className="mt-[100px]"
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
          <a
            target="_blank"
            href="https://github.com/LasithaE"
            className="mt-8"
          >
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
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lasithae/"
            className="mt-8"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" color="#a43434" />
          </a>
        </div>

        <div className="flex flex-col gap-6 rounded-xl justify-center items-center pb-15 mt-[50px] bg-darkPinkColor mr-[60px] md:pb-10 pt-10 -mr-[30px]">
          <div className="flex flex-col pr-7 md:pt-10">
            <div className="pb-7 text-center text-3xl font-black px-5 mt-[40px] ml-[20px] text-brownColor">
              {intro[0]}
            </div>

            <div className="text-lg text-center font-regular px-6 ml-[20px]">
              {intro[1]}
            </div>
            <div className="text-lg text-center pt-[40px] font-regular px-6 ml-[20px]">
              {intro[2]}
            </div>
            <div className="hidden"></div>
          </div>

          <Image
            width={200}
            height={200}
            objectFit="contain"
            alt="Profile Pic"
            className="block rounded-[50%] bg-brownColor p-2 mt-[80px] mr-[6px] -mb-[30%]"
            src="/assets/images/profilepic3.png"
          />
        </div>
      </div>
      <div className="hidden lg:flex flex-row mt-111">
        <div className="flex flex-col gap-6 rounded-xl justify-center items-center min-w-2xl bg-darkPinkColor mt-[5%] ml-[10%] pr-8 mr-[10%]">
          <div className="pb-7 text-center text-3xl font-black text-brownColor mt-10 ml-[20px]">
            {intro[0]}
          </div>

          <div className="text-xl text-center font-regular ml-[20px]">
            {intro[1]}
          </div>
          <div className="text-xl text-center font-regular ml-[20px]">
            {intro[2]}
          </div>
          <div className="flex flex-row  justify-center items-center gap-9 mb-10 mx-10">
            <a
              target="_blank"
              href="https://twitter.com/lasitha_e"
              className="mt-8"
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
            <a
              target="_blank"
              href="https://github.com/LasithaE"
              className="mt-8"
            >
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
            <a
              target="_blank"
              href="https://www.linkedin.com/in/lasithae/"
              className="mt-8"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" color="#a43434" />
            </a>
          </div>
        </div>
        <div className="w-[60%] mr-102 mt-111">
          <Image
            width={200}
            height={200}
            objectFit="contain"
            alt="Profile Pic"
            className="block rounded-[50%] bg-brownColor p-2"
            src="/assets/images/profilepic3.png"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
