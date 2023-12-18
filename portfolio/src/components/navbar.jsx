import React from "react";
import {Link} from "react-router-dom";
import{AiOutlineMenuFold}from'react-icons/ai'

export default function Navbar() {
    return (
      <div className=" container items-center justify-center mx-auto text-gray-100 text-s">
          <nav className='py-10 flex justify-between'>
            <h1 className='text-s font-semibold font-mono mr-20 pl-20'>
                <Link to='/'>
                Home
                </Link>
                </h1>   
                <div className="hidden sm:block">links 
                                
              <ul className='flex items-center mr-20'>
              <li className='mr-6'>
                  <Link to='/proficiency'>
                 Proficiency
                </Link>
                </li>
                <li className='mr-6'>
                  <Link to='/projects'>
                 Projects
                </Link>
                </li>
                <li >
                  <Link to='/associations'>
                 Tags
                </Link>
                </li>
              </ul>
              </div>
              <div/>
              
          </nav>
          </div>
    )}