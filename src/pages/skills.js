import {
  SiNextdotjs,
  SiFigma,
  SiGithub,
  SiGit,
  SiPrisma,
  SiAdobexd,
  SiSketch,
  SiFlask,
  SiDjango,
  SiHtml5,
  SiPostgresql,
  SiReact,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiGraphql,
} from "react-icons/si";
import { ImDatabase } from "react-icons/im";
const Skills = () => {
  const skills = [
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "PostgresQL", icon: <SiPostgresql /> },
    { name: "DBMS", icon: <ImDatabase /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "Prisma", icon: <SiPrisma /> },
  ];

  const tools = [
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Adobe XD", icon: <SiAdobexd /> },
    { name: "Sketch", icon: <SiSketch /> },
    { name: "Figma", icon: <SiFigma /> },
  ];

  return (
    <div className="pt-[100px] h-full font-bodyFont" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">My Skills</h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md text-brownColor text-3xl">
                  {skill.icon}
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
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md text-brownColor text-3xl">
                  {tool.icon}
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
