import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; 

const blogPosts = [
  {
    id: 1,
    title: "UI Design",
    subtitle: "Streamlining The Design Cycle",
    content: `
      
      <h2><strong>1. Prioritize Functionality</strong></h2>
      <br/>
      <h3>Refrain from incorporating designs and color at the initial stage instead implement your functionalities.This will ease 
      your mind and imagination from doing all the heavy lifting.</h3>
      <br/>
      <h2><strong>2. Choose a Personality</strong></h2>
       <br/>
      <h3>Define a fixed set of shades upfront that you can choose from as you work, most projects require at least five shades per color.<br/>
      <br/><strong>Choose a base color first <br/></strong>This is the mid point, the lighter and darker shades are based from this.<br/>
       <br/><strong>Note: Limit your choices, when limited to a set of options that are noticeably different picking the best ones is easy.</strong>
       <br/>
        <br><strong>Define the edges <br/></strong>The darkest shades are usually reserved for for texts and the lighter shades
         are used for backgrounds in an element, then you can fill in the gaps with the shades in between.<br/>
        <br/><strong>Note: Trust your eyes not the number.</strong>
      </h3>
      <br/>
      <h2><strong>3. Separate Visual Hierarchy from document hierarchy </strong></h2><br/>
     <h3>Deliberately de-emphasize secondary and Tertiary Information, here size isn't everything try
     using fontweight and color to achieve this.</h3><br/>
      <h3>Use darker colors  for primary content, greyish colors for secondary content and lighter colors for tertiary content.</h3><br/>
     <strong>Note: Making the text closer to the background helps create hierarchy.</strong>
      <br/>
      <br/>
      <h2><strong>4. Be Creative</strong></h2>
      <br/>
       <h3>Break into sections, use multiple columns, add supporting text and colorful icons.<br/>Introduce hierarchy in columns, add images if it makes sense and also use cards and button like square designs. </h3>
 <br/>
 <strong>Note: Systemize everything the less you shall need to second guess your own decisions</strong>.
  
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
            className="shadow-2xl appearance-none border rounded w-full py-2 px-3 rounded-lg bg-fuchsia-50 text-2xl font-serif text-amber-900 text-center leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow-2xl w-full mt-5 text-amber-900 bg-fuchsia-50 rounded-lg font-serif focus:outline-none focus:shadow-outline"
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
