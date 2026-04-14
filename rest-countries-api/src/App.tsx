import { Navbar } from "./componets/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useTheme } from "./hooks/useTheme";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="app__container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:cca3" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
