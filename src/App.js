import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import ViewData from "./components/ViewData";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/view-all" element={<ViewData />} />
      </Routes>
    </Router>
  );
}

export default App;
