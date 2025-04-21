import React from "react";
import { motion } from "framer-motion";
import "./base.css";

function Associations() {
  return (
    <div className="min-h-screen bg-zinc-300 py-12 px-4 md:px-20">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="bg-zinc-300 border border-black rounded-2xl shadow-2xl p-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold font-serif text-center text-zinc-800 mb-6">
            Moringa School
          </h2>

          <p className="text-center text-zinc-700 text-lg font-serif mb-8">
            <span className="font-semibold text-xl block mb-2">
              Software Engineering Graduate
            </span>
            I completed a rigorous and immersive full-stack development program, where I mastered the fundamentals of web technologies and developed strong technical and collaboration skills through real-world projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-zinc-800 font-serif">
            <div>
              <h3 className="text-xl font-semibold mb-3">Key Skills Gained</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>HTML, CSS, Tailwind CSS</li>
                <li>JavaScript (ES6+), React, Next.js, Python</li>
                <li>Responsive UI Design & Accessibility</li>
                <li>Version Control with Git & GitHub</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Professional Tools & Concepts</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Node.js, Express, and Flask</li>
                <li>PostgreSQL, MySQL</li>
                <li>RESTful API Design & Integration</li>
                <li>Agile Development & Scrum Practices</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center text-zinc-600 italic tracking-wide">
            “Moringa didn’t just teach me how to code — it empowered me with a mindset of innovation, adaptability, and continuous growth.”
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Associations;
