import React from 'react'
import assets from '../assets/shecodes.jpg'
import Contacts from './contacts';
import {Link} from "react-router-dom";
import Footer from './footer';
import '../App.css';


export default function Home() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    height: '100%', 
  
  };
  const bodyStyle = {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '100vh',
    alignItems:'center',
    justifyContent:'center',
  };
  
  return (
    
  <div style={bodyStyle}>
     <div style={containerStyle}>
    <div className=" flex flex-col min-h-screen px-30 bg-rose-200 text-gray-100 p-20">
    <div className="card lg:card-side justify-center items-center w-100 shadow-2xl">
    <figure><img src={assets}alt="Album"className="w-96 h-96"/></figure>
    <div className="card-body max-w-screen-lg flex flex-col w-full md:w-96 ">
    <h2 className="card-title text-amber-950 font-serif text-5xl font-bold">Genevive Mbesi</h2>
    <p className='text-2xl font-serif  text-amber-700'>Software Developer,UI/UX Designer</p>
    <Contacts/>
    <div className="card w-96 bg-rose-400 shadow-xl">
    <div className="card-body">
    <h2 className="card-title text-amber-950 ">Mbesi(she/her)</h2>
    <p>is creative individual who is passionate about Software development,she aspires to create fun solutions to modern world problems through technology,
      To her,code to is an exciting opportunity to take her creativity to a world of limitless possibilities.
    </p>
    <div className="card-actions justify-end">
    <Link to='/projects'>
    <button className='text-gray-100  btn bg-amber-950'> Projects</button>
    </Link>
    </div>
    
    </div>
   </div>
   <div className="card-actions justify-end">
   <div className="chat  chat-start">
  <div className="chat-bubble animate-pulse text-neutral-100 bg-rose-900">"While being a creative is different tag of war<br/> between my inner dreamer and 
  critic<br/>I have grown to love the process <br/>it teaches me so much about the world and also myself."<br/><span className='text-amber-700'>Genevive Mbesi.</span>
  </div>
</div>
    </div>
   </div>
  </div>
  </div>
 </div>
 <Footer/>
</div>
  )
}