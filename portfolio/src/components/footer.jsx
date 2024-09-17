import React from 'react';
import{AiFillGithub,AiFillLinkedin,AiFillMail}from'react-icons/ai'
import {Link} from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
  return (
    <div>
    <footer className='text-zinc-100 bg-zinc-700 mt-10 pt-10'>
      <div id='footer' className="container mx-auto  flex items-center justify-center flex gap-5 text-3xl text-zinc-100 pt-10">
         <a href= 'https://github.com/Genevive-Mbesi'>
           <AiFillGithub/>
           </a>
           <a href='https://www.linkedin.com/in/genevive-mbesi-5a5a98224/'>
           <AiFillLinkedin/>
           </a>
           <a href='mailto:genmbesi@gmail.com'>
           <AiFillMail/>
          </a>
      </div>
      <div>
        <ul className=' flex justify-center pt-5'>
            <li className='mr-10 '>
             <Link to='/projects'>
              Projects
             </Link>
            </li>
            <li className='mr-10 '>
             <Link to='/associations'>
              Badges
             </Link>
            </li>
            <li className=''>
             <Link to='/proficiency'>
             Technologies
             </Link>
            </li>
        </ul>
      </div>
      <p className=' flex justify-center pt-5'>genmbesi@gmail.com | &copy; {currentYear}</p>
    </footer>
    </div> 
  );
};

export default Footer;
