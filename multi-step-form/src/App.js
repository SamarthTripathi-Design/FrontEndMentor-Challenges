import "./App.css";
import { Routes, Route } from "react-router-dom";
import Info from "./components/PersonalInfo/Info";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Info} />
    </Routes>
  );
}

export default App;
