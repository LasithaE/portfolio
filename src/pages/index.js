import NavBar from "../components/NavBar/NavBar";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Blogs from "./blogs";
import Resume from "./resume";
export default function Home() {
  return (
    <div className="font-bodyFont flex flex-col gap-4">
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Blogs />
      <Resume />
    </div>
  );
}
