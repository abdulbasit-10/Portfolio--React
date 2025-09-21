import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, } from "react-icons/fa"
import { BsBootstrap } from "react-icons/bs"
import { RiReactjsLine } from "react-icons/ri"
import { SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostman,
    SiSwagger, 
    SiTailwindcss } from "react-icons/si"
const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
        <h1 className='my-20 text-center text-4xl font-bold'>Technologies</h1>
        <div 
        className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-600 p-4'>
                <FaHtml5 className='text-5xl text-orange-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-600 p-4'>
                <FaCss3Alt className='text-5xl text-blue-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-600 p-4'>
                <BsBootstrap className='text-5xl text-purple-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-600 p-4'>
                <FaJsSquare className='text-5xl text-yellow-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-600 p-4'>
                <SiTailwindcss className='text-5xl text-yellow-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-600 p-4'>
                <RiReactjsLine className='text-5xl text-cyan-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-600 p-4'>
                <SiNextdotjs className='text-5xl text-black dark:text-white' /> {/* Next.js icon after React */}
            </div>
            <div className='rounded-2xl border-4 border-neutral-600 p-4'>
                <SiNodedotjs className='text-5xl text-green-600' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-600 p-4'>
                <SiExpress className='text-5xl text-gray-800 dark:text-white' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-600 p-4'>
                <SiMongodb className='text-5xl text-green-700' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-600 p-4'>
                <SiPostman className='text-5xl text-orange-500' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-600 p-4'>
                <SiSwagger className='text-5xl text-green-500' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-600 p-4'>
                <FaGithub className='text-5xl text-white' />
            </div>
        </div>
    </div>
  )
}

export default Technologies
