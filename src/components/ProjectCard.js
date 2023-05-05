import React from "react";

const ProjectCard = ({ cardvalue }) => {
  return (
    <div className="border-solid flex flex-col justify-between bg-cardColorLight p-4 rounded-xl h-[40%]">
      <div className="px-6 pt-6">
        <div className="text-xl font-black pb-3">{cardvalue.name}</div>
        <div className="text-lg font-normal">{cardvalue.desc}</div>
      </div>
      <div className="flex flex-row px-6 bottom-0 pb-6">
        <div className="font-bold text-lg">Tech Stack: &nbsp;</div>
        <div className="text-lg font-normal">{cardvalue.techStack}</div>
      </div>
    </div>
  );
};
export default ProjectCard;
