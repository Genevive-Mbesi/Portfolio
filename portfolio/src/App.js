import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/home";
import Proficiency from "./components/proficiency";
import Projects from "./components/projects";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proficiency" element={<Proficiency />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
