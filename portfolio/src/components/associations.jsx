import React from 'react'
import moringa from '../assets/Moringa.png'
import './base.css';


function Projects() {
    return (
        <>

            <div className='sections-container'>
                <div className='section-links  font-mono'>
                    <h1 className='section-link-card'>
                        <div><img src={moringa} alt ='Moringa School'></img></div>
                        <p>Moringa School</p>
                        <p>Training : Moringa School<br></br> Software Engineering <br></br>Technical Skills:JavaScript, Python,
                         React,Flask,mySQL,<br></br>PostgreSQL,<br></br>Git,Html,CSS,Tailwind CSS and Bootsrap
                        <br></br>Soft Skills :Collaboration, Leadership, Effective communication.
                        </p>
                        </h1>
                        </div>
            </div>
        </>
    )
}

export default Projects
                        