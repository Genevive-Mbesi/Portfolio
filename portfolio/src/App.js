import React from "react";
import { Routes, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from "./components/home";
import Proficiency from "./components/proficiency";
import Projects from "./components/projects";
import Associations from "./components/associations";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className='bg-teal-900 min-h-screen'>
      <h1 className="text-s text-gray-100 font-semibold font-mono pt-16 pl-20 lg:mb-0 inline-block">
            <Link to="/">Genevive Mbesi</Link>
          </h1>
      <Routes>
        <Route
          path="/"
          element={
            <TransitionGroup>
              <CSSTransition
                key="home"
                timeout={450}
                classNames="fade"
              >
                <Home />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/proficiency"
          element={
            <TransitionGroup>
              <CSSTransition
                key="proficiency"
                timeout={450}
                classNames="fade"
              >
                <Proficiency />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/projects"
          element={
            <TransitionGroup>
              <CSSTransition
                key="projects"
                timeout={450}
                classNames="fade"
              >
                <Projects />
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/associations"
          element={
            <TransitionGroup>
              <CSSTransition
                key="associations"
                timeout={450}
                classNames="fade"
              >
                <Associations />
              </CSSTransition>
            </TransitionGroup>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
