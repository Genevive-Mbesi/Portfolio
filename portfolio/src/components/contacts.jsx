import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export default function Contacts() {
  return (
    <div id="contactInfo" className="flex gap-5 text-3xl text-amber-800 pt-5">
      <a href="https://github.com/Genevive-Mbesi">
        <AiFillGithub />
      </a>
      <a href="https://www.linkedin.com/in/genevive-mbesi-5a5a98224/">
        <AiFillLinkedin />
      </a>
      <a href="mailto:genmbesi@gmail.com">
        <AiFillMail />
      </a>
    </div>
  );
}
