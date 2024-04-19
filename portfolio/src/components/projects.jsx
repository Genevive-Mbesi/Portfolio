import React from 'react'
import portfolio from '../assets/portfolio.png'
import art from '../assets/artheart.png'
import rental from '../assets/rtm.png'
import './base.css';
import{AiFillGithub}from'react-icons/ai'


function Projects() {
    return (
        <>
            <div className='sections-container'>
                <div className='section-links  font-mono'>
                    <h1 className='section-link-card'>
                        <div><img src={art} alt ='art-heart'></img></div>
                        <p>Wall_art_heart</p>
                        <p>The Wall Art Heart website is committed to presenting a curated selection of art services and products available for purchase.The website is  developed using <span className='text-gray-500'>React </span>
                             and styled with  <span className='text-gray-500'>Tailwind CSS </span>to ensure a seamless and visually appealing experience for customers.</p>
                             <div  id='contactInfo' className='flex gap-5 text-3xl text-gray-100 pt-5' >
                              <a href= 'https://github.com/Genevive-Mbesi/MbesiArt'>
                             <AiFillGithub/>
                              </a>
                              <div className='py-2 font-mono text-xs'>
                             click to view
                             <a href= 'https://mbesiart.vercel.app'>
                      <span className='text-gray-500'> Project</span>
                        </a>
                            </div>   
                             </div>   
                    </h1>
                    <h1 className='section-link-card'>
                        <div><img src={rental} alt ='rtm'></img></div>
                        <p>Rental Management System</p>
                        <p>Rental Management System is a powerful platform designed to help property owners
                            manage their rental properties efficiently,they can easily keep track of properties,tenants,and 
                            rental income,all in one place.
                            Having developed the frontend the following technologies were used <span className='text-gray-500'>JavaScript
                            React (React Router, React Bootstrap, React Auth Kit)</span>
                        </p>
                        <div  id='contactInfo' className='flex gap-5 text-3xl text-gray-100 pt-5' >
                              <a href= 'https://github.com/eugenemrg/rental-management-system'>
                             <AiFillGithub/>
                              </a>
                             </div>   
                    </h1>
                   
                    <h1 className='section-link-card' to='/issues'>
                        <div><img src={portfolio} alt ='portfolio'></img></div>
                        <p>Personal Portfolio</p>
                        <p>
                    
                    This portfolio was designed and developed using <span className='text-gray-500'>React,Tailwind CSS </span> for its design.</p>
                    <div  id='contactInfo' className='flex gap-5 text-3xl text-gray-100 pt-5' >
                              <a href= 'https://github.com/Genevive-Mbesi/Portfolio'>
                             <AiFillGithub/>
                              </a>
                             </div>    
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Projects
                        
