import React from 'react';
import{AiFillGithub,AiFillLinkedin,AiFillMail}from'react-icons/ai'
import {Link} from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div id='footer' className="container mx-auto flex items-center justify-center flex gap-5 text-3xl text-slate-900 pt-5">
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
            <li className='mr-10 list-disc'>
             <Link to='/projects'>
              Projects
             </Link>
            </li>
            <li className='mr-10 list-disc'>
             <Link to='/associations'>
             Associations 
             </Link>
            </li>
            <li className='list-disc'>
             <Link to='/proficiency'>
             Proficiency
             </Link>
            </li>
        </ul>
      </div>
      <p className=' flex justify-center pt-5'>genmbesi@gmail.com | &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
