import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { About } from "./Components/About";
import Nav from "./Components/nav";
import LoanCalcuator from "./Components/LoanCalcuator";
import TaxCalculator from "./Components/TaxCalculator";
import BugTracker from "./Components/Redux/bugtracker";

function App() {
  return (
    <div>
      <Nav></Nav>
      <br />
      <Routes>
        <Route path="/" element={<LoanCalcuator />}></Route>
        <Route path="/loan" element={<LoanCalcuator />}></Route>
        <Route path="/tax" element={<TaxCalculator />}></Route>
        <Route path="/bugtracker" element={<BugTracker />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
