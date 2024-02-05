import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container items-center justify-center mx-auto text-gray-100 text-s">
      <nav className="py-10 pl-4 lg:pl-0 flex flex-col lg:flex-row lg:justify-between">
        <div className="flex items-center">
          <h1 className="text-s font-semibold font-mono mb-4 lg:mb-0">
            <Link to="/">Home</Link>
          </h1>
          <div className="lg:hidden ml-auto">
            {/* Button to toggle the menu on small screens */}
            <button onClick={toggleMenu}>Toggle Menu</button>
          </div>
        </div>
        <ul
          className={`${
            showMenu ? "flex flex-col" : "hidden"
          } lg:flex flex-col lg:flex-row lg:items-center absolute top-0 right-4 mt-4 bg-gray-800 p-4 rounded-lg`}
        >
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
