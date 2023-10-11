import "./App.css";
import { Routes, Route } from "react-router-dom";
import Info from "./components/PersonalInfo/Info";
import Plan from "./components/Plan/Plan";
import AddOns from "./components/AddOns/AddOns";
import Summary from "./components/Summary/Summary";
import Confirmation from "./components/Confirmation/Confirmation";

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Info} />
      <Route exact path="/PersonalInfo" Component={Info} />
      <Route exact path="/Plan" Component={Plan} />
      <Route exact path="/AddOns" Component={AddOns} />
      <Route exact path="/Summary" Component={Summary} />
      <Route exact path="/Confirmation" Component={Confirmation} />
    </Routes>
  );
}

export default App;
