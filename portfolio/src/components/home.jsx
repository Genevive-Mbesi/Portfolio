import React from 'react'
import{AiFillGithub,AiFillLinkedin,AiFillMail}from'react-icons/ai'
import assets from '../assets/girl.jpg'
import {Link} from "react-router-dom";


export default function Home() {
  return (
    <div>
    <main className=' px-20 md:px-20 lg:px-40' >
      <section className=' min-h-screen ' >
        <nav className='py-10 flex justify-between'>
          <h1 className='text-s  font-semibold font-mono pl-10'>GENEVIVE MBESI</h1>
            <ul className='flex items-center mr-20'>
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
              <li className='mr-5'>
                <Link to='/contacts'>
               Contact
              </Link>
              </li>
            </ul>
        </nav>
        <div className="container bg-gray-500 mx-auto px-20 text-gray-100 p-10">
        <h1 className='font-bold font-mono md:text-5xl'>Genevive<br></br>Mbesi</h1>
          <div className='flex'> 
          <img src={assets} alt ='girl'className='mx-aut0 mt-20 overflow-hidden rounded-full w-80 h-80 md:h-96 md:w-96' />
          <div className='px-20 py-20 text-2xl mx-auto font-semibold'> <span className='text-gray-700'>Mbesi</span> is a software engineer and artist who enjoys<br></br>building projects that create solutions<br></br>to modern problems through tech.<br></br>
           Tech to her is a portal to actualizing endless ideas and bringing art to life.
          <div className='flex gap-5 text-3xl text-gray-700 pt-5' ><AiFillGithub/> <AiFillLinkedin/><AiFillMail/></div>
          </div>
        </div>
        </div>
      </section>
    </main>
    </div>
  )
}