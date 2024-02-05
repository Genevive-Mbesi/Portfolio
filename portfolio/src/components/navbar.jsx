import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container items-center justify-center mx-auto text-gray-100 text-s">
      <nav className="py-10 flex flex-col items-center lg:flex-row lg:justify-between">
        <h1 className="text-s font-semibold font-mono mb-4 lg:mb-0">
          <Link to="/">Home</Link>
        </h1>
        <ul className="flex flex-col lg:flex-row lg:items-center">
          <li className="mb-4 lg:mb-0 lg:mr-4">
            <Link to="/proficiency">Proficiency</Link>
          </li>
          <li className="mb-4 lg:mb-0 lg:mr-4">
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/associations">Tags</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
