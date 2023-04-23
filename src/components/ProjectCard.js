import React from "react";

const ProjectCard = ({ cardvalue }) => {
  return (
    <div className="border-solid bg-cardColorLight rounded-xl h-[250px]">
      <div className="flex flex-col p-6 text-xl font-black">
        {cardvalue.name}
        <div className="text-lg font-normal">{cardvalue.desc}</div>
        <div className="flex flex-row justify-end">
          <div className="font-bold text-lg">Tech Stack: &nbsp;</div>
          <div className="text-lg font-normal">{cardvalue.techStack}</div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
