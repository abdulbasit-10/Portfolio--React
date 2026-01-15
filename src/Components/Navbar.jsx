import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { SiUpwork } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mb-20 pt-6 relative'>
      <div className='flex items-center justify-between px-4'>
        
        {/* Logo (Clickable - Home) */}
        <div className='text-white flex items-center'>
          <Link to="/">
            <img 
              src={logo} 
              alt="logo" 
              className='h-[100px] w-[150px] cursor-pointer' 
            />
          </Link>
        </div>

        {/* Desktop Icons */}
        <div className='hidden md:flex items-center gap-10 text-3xl text-white'>
          <a href="https://www.linkedin.com/in/abdul-basit-1039b522b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/abdulbasit-10" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.upwork.com/freelancers/~01e7e47f2d13ebf307" target="_blank" rel="noopener noreferrer">
            <SiUpwork />
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div 
          className='md:hidden text-white text-3xl cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute right-4 mt-2 w-40 rounded-md bg-neutral-900 shadow-lg p-4 flex flex-col gap-3 text-white text-2xl md:hidden z-50">
          <a href="https://www.linkedin.com/in/abdul-basit-1039b522b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/abdulbasit-10" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://x.com/ba61256888?s=21" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
