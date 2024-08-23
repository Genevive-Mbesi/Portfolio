import React from "react";
import assets from "../assets/shecodes.jpg";
import Contacts from "./contacts";
import { Link } from "react-router-dom";
import "../App.css";
import Projects from"./projects";

export default function Home() {
  return (
    <div>
      <div className=" flex flex-col min-h-screen  bg-fuchsia-50 text-gray-100 p-4 md:p-20">
        <div className="card lg:card-side justify-center items-center w-100 shadow-2xl">
          <figure>
            <img src={assets} alt="Album" className="w-96 h-96" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-amber-950 font-serif p-4  text-5xl font-bold">
              Genevive Mbesi
            </h2>
            <p className="text-2xl font-serif  text-amber-700">
              Software Developer,UI/UX Designer
            </p>
            <Contacts />
            <div className="card-container">
            <div className="card w-100 bg-rose-400 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-neutral-100">
                  About
                  <div className="text-4xl">
                    <a href="https://github.com/Genevive-Mbesi/Portfolio">
                    </a>
                  </div>
                </h2>
                <p className="text-gray-100 text-base text-lg">
                    <span className="text-amber-950 font-semibold ">
                      Mbesi(she/her)
                    </span>
                    <br />
                    is creative individual who is passionate about <br />
                    Software development,
                    <br />
                    she aspires to create fun solutions
                    <br />
                    to modern world problems through technology,
                    <br />
                    To her,code to is an exciting opportunity to
                    <br />
                    inspire her creativity to a world of limitless
                    possibilities.
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="/projects">
                      <button className="text-gray-100  btn bg-amber-950">
                        {" "}
                        Projects
                      </button>
                    </Link>
                    <Link to="/blog">
                      <button className="text-gray-100  btn bg-amber-950">
                        {" "}
                        Insights
                      </button>
                    </Link>
                  </div>
                  
              </div>
            </div>
          </div>
            <div className="card-container bg-rose-400 shadow-xl">
              <div className="card w-100"> 
                </div>
              </div>
            </div>
            <div className="card-actions justify-end">
              <div className="chat justify-end chat-start">
                <div className="chat-bubble animate-pulse text-neutral-100 bg-rose-900">
                  "While code has been a tag of war
                  <br /> between my creativity and inner critic
                  <br />I have grown to love the process <br />
                  it teaches me so much about the world and also myself."
                  <br />
                  <span className="text-amber-700">Genevive Mbesi.</span>
                </div>
                
              </div>
            </div>
          </div>
          <div className=" justify-center w-100  ">
          <div className="card-body" >
          <p className="  pt-16 flex items-center underline text-2xl justify-center font-serif  text-amber-700">
               Core Projects
            </p> 
          <Projects /> 
            </div>
            </div>
        </div>
      </div>
      
  );
}
