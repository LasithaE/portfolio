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
    <div className="mt-[90px] md:mt-[60px]">
      <div className="h-screen flex flex-col justify-center items-center mt-[40px] font-bodyFont md:pt-20">
        <div className="block relative rounded-[50%] -mt-[100px] bg-brownColor p-4 border-4 border-brownColor md:-mt-[200px]">
          <Image
            width={400}
            height={400}
            alt="Avatar"
            src="/assets/images/profile_pic.png"
            className="w-[300px] h-[300px] object-cover rounded-[50%]"
          />
        </div>
        <div className="mt-[40px]">
          <h1 className="font-black text-center text-3xl py-4">
            Hi, this is Lasitha 👋🏻
          </h1>
        </div>
        <div className="text-center text-md font-black px-9 mt-[20px] pb-10 text-brownColor md:px-[50px] text-md">
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
  );
};
export default About;
