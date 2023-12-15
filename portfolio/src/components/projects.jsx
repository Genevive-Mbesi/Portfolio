import React from "react";
import gburudishe from '../assets/g-burudishe.png'


export default function Projects() {
    return ( 
<nav className='py-10 '>
<div className="container bg-slate-900 mx-auto font-mono px-20 text-gray-100 p-10">
<h1 className="text-gray-100">PROJECTS</h1>
<div className=" flex items-center mr-10">
    <div className="flex">
    <img src={gburudishe} alt ='g-burudishe'className='motion-safe:animate-pulse w-70 h-80  rounded-full object-cover shadow-2xl shadow-indigo-500/50 p-3'/>
    <h3 className="pl-6"> </h3>
    <h4><span className="font-semibold">Introducing g ~ burudishe </span> : Your Gateway to Relaxation <br></br>

Are you tired of the same old routine and looking for the perfect place to unwind during holidays, vacations, events, or weekends? Look no further! Introducing g ~ burudishe , a cutting-edge web application designed to revolutionize the way you discover and experience relaxation.

g ~ burudishe goes beyond the generic recommendations and takes a personalized approach to help you find the ideal chill spot. By considering your likes and personal preferences, the app tailors its suggestions to align perfectly with your interests.
<br></br>

<span className="font-semibold" >Key Features </span>:<br></br>

Personalized Recommendations: Receive tailored suggestions based on your likes and preferences.<br></br>

Holiday and Event Filters: Easily find chill spots specific to holidays, vacations, events, or weekends.<br></br>

User-Friendly Interface: Enjoy a sleek and intuitive design that makes browsing for your ideal relaxation spot a breeze.<br></br>

Responsive Design: Whether you're on your computer, tablet, or smartphone, ChillSpot Finder provides a seamless and enjoyable user experience.<br></br>

<span className="font-semibold" >Tech Stack:</span>

Frontend: HTML, Tailwind CSS, Node.js, React <br></br>
Backend: Python, Django<br></br>
Database: MySQL <br></br>
<a href= 'https://github.com/Genevive-Mbesi/g-burudishe'>
          <span className="text-gray-500">Code</span>
          </a>
          <br></br>
          Work in Progress...................
</h4>

    </div>
    </div>
</div>
</nav>
    )
}