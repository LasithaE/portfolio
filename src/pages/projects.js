import React from "react";
import ProjectCard from "@/components/ProjectCard";
const Projects = () => {
  const projects = [
    {
      id: "0",
      name: "CryptoTracker",
      desc: "A cryptocurrency tracker Google Chrome extension using ReactJS and using CoinGecko API.",
      techStack: "React, REST API",
    },
    {
      id: "1",
      name: "ChittiGo",
      desc: "A Flutter integrated with Firebase App made as a submission for Finastra Hackathon 2020.",
      techStack: "Flutter, Firebase",
    },
    {
      id: "2",
      name: "Personality Prediction Model",
      desc: "A Machine learning model made with Python Algorithms (used here is K-means algorithm).",
      techStack: "Python & its algorithms",
    },
    {
      id: "3",
      name: "Boart",
      desc: "A twitter bot, done as a submissions for OpenHack 2020 that tweets about a piece of art and its details daily, this was made with beautifulsoup, Selenium and Tweepy module.",
      techStack: "Python & its algorithms",
    },
    {
      id: "4",
      name: "SerialKillerMuseum",
      desc: "A web-scraping project made to view a list of serial killers according to the selected country made with HTML, CSS, JavaScript and beautifulsoup module in Python for webscraping.",
      techStack: "Python & its algorithms",
    },
  ];
  return (
    <div
      id="projects"
      className="font-bodyFont px-7 pt-[70px] h-full md:pt-[100px]"
    >
      <div className="text-3xl text-center font-black pb-10">Projects</div>
      <div className="hidden md:flex flex-row m-4 grid-row-2 gap-4">
        <div className="flex flex-col gap-4">
          {projects.map((project) =>
            project.id % 2 === 0 ? (
              <ProjectCard key={project.id} cardvalue={project} />
            ) : null
          )}
        </div>

        <div className="flex flex-col gap-4">
          {projects.map((project) =>
            project.id % 2 !== 0 ? (
              <ProjectCard key={project.id} cardvalue={project} />
            ) : null
          )}
        </div>
      </div>
      <div className="block md:hidden flex flex-row grid-row-2 pt-5">
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} cardvalue={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
