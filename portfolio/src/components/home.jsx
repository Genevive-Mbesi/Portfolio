import React from "react";
import assets from "../assets/shecodes.jpg";
import Contacts from "./contacts";
import { Link } from "react-router-dom";
import "../App.css";
import Projects from "./projects";
import Proficiency from "./proficiency";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-zinc-300 text-slate-950 p-4 md:p-20">
        <motion.div
          className="flex"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="card-body">
            <motion.h2
              className="card-title text-slate-950 font-serif text-5xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Genevive Mbesi
            </motion.h2>

            <motion.p
              className="text-3xl font-serif text-zinc-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Software Engineer
            </motion.p>

            <Contacts />

            <motion.div
              className="card-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="w-100 bg-zinc-300 shadow-xl">
                <figure>
                  <motion.img
                    src={assets}
                    alt="Album"
                    className="w-full object-cover float-right h-72"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="font-serif text-3xl text-zinc-50">
                    Get to know me
                    <div className="text-4xl">
                      <a href="https://github.com/Genevive-Mbesi/Portfolio"></a>
                    </div>
                  </h2>
                  <p className="text-slate-950 font-serif text-base text-lg">
                    <span className="text-slate-950 font-semibold">Mbesi (she/her)</span>
                    <br />
                    Is a passionate full-stack developer with a knack for creativity mainly focused on front-end programming, and a keen eye for design that brings ideas to life and thrives on creating seamless and engaging user experiences, with a mastery of cutting-edge front-end technologies, including but not limited to JavaScript and its frameworks such as React and Next.js, and CSS modules.
                  </p>
                  <div className="card-actions font-serif justify-end mt-4">
                    <Link to="/projects">
                      <div className="text-slate-50 btn bg-zinc-700">Projects</div>
                    </Link>
                    <Link to="/blog">
                      <div className="text-slate-50 btn bg-zinc-700">Insights</div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="card-container bg-rose-400 shadow-xl mt-6"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="justify-center w-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-full flex flex-col items-center text-4xl font-semibold font-serif tracking-wide bg-zinc-300">
          Tech Skills & Tools
        </div>
        <Proficiency />

        <motion.div
          className="card-body"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full flex flex-col items-center py-12 bg-zinc-300">
            <h1 className="text-4xl font-semibold font-serif tracking-wide">
              Featured Projects
            </h1>
            <div className="mt-6 w-11/12 md:w-4/5">
              <Projects />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
