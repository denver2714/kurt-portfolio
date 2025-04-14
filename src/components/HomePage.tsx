import kurt from "../images/118152975.jpg";
import react from "../images/react.png";
import tailwind from "../images/tailwind.png";
import typescript from "../images/TypeScript.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-6xl bg-gradient-to-r from-gray-600 to-teal-600 rounded-lg p-6 sm:p-12 flex flex-col sm:flex-row justify-between gap-8 shadow-2xl">
        <div className="space-y-6 flex flex-col items-center sm:items-start">
          <a href="https://github.com/denver2714">
            <img
              src={kurt}
              width="200px"
              className="rounded-full hover:bg-yellow-100 duration-300 p-1"
            />
          </a>

          <p className="text-2xl text-white font-bold text-center sm:text-left">
            TECH STACK
          </p>

          <div className="flex flex-wrap justify-center sm:justify-start gap-6">
            <a href="https://react.dev/">
              <img
                src={react}
                alt="react-logo"
                width="50px"
                className="hover:scale-110 duration-150 cursor-pointer"
              />
            </a>
            <a href="https://tailwindcss.com">
              <img
                src={tailwind}
                alt="tailwind-logo"
                width="50px"
                className="rounded-full hover:scale-110 duration-150 cursor-pointer"
              />
            </a>
            <a href="https://www.typescriptlang.org/">
              <img
                src={typescript}
                alt="typescript-logo"
                width="50px"
                className="hover:scale-110 duration-150 cursor-pointer"
              />
            </a>
            <a href="https://zustand-demo.pmnd.rs/">
              <img
                src="https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg"
                alt="zustand-logo"
                width="50px"
                className="hover:scale-110 duration-150 cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center sm:justify-start">
          <p className="text-white sm:text-2xl text-center sm:text-left leading-relaxed">
            I built these projects to practice responsiveness design as well as
            integrating API's before trying out new technologies. The main
            technologies I used include{" "}
            <span className="text-teal-400">React</span>,
            <span className="text-purple-300"> Tailwind CSS</span>,{" "}
            <span className="text-blue-300">TypeScript</span>, and{" "}
            <span className="text-pink-300">Zustand</span> for lightweight state
            management. I also used React Hook Form to handle form validation
            and management.
            <br />
            <br />
            <span className="text-sm text-amber-400">
              Click my profile and the tech stacks :D
            </span>
            <br />
            <br />
            <button
              className="bg-slate-700 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition"
              onClick={() => navigate("/projects")}
            >
              Next
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
