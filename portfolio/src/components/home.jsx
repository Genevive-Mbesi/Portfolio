import React from 'react'
import assets from '../assets/girl.jpg'
import Proficiency from './proficiency';
import Contacts from './contacts';
import Associations from './associations';
import {Link} from "react-router-dom";
import Footer from './footer';



export default function Home() {
  return (
    <div>
        <div className="container bg-slate-900 w-full mx-auto px-20 text-gray-100 p-10">
        <h1 className='font-bold font-mono md:text-5xl'>Genevive<br></br>Mbesi</h1>
          <div className='text-s'> 
          <img src={assets} alt ='girl'className='w-40 rounded-full overflow-hidden container' />
          <div className=' py-10 text-xl mx-auto font-mono'> <span className='text-gray-500'>Mbesi</span> is a software engineer and a passionate creative artist,<br></br>she enjoys building projects with fun solutions <br></br>to  modern world problems through tech.<br></br>
           Tech expresses her creativity through problem solving.
          <Contacts/>
          <div className='py-2 font-mono text-xs'>
          click to view
          <Link to='/projects'>
          <span className='text-gray-500'> Projects</span>
            </Link>
            </div>    
          </div>
        </div>
        </div>
        <div>
      <Proficiency/>
      <Associations/> 
      <Footer/>
    </div>
    </div>
  )
}