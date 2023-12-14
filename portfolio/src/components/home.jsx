import React from 'react'
import assets from '../assets/girl.jpg'
import {Link} from "react-router-dom";
import Footer from './footer';
import Proficiency from './proficiency';
import Contacts from './contacts';
import Associations from './associations';



export default function Home() {
  return (
    <div>
    <main className=' px-20 md:px-20 lg:px-40' >
      <section className=' min-h-screen ' >
        <nav className='py-10 flex justify-between'>
          <h1 className='text-s  font-semibold font-mono pl-10'>GENEVIVE MBESI</h1>
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
        <div className="container bg-slate-900 mx-auto px-20 text-gray-100 p-10">
        <h1 className='font-bold font-mono md:text-5xl'>Genevive<br></br>Mbesi</h1>
          <div className='flex'> 
          <img src={assets} alt ='girl'className='mx-aut0 mt-20 overflow-hidden bg-indigo-400  rounded-full shadow-2xl shadow-indigo-500/50 rounded-full w-80 h-80 md:h-96 md:w-96' />
          <div className='px-20 py-20 text-2xl mx-auto font-semibold'> <span className='text-gray-500'>Mbesi</span> is a software engineer and artist with passion for creativity,<br></br>she enjoys building projects that create fun solutions <br></br>to our modern world problems through tech.<br></br>
           Tech to her is way of expressing her creativity in problem solving.
          <Contacts/>
          </div>
        </div>
        </div>
        <div>
       <Associations/>   
      <Proficiency/>
      <Footer />
    </div>
      </section>
    </main>
    </div>
  )
}