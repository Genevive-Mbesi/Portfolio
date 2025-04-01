import React from "react";
import assets from "../assets/shecodes.jpg";
import Contacts from "./contacts";
import { Link } from "react-router-dom";
import "../App.css";
import Projects from "./projects";

export default function Home() {
  return (
    <div>
      <div className=" flex flex-col min-h-screen  bg-zinc-300 text-slate-950 p-4 md:p-20">
        <div className="flex">
          <div className="card-body">
            <h2 className="card-title text-slate-950 font-serif  text-5xl font-bold">
              Genevive Mbesi
            </h2>
            <p className="text-3xl font-serif  text-zinc-50">
              Software Engineer
            </p>
            <Contacts />
            <div className="card-container ">
              <div className=" w-100 bg-zinc-300 shadow-xl">
                <figure>
                  <img
                    src={assets}
                    alt="Album"
                    className="w-full object-cover float-right h-72"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="font-serif text-3xl text-zinc-50">
                    Get to know me
                    <div className="text-4xl">
                      <a href="https://github.com/Genevive-Mbesi/Portfolio">
                      </a>
                    </div>
                  </h2>
                  <p className="text-slate-950 font-serif text-base text-lg">
                    <span className="text-slate-950 font-semibold ">
                      Mbesi(she/her)
                    </span>
                    <br />
                    Is a passionate full-stack developer with a knack for
                    creativity mainly focused on front-end programming, and a
                    keen eye for design that brings ideas to life and thrives on
                    creating seamless and engaging user experiences,with a
                    mastery of cutting-edge front-end technologies,including but
                    not limited to JavaScript and its frameworks such as React
                    and next.js and CSS modules.
                  </p>
                  <div className="card-actions font-serif justify-end ">
                    <Link to="/projects">
                      <div className="text-slate-50  btn bg-zinc-700">
                        {" "}
                        Projects
                      </div>
                    </Link>
                    <Link to="/blog">
                      <div className="text-slate-50 btn bg-zinc-700">
                        {" "}
                        Insights
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-container bg-rose-400 shadow-xl">
              <div className="card w-100"></div>
            </div>
          </div>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className=" justify-center w-100  ">
        <div className="card-body">
        <div className="w-full flex flex-col items-center py-12 bg-zinc-300">
  <h1 className="text-3xl font-bold text-white tracking-wide  uppercase">
    Featured Projects 
  </h1>
  <div className="mt-6 w-11/12 md:w-4/5">
    <Projects />
  </div>
</div>   
        </div>
      </div>
    </div>
  );
}
