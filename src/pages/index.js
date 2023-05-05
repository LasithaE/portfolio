import NavBar from "../components/NavBar/NavBar";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Blogs from "./blogs";
export default function Home() {
  return (
    <div className="font-bodyFont flex flex-col gap-4">
      <About />
      <Projects />
      <Skills />
      <Blogs />
    </div>
  );
}
