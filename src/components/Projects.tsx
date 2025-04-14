import { Link } from "react-router-dom";

const cardStyle =
  "w-[300px] h-[220px] flex flex-col justify-center items-center text-center text-2xl font-thin p-6 bg-white rounded-2xl duration-150 shadow";

const Projects = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100 px-4">
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
        <Link to="/projects/counter">
          <div
            className={`${cardStyle} border border-blue-500 hover:border-blue-800 hover:border-2 hover:scale-105`}
          >
            <h1 className="text-2xl font-thin mb-2">Counter App</h1>
            <p className="text-sm">My very first project in React</p>
          </div>
        </Link>

        <Link to="/projects/register">
          <div
            className={`${cardStyle} border border-red-500 hover:border-red-800 hover:border-2 hover:scale-105`}
          >
            <h1 className="text-2xl font-thin mb-2">Register Form</h1>
            <p className="text-sm">
              Trying out react-hook-form for easier form fields
            </p>
          </div>
        </Link>

        <Link to="/projects/meals">
          <div
            className={`${cardStyle} border border-green-500 hover:border-green-800 hover:border-2 hover:scale-105`}
          >
            <h1 className="text-2xl font-thin mb-2">Meal Search</h1>
            <p className="text-sm">
              To practice API integration to my React projects as well as the
              search query
            </p>
          </div>
        </Link>

        <Link to="/">
          <div
            className={`${cardStyle} border border-purple-500 hover:border-purple-800 hover:border-2 hover:scale-105`}
          >
            Profile Details
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
