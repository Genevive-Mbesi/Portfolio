import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaPenFancy, FaChevronRight } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "UI Design",
    subtitle: "Streamlining The Design Cycle",
    content: `
      <h3><strong>Prioritize Functionality</strong></h3>
      <h3>Refrain from incorporating designs and color at the initial stage. Implement functionalities first. This will ease your mind and imagination from doing all the heavy lifting.</h3>
      <br/>
      <h3><strong>Choose a Personality</strong></h3>
      <h3>Define a fixed set of shades upfront that you can choose from as you work. Most projects require at least five shades per color.<br/>Choose a base color first. This is the midpoint, and the lighter and darker shades are based on this.</h3>
      <ul>
        <li>Limit your choices. When limited to noticeably different options, picking the best ones is easier.</li>
      </ul>
      <br/>
      <h3><strong>Define the Edges</strong></h3>
      <h3>The darkest shades are usually reserved for texts, and the lighter shades are used for backgrounds. Fill the gaps with shades in between.</h3>
       <ul>
        <li>Trust your eyes not the number.</li>
      </ul>
      <br/>
      <h3><strong>Separate Visual Hierarchy from Document Hierarchy</strong></h3>
      <h3>Deliberately de-emphasize secondary and tertiary information. Size isn't everything—try using font weight and color to achieve this.</h3>
      <h3>Use darker colors for primary content, greyish tones for secondary, and lighter colors for tertiary content.</h3>
       <ul>
        <li>Making the text color closer to the background helps create hierarchy.</li>
      </ul>
      <br/>
      <h3><strong>Be Creative</strong></h3>
      <h3>Break content into sections, use multiple columns, and add supporting text or icons.<br/>Introduce hierarchy in columns, add images if they make sense, and use cards or button-like designs.</h3>
    `,
  },
  {
    id: 2,
    title: "The React-Next.js Continuum",
    subtitle: "Exploring React and Next.js",
    content: `
      <h3><strong>React</strong></h3>
      <h3>React is a front-end library developed by Facebook for building user interfaces, particularly single-page applications where you need a highly interactive and responsive UI. It allows developers to create reusable UI components.</h3><br/>
      <h3><strong>Next.js</strong></h3>
      <h3>Next.js is a framework built on top of React. It enhances React by adding server-side rendering (SSR), static site generation (SSG), and other features like API routes, automatic code splitting, and optimized performance.</h3>
      <br/>
      <h3><strong>React vs Next.js</strong></h3>
      <br/>
      <h3><strong>Routing</strong></h3>
      <h3>React requires external packages like React Router for route configuration.<br/>Next.js uses a file-based routing system where each folder becomes a route, and folder names become the route paths.</h3>
      <br/>
      <h3><strong>Configuration</strong></h3>
      <h3>React requires manual configuration.<br/>Next.js automates many processes, allowing developers to focus on the application logic.</h3>
      <br/>
      <h3><strong>Rendering</strong></h3>
      <h3>React uses client-side rendering.<br/>Next.js offers both server-side rendering and client-side rendering.</h3>
      <br/>
      <h3><strong>Server-side rendering enables easy crawling and indexing, hence improving SEO.</strong></h3><br/>
    `,
  },
];

function BlogManager() {
  return (
    <div className="max-w-4xl mx-auto p-8 font-serif">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="mb-10 p-6 bg-gray-100 shadow-lg rounded-lg"
        >
          <div className="flex items-center mb-4">
            <FaPenFancy className="text-indigo-500 text-xl mr-3" />
            <input
              type="text"
              className="shadow-2xl appearance-none border rounded-lg w-full py-3 px-4 bg-zinc-100 text-3xl text-slate-950 leading-tight focus:outline-none focus:shadow-outline hover:shadow-md transition-all duration-300"
              value={post.title}
              readOnly
              placeholder="Title"
            />
          </div>
          <div className="flex items-center mb-6">
            <FaChevronRight className="text-indigo-500 text-lg mr-3" />
            <input
              type="text"
              className="shadow-2xl appearance-none border rounded-lg w-full py-2 px-4 bg-zinc-100 text-2xl text-slate-950 leading-tight focus:outline-none focus:shadow-outline hover:shadow-md transition-all duration-300"
              value={post.subtitle}
              readOnly
              placeholder="Subtitle"
            />
          </div>
          <div className="relative">
            <ReactQuill
              value={post.content}
              readOnly
              className="shadow-2xl w-full mt-5 text-slate-950 bg-zinc-100 rounded-lg focus:outline-none focus:shadow-outline"
              theme="snow"
              modules={{ toolbar: false }}
            />
            <style>
              {`
                .ql-toolbar {
                  display: none !important;
                }
                .ql-container {
                  font-family: serif;
                  font-size: 18px;
                  line-height: 1.6;
                }
                .ql-editor h3 {
                  font-size: 22px !important;
                  
                  margin-bottom: 12px;
                }
                .ql-editor ul {
                  margin-left: 20px;
                  padding-left: 20px;
                  list-style-type: disc;
                  font-size: 21px !important;
                }
                .ql-editor li {
                  margin-bottom: 8px;

                }
                .ql-editor strong {
                  font-weight: bold;
                }
                .ql-editor {
                  font-weight: normal;
                }
              `}
            </style>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogManager;
