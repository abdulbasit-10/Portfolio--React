import React from 'react'
import bgmain from '../assets/bgmain.webp';


const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-5 text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-thin tracking-tight'>
                        Abdul Basit</h1>
                   <span 
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                    bg-clip-text text-4xl tracking-tight text-transparent font-bold'>MERN Stack Developer</span>
                    <p
                    className='my-2 max-w-xl py-4 tracking-tighter'>I am a dedicated and versatile MERN Stack 
                    Developer with a passion for building efficient, scalable, and user-friendly web applications. 
                    My expertise spans both frontend and backend, working with technologies such as HTML, CSS, 
                    Bootstrap, Tailwind CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. I enjoy 
                    designing responsive, intuitive interfaces while also developing secure APIs and managing 
                    databases for full-stack solutions. I thrive in collaborative environments, love solving 
                    complex problems, and continuously adapt to new challenges. Outside of coding, I enjoy 
                    exploring emerging technologies, staying active, and contributing to open-source projects.
                    </p>
                </div>
            </div>

            <div className='w-full lg:w-1/2 lg:py-8 '>
            <div className='flex justify-end'>
                <img
                    src={bgmain} alt="Abdul Basit" className='w-[400px] h-[400px]'/>
            </div>
            </div>
        </div>
    </div>
  )
}


export default Hero

