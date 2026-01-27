import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { SiUpwork } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home', path: '/' },
    { name: 'About Me', id: 'about', path: '/about' },
    { name: 'Technologies', id: 'technologies', path: '/technologies' },
    { name: 'Experience', id: 'experience', path: '/experience' },
    { name: 'Projects', id: 'projects', path: '/projects' },
    { name: 'Contact Us', id: 'contact', path: '/contact' }
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <div className='fixed top-0 left-0 right-0 z-50 mb-20 pt-0'>
      <div className='flex items-center justify-between px-4 bg-gray-900 bg-opacity-95'>
        
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

        {/* Desktop Navigation Links */}
        <div className='hidden md:flex items-center gap-10 text-white text-lg'>
          {navLinks.map((link) => (
            <Link 
              key={link.id}
              to={link.path}
              className='hover:text-cyan-400 transition duration-300'
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Social Icons */}
        {/* <div className='hidden md:flex items-center gap-10 text-3xl text-white'>
          <a href="https://www.linkedin.com/in/abdul-basit-1039b522b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/abdulbasit-10" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.upwork.com/freelancers/~01e7e47f2d13ebf307" target="_blank" rel="noopener noreferrer">
            <SiUpwork />
          </a>
        </div> */}

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
        <div className="absolute right-4 mt-2 w-48 rounded-md bg-neutral-900 shadow-lg p-4 flex flex-col gap-4 text-white md:hidden z-50">
          {navLinks.map((link) => (
            <Link 
              key={link.id}
              to={link.path}
              className='hover:text-cyan-400 transition duration-300 text-base'
              onClick={handleNavClick}
            >
              {link.name}
            </Link>
          ))}
          <div className='border-t border-neutral-700 pt-4 flex flex-col gap-3 text-2xl'>
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
        </div>
      )}
    </div>
  );
};

export default Navbar;
