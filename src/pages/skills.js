import { faCode, faTools } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  const skills = [
    { name: "React", icon: faCode },
    { name: "Next.js", icon: faCode },
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3Alt },
  ];

  const tools = [
    { name: "GitHub", icon: faTools },
    { name: "Git", icon: faTools },
    { name: "Adobe XD", icon: faTools },
  ];

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">My Skills</h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-pink-100 text-pink-700">
                  <FontAwesomeIcon icon={skill.icon} className="text-lg" />
                </div>
                <div className="mt-3 text-base font-medium text-gray-900">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900">My Tools</h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-700">
                  <FontAwesomeIcon icon={tool.icon} className="text-lg" />
                </div>
                <div className="mt-3 text-base font-medium text-gray-900">
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
