import React from "react";
import "./base.css";
import { AiFillGithub } from "react-icons/ai";
import art from "../assets/artheart.png";
import rental from "../assets/rtm.png";
import portfolio from "../assets/Portfolio.jpeg";
import commerce from "../assets/commerce.jpeg";

function Projects() {
  return (
    <>
      <div className="min-h-screen mt-16 sections-container">
        <div className="section-links font-serif">
          <div className="card-container">
            <div className="card w-100 bg-rose-900 shadow-xl">
              <figure>
                <img src={art} alt="Art Heart" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-neutral-100">
                  wall_art_heart
                  <div className="text-4xl">
                    <a href="https://github.com/Genevive-Mbesi/MbesiArt">
                      <AiFillGithub />
                    </a>
                  </div>
                </h2>
                <p className="text-amber-700">Product Catalog</p>
                <p className="text-neutral-100">
                  The Wall Art Heart website is committed to presenting a
                  curated selection of art services and products available for
                  purchase.The website is developed using{" "}
                  <span className="text-amber-700">React </span>
                  and styled with{" "}
                  <span className="text-amber-700">Tailwind CSS </span>to ensure
                  a seamless and visually appealing experience for customers.
                </p>
                <div className="card-actions justify-end">
                  <a href="https://mbesiart.vercel.app">
                    <div className="badge badge-outline text-neutral-100">
                      View
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card w-100 bg-rose-900 shadow-xl">
              <figure>
                <img src={commerce} alt="commerce" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-neutral-100">
                  E- commerce platform
                  <div className="text-4xl">
                    <a href="https://github.com/Genevive-Mbesi/commerce">
                      <AiFillGithub />
                    </a>
                  </div>
                </h2>
                <p className="text-amber-700">e-commerce website</p>
                <p className="text-neutral-100">
                Full-stack e-commerce application. Features include admin authentication, product listings, secure payment processing with Stripe, order management, 
                and a responsive design to ensure a seamless shopping experience across all devices.
                  This website is developed using{" "}
                  <span className="text-amber-700">Next.js(TypeScript) </span>
                  and styled with{" "}
                  <span className="text-amber-700">Tailwind CSS and Shadcn. </span>
                  <span className="text-amber-700">Prisma</span> for Database Mangement.
                </p>
                <div className="card-actions justify-end">
                  <a href="https://mbesi-commerce.onrender.com">
                    <div className="badge badge-outline text-neutral-100">
                      View
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card w-100 bg-rose-900 shadow-xl">
              <figure>
                <img src={portfolio} alt="Portfolio" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-neutral-100">
                  Portfolio
                  <div className="text-4xl">
                    <a href="https://github.com/Genevive-Mbesi/Portfolio">
                      <AiFillGithub />
                    </a>
                  </div>
                </h2>
                <p className="text-amber-700">Website Portfolio</p>
                <p className="text-neutral-100">
                  This website is developed using{" "}
                  <span className="text-amber-700">React </span>
                  and styled with{" "}
                  <span className="text-amber-700">Tailwind CSS </span>to ensure
                  a seamless and visually appealing experience for users.
                </p>
                <div className="card-actions justify-end">
                  <a href="https://mbesi.vercel.app">
                    <div className="badge badge-outline text-neutral-100">
                      View
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card w-100 bg-rose-900 shadow-xl">
              <figure>
                <img src={rental} alt="Rental Management System" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-neutral-100">
                  Rental Management System
                  <div className="text-4xl">
                    <a href="https://github.com/eugenemrg/rental-management-system">
                      <AiFillGithub />
                    </a>
                  </div>
                </h2>
                <p className="text-amber-700">Rental Management System</p>
                <p className="text-neutral-100">
                  Rental Management System is a platform designed to help
                  property owners manage their rental properties
                  efficiently,they can easily keep track of
                  properties,tenants,and rental income,all in one place. Having
                  developed the frontend, the following technologies were used{" "}
                  <span className="text-amber-700">
                    JavaScript, React (React Router, React Bootstrap, React Auth
                    Kit)
                  </span>
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline text-neutral-100">
                    Development in process....
                  </div>
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
