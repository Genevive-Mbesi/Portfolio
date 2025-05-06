import React from "react";
import { motion } from "framer-motion";

// Import assets
import Python from "../assets/Python.png";
import javascript from "../assets/javascript.png";
import postgres from "../assets/postgres.png";
import reactlogo from "../assets/React.png";
import flask from "../assets/Flask.png";
import nextjs from "../assets/nextjs.svg";
import tailwind from "../assets/Tailwind CSS.png";
import mysql from "../assets/mysql.png";
import figma from "../assets/figma.png";
import github from "../assets/github.png";
import git from "../assets/git.png";
import htmllogo from "../assets/htmllogo.png";
import csslogo from "../assets/csslogo.png";
import Prisma from "../assets/Prisma.png";
import TypeScript from "../assets/TypeScript.png";
import Wordpress from "../assets/wordpress.png";

const skills = [
  { name: "Python", icon: Python },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: TypeScript },
  { name: "React", icon: reactlogo },
  { name: "Flask", icon: flask },
  { name: "Next.js", icon: nextjs },
  { name: "MySQL", icon: mysql },
  { name: "PostgreSQL", icon: postgres },
  { name: "Prisma", icon: Prisma },
  { name: "HTML5", icon: htmllogo },
  { name: "CSS", icon: csslogo },
  { name: "Figma", icon: figma },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Wordpress", icon: Wordpress },
];

const MotionCard = ({ skill }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="bg-gray-200 shadow-md rounded-2xl p-4 flex flex-col items-center gap-2 hover:shadow-xl transition-all"
  >
    <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain" />
    <h3 className="text-sm font-medium">{skill.name}</h3>
  </motion.div>
);

export default function Proficiency() {
  return (
    <div className="bg-zinc-300  py-16 px-6 lg:px-32 font-mono text-slate-900">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill) => (
          <MotionCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
