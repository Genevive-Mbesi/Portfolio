import React from "react";
import Python from '../assets/Python.png'
import javascript from '../assets/javascript.png'
import postgres from '../assets/postgres.png'
import reactlogo from '../assets/React.png'
import flask from '../assets/Flask.png'
import nextjs from '../assets/nextjs.svg'
import tailwind from '../assets/Tailwind CSS.png'
import mysql from '../assets/mysql.png'
import htmllogo from '../assets/htmllogo.png'
import csslogo from '../assets/csslogo.png'

export default function Proficiency() {
    return ( 

<nav className='py-10 '>
    <h1 className='text-s  font-semibold font-mono pl-10 pb-10'>PROFICIENCY</h1>
<div className="container bg-slate-900 font-mono mx-auto px-20 text-gray-100 p-10 ">
<h1 className="px-20 py-10 text-1xl mx-auto font-semibold">Programming Languages</h1>
 <div className=" flex items-center mr-10">
    <div className="column-row">
    <img src={Python} alt ='Python'className=' mr-20 w-20 rounded-full object-cover container  bg-indigo-400  rounded-full shadow-2xl shadow-indigo-500/50 p-3 '/>
    <h3 className="pl-2">Python</h3>
    </div>
    <div className="column-row">
    <img src={javascript} alt ='Javascript'className=' w-20 rounded-full object-cover h-20 w-20 container  bg-indigo-400  rounded-full shadow-2xl shadow-indigo-500/50 p-3' />
    <h3 className="pl-2">Javascript</h3>
    </div>
 </div>
 <h1 className="px-20 py-10 text-1xl mx-auto font-semibold">Web Development</h1>
<div className=" flex items-center mr-10">
<div className="column-row"> 
<img src={reactlogo} alt ='React'className='mr-20 w-20 rounded-full object-cover container  bg-indigo-400  rounded-full shadow-2xl shadow-indigo-500/50 p-3' />
<h3 className="pl-2">React</h3>
 </div>
<div className="column-row">
<img src={flask} alt ='Flask'className='mr-20 w-20 rounded-full object-cover h-20 w-20 container  bg-indigo-400  rounded-full shadow-2xl shadow-indigo-500/50 p-3'/>
<h3 className="pl-5">Flask</h3>
    </div>
 <div className="column-row">
<img src={nextjs} alt ='next js'className='40 w-20 rounded-full object-cover h-20 w-20 container  bg-indigo-400  rounded-full shadow-2xl shadow-indigo-500/50 p-3' />
<h3 className="pl-4">Next.js</h3>
    </div>
</div><h1 className="px-20 py-10 text-1xl mx-auto font-semibold">Database Management</h1>
 <div className=" flex items-center mr-10">
 <div className="column-row">   
<img src={mysql} alt ='mysql'className='mr-20 w-20 rounded-full object-cover h-20 w-20 container bg-indigo-400  rounded-full shadow-2xl shadow-indigo-500/50 p-3' />
<h3 className="pl-2">mySQL</h3>
    </div>
    <div className="column-row"> 
<img src={postgres} alt ='Postgres'className='mr-20 w-20 rounded-full object-cover h-20 w-20 container  bg-indigo-400  rounded-full shadow-2xl shadow-indigo-500/50 p-3' />
<h3 className="pl-2">PostgreSQL</h3>
    </div>
</div>
<h1 className="px-20 py-10 text-1xl mx-auto font-semibold" >Front-End Technologies</h1>
<div className=" flex items-center mr-10">
<div className="column-row">   
<img src={htmllogo} alt ='html5'className='mr-20 w-20 rounded-full object-cover h-20 w-20 container  bg-indigo-400  rounded-full shadow-2xl shadow-indigo-500/50 p-3' />
<h3 className="pl-4">Html5</h3>
    </div>
<div className="column-row">  
<img src={csslogo} alt ='css'className='mr-20 w-20 rounded-full object-cover h-20 w-20 container  bg-indigo-400  rounded-full shadow-2xl shadow-indigo-500/50 p-3' />
<h3 className="pl-6">CSS</h3>
    </div>
<div className="column-row">   
<img src={tailwind} alt ='tailwind'className='w-20 rounded-full object-cover h-20 w-20 container  bg-indigo-400  rounded-full shadow-2xl shadow-indigo-500/50 p-3' />
<h3 className="pl-2">Tailwind CSS</h3>
    </div>
</div>
<h1 className="px-20 py-10 text-1xl mx-auto font-semibold" > Version Control <span className="mb-2 md:mb-0 md:inline-block"></span> : <span className="mb-2 md:mb-0 md:inline-block"></span> Git</h1>
<h1 className="px-20 py-10 text-1xl mx-auto font-semibold" >Others <span className="mb-2 md:mb-0 md:inline-block"></span> : <span className="mb-2 md:mb-0 md:inline-block"></span> RESTful API Development <span className="mb-2 md:mb-0 md:inline-block"></span> & Web Design </h1>

</div>
</nav>

    )
}