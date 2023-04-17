import NavBar from "../components/NavBar/NavBar";
import About from "./about";
export default function Home() {
  return (
    <div className="font-bodyFont flex flex-col gap-4">
      <NavBar />
      <About />
    </div>
  );
}
