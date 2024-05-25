import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="mx-2 w-10 text-4xl font-bold">Ar</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/asif-rahman-5032991a3/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/asif-max" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/asifrhmn.____/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a
          href="/Resume.pdf"
          download
          className="text-sm hidden md:inline-block bg-neutral-900 border  text-purple-500 px-4 py-2 rounded"
        >
          My Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
