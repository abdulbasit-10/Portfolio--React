import React from 'react'
import about from '../assets/about.png'



const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl font-bold'>About 
        <span className='text-neutral-500'>Me</span></h1>
        <div className='flex flex-wrap'>
            <div 
            className='w-full lg:w-[40%] lg:py-8'>
                <div className='flex items-center justify-start'>
                    <img className='rounded-2xl h-[400px] w-[450px] object-fill' src={about} alt="about" />
                </div>
            </div>

            <div
            className='w-full lg:w-[60%]'>
                    <div className='flex justify-center'>
                        <p className='my-2 py-6 text-justify'>
                            I am a highly dedicated and motivated individual with a strong capacity to grow, 
                            learn, and adapt to emerging technologies and evolving industry trends. 
                            My commitment to continuous improvement drives me to stay current with the latest 
                            advancements in web development and software engineering. I am constantly seeking
                            opportunities to enhance my technical skills and broaden my understanding of best 
                            practices in the field. I am currently looking for a challenging and rewarding 
                            opportunity where I can effectively utilize my existing knowledge and skill set 
                            to contribute meaningfully to the success and growth of a forward-thinking 
                            company. I believe in delivering quality work with attention to detail, and I am 
                            always eager to take ownership of my responsibilities while supporting the larger
                            vision of the organization.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About
