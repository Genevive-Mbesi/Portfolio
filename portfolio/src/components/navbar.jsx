import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";


export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
 
  const navContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
  };
  const headingStyle = {
    backgroundColor:'LightCoral',
    padding: '18px',
    fontFamily: 'Georgia,serif',
    color: 'LavenderBlush',
    cursor: 'pointer',
    alignItems:'center',
    justifyContent:'center',
  };

  return (
    <div style={headingStyle}  >
      <nav style={navContainer} >
        <div className="flex items-center">
          <div className="lg:hidden text-rose-950 lg:flex flex-col lg:items-centerlg:items-center absolute top-8 right-4 mt-2 ">
            <h1 onClick={toggleMenu} className="cursor-pointer">
              <AiOutlineMenu />
            </h1>
          </div>
        </div>
        <ul
          className={`${
            showMenu
              ? "flex flex-col  font-serif  lg:hidden p-2 lg:items-center absolute top-14 right-6 mt-2 z-10  "
              : "hidden"
          } lg:flex lg:flex-row lg:items-center flex`}
        >
          <li style={headingStyle}>
            <Link to="/" >
              Home
            </Link>
          </li>
          <li style={headingStyle}>
            <Link to="/projects">
              Projects
            </Link>
          </li>
          <li style={headingStyle}>
            <Link to="/proficiency">
              Technologies
            </Link>
          </li>
          <li style={headingStyle}>
            <Link to="/associations">
              Badges
            </Link>
          </li> 
        </ul>
      </nav>
    </div>
  );
}