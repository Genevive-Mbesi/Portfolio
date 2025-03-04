import React from "react";
import "./base.css";
import { AiFillGithub } from "react-icons/ai";
import art from "../assets/artheart.jpeg";
import talent from "../assets/talent.jpeg";
import portfolio from "../assets/Portfolio.jpeg";
import commerce from "../assets/commerce.jpeg";
import xxxooo from "../assets/xxxooo.png"
import creativembesi from "../assets/creative.png"

function Projects() {
  return (
    <>
      <div className="min-h-screen mt-16 flex items-center justify-center">
        <div className="sections-container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card-container">
            <div className="card w-full bg-zinc-300 shadow-xl">
              <figure>
                <img src={talent} alt="Talent" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-slate-950">
                  Company Website Portfolio
                  <div className="text-4xl">
                    <a href="https://github.com/Genevive-Mbesi/Talent-Frontiers-Solution">
                      <AiFillGithub />
                    </a>
                  </div>
                </h2>
                <p className="text-zinc-50">Company Website Portfolio</p>
                <p className="text-slate-950">
                This company website is designed to provide comprehensive information about the organization, including its background, the range of services it offers, and how potential clients or partners can get in touch. Additionally,
                 it serves as a platform to showcase the company's mission, values, and any relevant updates or announcements.
                {" "}
                  <span className="text-zinc-50">
                    TypeScript, Next.js, Tailwind CSS,Shadcn UI,Resend 
                  </span>
                </p>
                <div className="card-actions justify-end">
                <a href="https://talent--frontiers--solution.vercel.app">
                    <div className="badge badge-outline text-zinc-950">
                      View Live Site
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card w-full bg-zinc-300 shadow-xl">
              <figure>
                <img src={art} alt="Art Hub" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-slate-950">
                  ArtHub_Ke
                  <div className="text-4xl">
                    <a href="https://github.com/Genevive-Mbesi/MbesiArt">
                      <AiFillGithub />
                    </a>
                  </div>
                </h2>
                <p className="text-zinc-100">Product Catalog</p>
                <p className="text-slate-950">
                  ArtHub_Ke website is committed to presenting a curated
                  selection of art services and products available for
                  purchase.The website is developed using{" "}
                  <span className="text-zinc-50">React </span>
                  and styled with{" "}
                  <span className="text-zinc-50">Tailwind CSS </span>to ensure a
                  seamless and visually appealing experience for customers.
                </p>
                <div className="card-actions justify-end">
                  <a href="https://arthubke.vercel.app">
                    <div className="badge badge-outline text-zinc-950">
                      View Live Site
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card w-full bg-zinc-300 shadow-xl">
              <figure>
                <img src={xxxooo} alt="tictac" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-zinc-950">
                  React Auth App
                  <div className="text-4xl">
                    <a href="https://github.com/Genevive-Mbesi/React-auth-app">
                      <AiFillGithub />
                    </a>
                  </div>
                </h2>
                <p className="text-zinc-100"> React xxx-ooo Game </p>
                <p className="text-zinc-950">
                  React application. Features include 
                  authentication, a three connect game
                 and a responsive design to ensure a seamless
                  Gaming experience across all devices. This website is
                  developed using{" "}
                  <span className="text-zinc-50">React.js </span>
                  and styled with{" "}
                  <span className="text-zinc-50">
                    Tailwind CSS 
                  </span> and 
                  <span className="text-zinc-50"> Firebase</span> for authentication
                </p>
                <div className="card-actions justify-end">
                  <a href="https://react-auth-app-genevivembesis-projects.vercel.app/">
                    <div className="badge badge-outline text-slate-950">
                      View Live Site
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card w-full bg-zinc-300 shadow-xl">
              <figure>
                <img src={creativembesi} alt="Creative portfolio" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-slate-950">
                  Creative Portfolio
                  <div className="text-4xl">
                    <a href="https://github.com/Genevive-Mbesi/create">
                      <AiFillGithub />
                    </a>
                  </div>
                </h2>
                <p className="text-zinc-50">Creative Portfolio</p>
                <p className="text-slate-950">
                  This website is developed using{" "}
                  <span className="text-zinc-50">Next.js </span>
                  and styled with{" "}
                  <span className="text-zinc-50">Tailwind CSS </span>to ensure a
                  seamless and visually appealing experience for users.
                </p>
                <div className="card-actions justify-end">
                  <a href="https://creativembesi.vercel.app">
                    <div className="badge badge-outline text-slate-950">
                      View Live Site
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card w-full bg-zinc-300 shadow-xl">
              <figure>
                <img src={commerce} alt="commerce" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-zinc-950">
                  e- commerce platform
                  <div className="text-4xl">
                    <a href="https://github.com/Genevive-Mbesi/commerce">
                      <AiFillGithub />
                    </a>
                  </div>
                </h2>
                <p className="text-zinc-100">e-commerce website</p>
                <p className="text-zinc-950">
                  Full-stack e-commerce application. Features include admin
                  authentication, product listings, secure payment processing
                  with <span className="text-zinc-50">Stripe</span> order
                  management, and a responsive design to ensure a seamless
                  shopping experience across all devices. This website is
                  developed using{" "}
                  <span className="text-zinc-50">Next.js(TypeScript) </span>
                  and styled with{" "}
                  <span className="text-zinc-50">
                    Tailwind CSS and ShadCDN.{" "}
                  </span>
                  <span className="text-zinc-50">Prisma</span> for Database
                  Mangement.
                </p>
                <div className="card-actions justify-end">
                  <a href="https://mbesi-e-commerce.onrender.com">
                    <div className="badge badge-outline text-slate-950">
                      View Live Site
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
         
          <div className="card-container">
            <div className="card w-full bg-zinc-300 shadow-xl">
              <figure>
                <img src={portfolio} alt="Portfolio" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-slate-950">
                  Portfolio
                  <div className="text-4xl">
                    <a href="https://github.com/Genevive-Mbesi/Portfolio">
                      <AiFillGithub />
                    </a>
                  </div>
                </h2>
                <p className="text-zinc-50">Website Portfolio</p>
                <p className="text-slate-950">
                  This website is developed using{" "}
                  <span className="text-zinc-50">React </span>
                  and styled with{" "}
                  <span className="text-zinc-50">Tailwind CSS </span>to ensure a
                  seamless and visually appealing experience for users.
                </p>
                <div className="card-actions justify-end">
                  <a href="https://mbesi.vercel.app">
                    <div className="badge badge-outline text-slate-950">
                      View Live Site
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
