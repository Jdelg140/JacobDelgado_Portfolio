import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Resume from "../assets/JacobDelgado.pdf";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-blue-500 text-gray-300">
      <div>
        <ul className="flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="aboutme" smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center padding-10  ml-[-100px] hover:ml-[-8px] duration-300 bg-[#294d83]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/jacobdelgado/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center padding-10  ml-[-100px] hover:ml-[-8px] duration-300 bg-[#2c3035]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Jdelg140"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center padding-10  ml-[-100px] hover:ml-[-8px] duration-300 bg-[#aa2a2a]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center padding-10  ml-[-100px] hover:ml-[-8px] duration-300 bg-[#646669]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
