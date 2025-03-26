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
      "A professionally crafted corporate portfolio that enhances brand presence and provides a structured digital showcase.",
    tech: "Next.js, TypeScript, Tailwind CSS, Shadcn UI, and Resend.",
  },
  {
    title: "ArtHub_Ke",
    image: art,
    github: "https://github.com/Genevive-Mbesi/MbesiArt",
    live: "https://arthubke.vercel.app",
    description:
      "A digital marketplace for curated art collections and creative services, providing artists a seamless online storefront.",
    tech: "React and Tailwind CSS.",
  },
  {
    title: "React Auth App",
    image: xxxooo,
    github: "https://github.com/Genevive-Mbesi/React-auth-app",
    live: "https://react-auth-app-genevivembesis-projects.vercel.app/",
    description:
      "A React authentication system powered by Firebase, integrated with a fun, interactive Tic-Tac-Toe game.",
    tech: "React.js, Firebase, and Tailwind CSS.",
  },
  {
    title: "Creative Portfolio",
    image: creativembesi,
    github: "https://github.com/Genevive-Mbesi/create",
    live: "https://creativembesi.vercel.app",
    description:
      "A sleek and modern portfolio showcasing digital creativity and design expertise, crafted with a strong UI/UX approach.",
    tech: "Next.js and Tailwind CSS.",
  },
  {
    title: "E-commerce Platform",
    image: commerce,
    github: "https://github.com/Genevive-Mbesi/commerce",
    live: "https://mbesi-e-commerce.onrender.com",
    description:
      "A full-stack e-commerce platform with admin authentication, Stripe integration, and database management with Prisma.",
    tech: "Next.js (TypeScript), Tailwind CSS, and Shadcn UI.",
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    github: "https://github.com/Genevive-Mbesi/Portfolio",
    live: "https://mbesi.vercel.app",
    description:
      "A structured and elegant personal portfolio, built to effectively showcase skills, projects, and professional expertise.",
    tech: "React and Tailwind CSS.",
  },
];

function Projects() {
  return (
    <div className="min-h-screen mt-16 flex flex-col items-center px-12">
      <div className="max-w-6xl w-full space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-start gap-10 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } mb-16`}
          >
            <div className="relative w-full md:w-1/3 flex justify-center">
              <div className="border-8 border-black rounded-lg p-2 bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-lg object-cover  border-gray-700"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 font-sans-serif">
              <h2 className="text-2xl font-bold flex justify-between items-center">
                {project.title}
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className="text-3xl hover:text-gray-700 transition" />
                </a>
              </h2>
              <p className="text-lg text-gray-900 mt-2 leading-relaxed">
                {project.description}
              </p>
              <p className="text-gray-600 font-semibold mt-2">{project.tech}</p>
              <div className="mt-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-white text-black font-bold rounded-lg hover:bg-black hover:text-white transition"
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
