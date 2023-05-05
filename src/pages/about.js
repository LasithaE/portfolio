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
  const intro =
    "I'm a Full Stack developer with a focus on Frontend, passionate about open source, innovative projects, and emerging technologies! I'm always on the lookout for exciting remote opportunities to contribute and grow. I am currently based in Bangalore (India). I enjoy traveling and exploring new places.";

  return (
    <div>
      <div className=" h-screen flex flex-col justify-center items-center mt-[40px] font-bodyFont md:pt-20">
        <div className="w-full flex justify-center ">
          <Image
            width={300}
            height={300}
            alt="Avatar"
            src="/assets/images/profilepic3.png"
            className="block relative rounded-[50%] -mt-[100px] bg-brownColor p-4 border-4 border-brownColor md:-mt-[200px]"
          />
        </div>
        <div className="mt-[40px]">
          <h1 className="font-black text-center text-3xl py-4">
            Hi, this is Lasitha 👋🏻
          </h1>
        </div>
        <div className="text-center text-md font-black px-5 mt-[20px] pb-10 text-brownColor md:px-[50px] text-md">
          {intro}
        </div>
        <div className="flex gap-9">
          <a target="_blank" href="https://twitter.com/lasitha_e">
            <FontAwesomeIcon icon={faTwitter} size="xl" color="#a43434" />
          </a>
          <a target="_blank" href="https://www.youtube.com/@bytesizedlife">
            <FontAwesomeIcon icon={faYoutube} size="xl" color="#a43434" />
          </a>
          <a target="_blank" href="https://github.com/LasithaE">
            <FontAwesomeIcon icon={faGithub} size="xl" color="#a43434" />
          </a>
          <a target="_blank" href="https://medium.com/@lasithaeaswaran">
            <FontAwesomeIcon icon={faMedium} size="xl" color="#a43434" />
          </a>
          <a target="_blank" href="mailto:lasithaeaswaran@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="xl" color="#a43434" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/lasithae/">
            <FontAwesomeIcon icon={faLinkedin} size="xl" color="#a43434" />
          </a>
        </div>
      </div>
    </div>
    // <div className="h-screen font-bodyFont" id="about">
    //   <div className="flex flex-row lg:hidden">
    //     <div className="flex flex-col ml-[50px] mr-[60px]">
    //       <a
    //         target="_blank"
    //         href="https://twitter.com/lasitha_e"
    //         className="mt-[100px]"
    //       >
    //         <FontAwesomeIcon icon={faTwitter} size="xl" color="#a43434" />
    //       </a>
    //       <a
    //         target="_blank"
    //         href="https://www.youtube.com/@bytesizedlife"
    //         className="mt-8"
    //       >
    //         <FontAwesomeIcon icon={faYoutube} size="xl" color="#a43434" />
    //       </a>
    //       <a
    //         target="_blank"
    //         href="https://github.com/LasithaE"
    //         className="mt-8"
    //       >
    //         <FontAwesomeIcon icon={faGithub} size="xl" color="#a43434" />
    //       </a>
    //       <a
    //         target="_blank"
    //         href="https://medium.com/@lasithaeaswaran"
    //         className="mt-8"
    //       >
    //         <FontAwesomeIcon icon={faMedium} size="xl" color="#a43434" />
    //       </a>
    //       <a
    //         target="_blank"
    //         href="mailto:lasithaeaswaran@gmail.com"
    //         className="mt-8"
    //       >
    //         <FontAwesomeIcon icon={faEnvelope} size="xl" color="#a43434" />
    //       </a>
    //       <a
    //         target="_blank"
    //         href="https://www.linkedin.com/in/lasithae/"
    //         className="mt-8"
    //       >
    //         <FontAwesomeIcon icon={faLinkedin} size="xl" color="#a43434" />
    //       </a>
    //     </div>

    //     <div className="flex flex-col gap-6 rounded-xl justify-center items-center pb-15 mt-[50px] bg-darkPinkColor mr-[60px] md:pb-10 pt-10 -mr-[30px]">
    //       <div className="flex flex-col pr-7 md:pt-10">
    //         <div className="pb-7 text-center text-3xl font-black px-5 mt-[40px] ml-[20px] text-brownColor">
    //           {intro[0]}
    //         </div>

    //         <div className="text-lg text-center font-regular px-6 ml-[20px]">
    //           {intro[1]}
    //         </div>
    //         <div className="text-lg text-center pt-[40px] font-regular px-6 ml-[20px]">
    //           {intro[2]}
    //         </div>
    //         <div className="hidden"></div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="hidden lg:flex flex-row mt-111">
    //     <div className="flex flex-col gap-6 rounded-xl justify-center items-center min-w-2xl bg-darkPinkColor mt-[5%] ml-[10%] pr-8 mr-[10%]">
    //       <div className="pb-7 text-center text-3xl font-black text-brownColor mt-10 ml-[20px]">
    //         {intro[0]}
    //       </div>

    //       <div className="text-xl text-center font-regular ml-[20px]">
    //         {intro[1]}
    //       </div>
    //       <div className="text-xl text-center font-regular ml-[20px]">
    //         {intro[2]}
    //       </div>
    //       <div className="flex flex-row  justify-center items-center gap-9 mb-10 mx-10">
    //         <a
    //           target="_blank"
    //           href="https://twitter.com/lasitha_e"
    //           className="mt-8"
    //         >
    //           <FontAwesomeIcon icon={faTwitter} size="xl" color="#a43434" />
    //         </a>
    //         <a
    //           target="_blank"
    //           href="https://www.youtube.com/@bytesizedlife"
    //           className="mt-8"
    //         >
    //           <FontAwesomeIcon icon={faYoutube} size="xl" color="#a43434" />
    //         </a>
    //         <a
    //           target="_blank"
    //           href="https://github.com/LasithaE"
    //           className="mt-8"
    //         >
    //           <FontAwesomeIcon icon={faGithub} size="xl" color="#a43434" />
    //         </a>
    //         <a
    //           target="_blank"
    //           href="https://medium.com/@lasithaeaswaran"
    //           className="mt-8"
    //         >
    //           <FontAwesomeIcon icon={faMedium} size="xl" color="#a43434" />
    //         </a>
    //         <a
    //           target="_blank"
    //           href="mailto:lasithaeaswaran@gmail.com"
    //           className="mt-8"
    //         >
    //           <FontAwesomeIcon icon={faEnvelope} size="xl" color="#a43434" />
    //         </a>
    //         <a
    //           target="_blank"
    //           href="https://www.linkedin.com/in/lasithae/"
    //           className="mt-8"
    //         >
    //           <FontAwesomeIcon icon={faLinkedin} size="xl" color="#a43434" />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default About;
