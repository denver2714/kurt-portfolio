import Register from "./components/Register.tsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage.tsx";
import HomePage from "./components/HomePage.tsx";
import Projects from "./components/Projects.tsx";
import CounterApp from "./components/CounterApp.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/register" element={<Register />} />
        <Route path="/projects/meals" element={<MainPage />} />
        <Route path="/projects/counter" element={<CounterApp />} />
      </Routes>
    </Router>
  );
};

export default App;
