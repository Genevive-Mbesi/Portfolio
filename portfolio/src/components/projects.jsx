import React from 'react'
import {Link} from 'react-router-dom'
import portfolio from '../assets/portfolio.png'
import art from '../assets/artheart.png'
import rental from '../assets/rtm.png'
import skillcode from '../assets/skill.png'
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
                        <p>The Wall Art Heart website is committed to presenting a curated selection of art services and products available for purchase.I developed the website using <span className='text-gray-500'>React </span>
                             and styled with  <span className='text-gray-500'>Tailwind CSS </span>to ensure a seamless and visually appealing experience for customers.</p>
                             <div  id='contactInfo' className='flex gap-5 text-3xl text-gray-100 pt-5' >
                              <a href= 'https://github.com/Genevive-Mbesi/MbesiArt'>
                             <AiFillGithub/>
                              </a>
                             </div>   
                    </h1>
                    <h1 className='section-link-card'>
                        <div><img src={rental} alt ='rtm'></img></div>
                        <p>Rental Management System</p>
                        <p>Rental Management System is a powerful platform designed to help property owners
                            manage their rental properties efficiently,they can easily keep track of properties,tenants,and 
                            rental income,all in one place.
                            Having actively participated in the development of the frontend,I used <span className='text-gray-500'>JavaScript
                            React (React Router, React Bootstrap, React Auth Kit)</span>
                        </p>
                        <div  id='contactInfo' className='flex gap-5 text-3xl text-gray-100 pt-5' >
                              <a href= 'https://github.com/eugenemrg/rental-management-system'>
                             <AiFillGithub/>
                              </a>
                             </div>   
                    </h1>
                    <h1 className='section-link-card'>
                        <div><img src={skillcode} alt ='skillcode'></img></div>
                        <p>Skill-Code</p>
                        <p>SkillCode serves as<br></br> a simulated platform<br></br> wherein students<br></br> can evaluate <br></br>their skills <br></br>
                        and mentors can <br></br>craft personalized <br></br>assessments <br></br>to evaluate <br></br>their students' <br></br>abilities effectively.<br></br>
                        Having actively <br></br>participated <br></br> in the development of the frontend,<br></br>I used <br></br>
                             <span className='text-gray-500'>Vite+React,TailwindCSS</span></p>
                             <div  id='contactInfo' className='flex gap-5 text-3xl text-gray-100 pt-5' >
                              <a href= 'https://github.com/Chisaina69/Skill-Code'>
                             <AiFillGithub/>
                              </a>
                             </div>     
                        
                    </h1>
                    <Link className='section-link-card' to='/issues'>
                        <div><img src={portfolio} alt ='portfolio'></img></div>
                        <p>Personal Portfolio</p>
                        <p>
                    I created this portfolio specifically to showcase my work
                    , utilizing  <span className='text-gray-500'>React,Tailwind CSS </span> for its design.</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Projects
                        
