import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
//   const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/abdul-basit-1039b522b/', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/abdulbasit-10', label: 'GitHub' },
    { icon: SiUpwork, url: 'https://www.upwork.com/freelancers/~01e7e47f2d13ebf307', label: 'Upwork' }
  ];

  return (
    <footer className='bg-neutral-900 border-t border-neutral-800 mt-20'>
      <div className='container mx-auto px-8 py-16'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
          {/* Brand Section */}
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <img src={logo} alt="logo" className='h-12 w-16' />
              <h3 className='text-2xl font-bold text-cyan-400'>
                Abdul Basit
              </h3>
            </div>
            <p className='text-neutral-400 text-sm leading-relaxed'>
              Full Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-lg font-semibold text-white'>Quick Links</h4>
            <div className='flex flex-col gap-3'>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className='text-neutral-400 hover:text-cyan-400 transition duration-300 text-sm'
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-lg font-semibold text-white'>Connect</h4>
            <div className='flex gap-4'>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-neutral-400 text-2xl hover:text-cyan-400 transition duration-300 transform hover:scale-110'
                    title={social.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div> 
    </footer>
  );
}

export default Footer;
