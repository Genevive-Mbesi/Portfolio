import React from 'react'
import assets from '../assets/girl.jpg'
import Footer from './footer';
import Proficiency from './proficiency';
import Contacts from './contacts';
import Associations from './associations';
import {Link} from "react-router-dom";



export default function Home() {
  return (
    <div >
        <div className="container bg-slate-900 mx-auto px-20 text-gray-100 p-10">
        <h1 className='font-bold font-mono md:text-5xl'>Genevive<br></br>Mbesi</h1>
          <div className='text-s'> 
          <img src={assets} alt ='girl'className='w-40 rounded-full overflow-hidden container' />
          <div className=' py-10 text-2xl mx-auto font-mono'> <span className='text-gray-500'>Mbesi</span> is a software engineer and artist with a passion for creativity,<br></br>she enjoys building projects that create fun solutions <br></br>to our modern world problems through tech.<br></br>
           Tech to her is way of expressing her creativity in problem solving.
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
      <Associations/> 
      <Proficiency/>
      <Footer />
    </div>
    </div>
  )
}