import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; 

const blogPosts = [
  {
    id: 1,
    title: "Design Cycle",
    subtitle: "Understanding the Design Process",
    content: `
      <h2>CODE FIRST</h2>
      <p>Refrain from incorporating color at the initial stage instead implement your functionalities.</p>
      <h3>CHOOSE</h3>
    `,
  },
//   {
//     id: 2,
//     title: "Second Post",
//     subtitle: "Exploring New Features",
//     content: `
//       <p>This is the content of the second post.</p>
//     `,
//   },
];

function BlogManager() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {blogPosts.map(post => (
        <div key={post.id} className="mb-8">
          <input
            type="text"
            className="shadow-2xl appearance-none border rounded w-full py-2 px-3 rounded-lg bg-fuchsia-50 text-2xl font-serif text-amber-800 text-center leading-tight focus:outline-none focus:shadow-outline"
            value={post.title}
            readOnly
            placeholder="Title"
          />
          <input
            type="text"
            className="shadow-2xl appearance-none border rounded w-full py-2 px-3 rounded-lg bg-fuchsia-50 text-xl font-serif text-amber-700 text-center leading-tight focus:outline-none focus:shadow-outline mt-2"
            value={post.subtitle}
            readOnly
            placeholder="Subtitle"
          />
          <div className="relative">
            <ReactQuill
              value={post.content}
              readOnly
              className="shadow-2xl w-full mt-5 text-amber-800 bg-fuchsia-50 rounded-lg font-serif focus:outline-none focus:shadow-outline"
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
