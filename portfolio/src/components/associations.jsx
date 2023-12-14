import React from "react";
import Moringa from '../assets/Moringa.png'

export default function Associations() {
    return ( 
        <nav className='py-10 '>
          
<div className="container bg-slate-900 mx-auto font-mono px-20 text-gray-100 p-10"> 
<div className=" flex items-center mr-10">
    <div className="column-row">
    <img src={Moringa} alt ='Moringa Logo'className=' mr-40 w-40 rounded-full object-cover container   rounded-full shadow-2xl shadow-indigo-500/50 p-3 '/>
    <h3 className="pl-6"> Moringa School</h3>
    <h4>Training : Moringa School<br></br> Course : Software Engineering <br></br>Technical Skills:JavaScript, Python, React,Flask,mySQL,PostgreSQLGit,Html,CSS,Tailwind CSS and Bootsrap<br></br>Soft Skills :Collaboration, Leadership, Effective communication.<br></br> Graduated : November 2023</h4>
    </div>
    </div>
</div>
</nav>
    )
}