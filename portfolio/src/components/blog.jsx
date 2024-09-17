import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const blogPosts = [
  {
    id: 1,
    title: "UI Design",
    subtitle: "Streamlining The Design Cycle",
    content: `
      
      <h2><strong>Prioritize Functionality</strong></h2>
      <h3>Refrain from incorporating designs and color at the initial stage instead implement your functionalities.This will ease 
      your mind and imagination from doing all the heavy lifting.</h3>
      <br/><br/>
      <h2><strong>Choose a Personality</strong></h2>
      <h3>Define a fixed set of shades upfront that you can choose from as you work, most projects require at least five shades per color.<br/>
      <br/>Choose a base color first, this is the mid point, the lighter and darker shades are based from this.<br/>
       <br/>Limit your choices, when limited to a set of options that are noticeably different picking the best ones is easy.
       <br/>
        <br><strong>Define the edges <br/></strong>The darkest shades are usually reserved for for texts and the lighter shades
         are used for backgrounds in an element, then you can fill in the gaps with the shades in between.<br/>
<br/>Trust your eyes not the number.
      </h3>
      <br/><br/>
      <h2><strong>Separate Visual Hierarchy from document hierarchy </strong></h2>
     <h3>Deliberately de-emphasize secondary and Tertiary Information, here size isn't everything try
     using fontweight and color to achieve this.</h3><br/>
      <h3>Use darker colors  for primary content, greyish colors for secondary content and lighter colors for tertiary content.<br/>
     <br/>Making the text color closer to the background helps create hierarchy.
      <br/>
      <br/><br/>
      <h2><strong>Be Creative</strong></h2>
       <h3>Break into sections, use multiple columns, add supporting text and colorful icons.<br/><br/>Introduce hierarchy in columns, add images if it makes sense and also use cards and button like square designs. 
 <br/><br/>Systemize everything, the less you shall need to second guess your own decisions.<h3/>
  
    `,
  },
  {
    id: 2,
    title: "The React-Next.js Continuum",
    subtitle: "Exploring React and Next.js",
    content: `
      <h2><strong>React</strong></h2><br/>
      <h3> React is a front-end library developed by Facebook for building user interfaces, particularly single-page applications where you need a highly interactive and responsive UI.
       It allows developers to create reusable UI components.</h3><br/>
       <h2><strong>Next.js</strong></h2><br/> 
       <h3>Next.js is a framework built on top of React. It enhances React by adding server-side rendering (SSR), static site generation (SSG), 
       and other features like API routes, automatic code splitting, and optimized performance.</h3>
      
       <br/><br/>
       <h2><strong>React vs Next.js</strong></h2><br/>
       <h3><strong>Routing</strong></h3>
       <h3> React requires External Packages such as React Router installation to configure routes.<br/>Next.js uses a file based routing system each folder in the App System becomes a route and the folder names become the route path.</h3>
       <br/>
       <h3><strong>Configuration</strong></h3>
       <h3> React requires manual configuration. <br/>Next.js automates most processes allowing developers to only focus on the application logic.</h3>
       <br/>
       <h3><strong>Rendering</strong></h3>
       <h3> React uses client side rendering. <br/>Next.js uses both server-side rendering and client-side rendering.</h3>
       <br/>
       <h3><strong>Server-side rendering enables easy crawling and indexing hence improves SEO.</strong></h3><br/>
       <br/>
    `,
  },
];

function BlogManager() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {blogPosts.map((post) => (
        <div key={post.id} className="mb-8">
          <input
            type="text"
            className="shadow-2xl appearance-none border rounded w-full py-2 px-3 rounded-lg bg-zinc-100 text-2xl font-serif text-slate-950 text-center leading-tight focus:outline-none focus:shadow-outline"
            value={post.title}
            readOnly
            placeholder="Title"
          />
          <input
            type="text"
            className="shadow-2xl appearance-none border rounded w-full py-2 px-3 rounded-lg bg-zinc-100 text-xl font-serif text-slate-950 text-center leading-tight focus:outline-none focus:shadow-outline mt-2"
            value={post.subtitle}
            readOnly
            placeholder="Subtitle"
          />
          <div className="relative">
            <ReactQuill
              value={post.content}
              readOnly
              className="shadow-2xl w-full mt-5 text-slate-950 bg-zinc-100 rounded-lg font-serif focus:outline-none focus:shadow-outline"
              theme="snow"
              modules={{ toolbar: false }}
            />
            <style>
              {`
                .ql-toolbar {
                  display: none !important;
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
