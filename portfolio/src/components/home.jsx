import React from 'react'
import assets from '../assets/girl.jpg'
import Contacts from './contacts';
import {Link} from "react-router-dom";
import Footer from './footer';
import Navbar from './navbar';



export default function Home() {
  return (
    <div>
        <div className="container  w-full mx-auto px-20 text-gray-100 p-10">
          <Navbar/>
        <h1 className='font-bold font-mono md:text-5xl'>Genevive<br></br>Mbesi</h1>
          <div className='text-s'> 
          <img src={assets} alt ='girl'className='w-40 rounded-full overflow-hidden container' />
          <div className=' py-10 text-xl mx-auto font-mono'> <span className='text-gray-500'>Mbesi</span> is a software engineer and an enthusiastic creative artist,<br></br>she enjoys building tech projects by coming up with fun solutions <br></br>to solve modern world problems.<br></br>
           Her love for creativity has fostered her growth and journey in the tech space and she is always eager to apply her creativity and expertise.
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
      <Footer/>
    </div>
    </div>
  )
}