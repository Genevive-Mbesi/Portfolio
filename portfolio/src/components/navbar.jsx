import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
      <div className="px-20 text-s">
          <nav className='py-5 flex justify-between'>
            <h1 className='text-s font-semibold font-mono mr-20 pl-20'>
                <Link to='/'>
                Home
                </Link>
                </h1>
              <ul className='flex items-center mr-20'>
              <li className='mr-5'>
                  <Link to='/proficiency'>
                 Proficiency
                </Link>
                </li>
                <li className='mr-5'>
                  <Link to='/projects'>
                 Projects
                </Link>
                </li>
                <li className='mr-5'>
                  <Link to='/associations'>
                 Associations 
                </Link>
                </li>
              </ul>
          </nav>
          </div>
    )}