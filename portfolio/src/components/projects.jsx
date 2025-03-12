import React from "react";
import "./base.css";
import { AiFillGithub } from "react-icons/ai";
import art from "../assets/artheart.jpeg";
import talent from "../assets/talent.jpeg";
import portfolio from "../assets/Portfolio.jpeg";
import commerce from "../assets/commerce.jpeg";
import xxxooo from "../assets/tictac.jpeg";
import creativembesi from "../assets/creative.jpeg";

const projects = [
  {
    title: "Company Website Portfolio",
    image: talent,
    github: "https://github.com/Genevive-Mbesi/Talent-Frontiers-Solution",
    live: "https://talent--frontiers--solution.vercel.app",
    description:
      "A corporate Website Portfolio.  ",
      
    tech: "Tech Stack :  Next.js, TypeScript, Tailwind CSS, Shadcn UI, and Resend.",
  },
  {
    title: "ArtHub_Ke",
    image: art,
    github: "https://github.com/Genevive-Mbesi/MbesiArt",
    live: "https://arthubke.vercel.app",
    description:
      "An e-commerce platform for curated art products and services.",
    tech: "Tech Stack :  React and Tailwind CSS.",
  },
  {
    title: "React Auth App",
    image: xxxooo,
    github: "https://github.com/Genevive-Mbesi/React-auth-app",
    live: "https://react-auth-app-genevivembesis-projects.vercel.app/",
    description:
      "A simple React Game with secure authentication system with Firebase, integrated with a tic-tac-toe game. ",
    tech: " Tech Stack : React.js and Tailwind CSS.",
  },
  {
    title: "Creative Portfolio",
    image: creativembesi,
    github: "https://github.com/Genevive-Mbesi/create",
    live: "https://creativembesi.vercel.app",
    description:
      "A creative's Website Portfolio showcasing digital creative skills.",
    tech: "Tech Stack :  Next.js and Tailwind CSS.",
  },
  {
    title: "E-commerce Platform",
    image: commerce,
    github: "https://github.com/Genevive-Mbesi/commerce",
    live: "https://mbesi-e-commerce.onrender.com",
    description:
      "Full-stack e-commerce application with admin authentication, secure Stripe payments, and Prisma for database management.",
    tech: " Tech Stack : Next.js (TypeScript), Tailwind CSS, and Shadcn UI.",
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    github: "https://github.com/Genevive-Mbesi/Portfolio",
    live: "https://mbesi.vercel.app",
    description:
      "Personal portfolio website developed with ",
    tech: "Tech Stack : React and Tailwind CSS.",
  },
];

function Projects() {
  return (
    <div className="min-h-screen mt-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card bg-zinc-300 shadow-xl transform transition-all duration-300 hover:scale-105"
          >
            <figure>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title text-white font-bold flex justify-between items-center">
                {project.title}
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className="text-4xl hover:text-gray-700 transition" />
                </a>
              </h2>
              <p className="text-sm text-black">{project.description}<br/>
                <span className="text-gray-500 font-semibold">{project.tech}</span>
              </p>
              <div className="card-actions justify-end mt-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge  text-black  font-bold bg-white hover:bg-black hover:text-white transition"
                >
                  View Live 
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
