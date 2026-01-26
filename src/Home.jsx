import React from 'react'
// import bgmain from '../assets/bgmain.webp'

const Home = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-5 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-thin tracking-tight text-[#84A98C]'>
                        Engr Abdul Basit</h1>
                    <span 
                    className='bg-clip-text text-4xl font-bold text-[#14B8A6]'>Full Stack Engineer</span>
                    <p
                    className='my-2 max-w-xl py-4'>I am a Software Engineer and the CEO & Founder of Encova 
                    Solutions, specializing in the design, development, and maintenance of modern, scalable web 
                    applications. I work extensively with the MERN, PERN, Next.js, and Nest.js stacks to deliver 
                    high-quality, business-driven digital solutions.
                    </p>
                    
                    <p className='my-2 max-w-xl py-4'>Alongside leading a talented development team, I manage projects end-to-end and collaborate 
                    closely with clients across diverse industries to transform ideas into reliable, impactful 
                    products. I bring a strong foundation in programming, data structures, algorithms, databases, 
                    and full-stack web development.
                    </p>

                    <p className='my-2 max-w-xl py-4'>My hands-on experience spans HTML, CSS, Bootstrap, JavaScript, React.js, Next.js, Node.js, 
                    Express.js, Nest.js, MongoDB, and PostgreSQL, enabling me to design efficient system 
                    architectures and write clean, scalable, and maintainable code.
                    </p>
                </div>
            </div>

            {/* <div className='w-full lg:w-1/2 lg:py-8 '>
            <div className='flex justify-end'>
                <img
                    src={bgmain} alt="Abdul Basit" className='w-[400px] h-[400px]'/>
            </div>
            </div> */}
        </div>
    </div>
  )
}

export default Home