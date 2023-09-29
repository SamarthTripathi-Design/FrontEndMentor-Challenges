import "./App.css";
import { Routes, Route } from "react-router-dom";
import Info from "./components/PersonalInfo/Info";
import Plan from "./components/Plan/Plan";

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Info} />
      <Route exact path="/PersonalInfo" Component={Info} />
      <Route exact path="/Plan" Component={Plan} />
    </Routes>
  );
}

export default App;
