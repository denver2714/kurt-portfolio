import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CounterApp = () => {
  const [count, setCount] = useState<number>(0);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-pink-300 p-24 text-center hover:scale-105 duration-150 rounded-xl shadow-xl">
        <h1 className="text-4xl">
          Counter: <span className="text-blue-700">{count}</span>
        </h1>
        <div className="flex space-x-4 mt-4">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 p-2 rounded-2xl font-medium"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 p-2 rounded-2xl font-medium"
          >
            Decrement
          </button>
        </div>
        <div>
          <button
            onClick={() => navigate("/projects")}
            className="bg-orange-500 p-3 rounded-2xl font-medium mt-2"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
