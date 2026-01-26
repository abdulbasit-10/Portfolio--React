import React from 'react'
// import about from '../assets/about.png';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl font-bold'>About Me</h1>
      <div className='flex flex-wrap'>
        {/* <div className='w-full lg:w-[40%] lg:py-8'>
          <div className='flex items-center justify-start'>
            <img className='rounded-2xl h-[400px] w-[450px] object-fill' src={about} alt="about" />
          </div>
        </div> */}

        <div className='w-full lg:w-[60%]'>
          <div className='flex flex-col justify-start lg:pl-10'>
            <p className='my-2 max-w-xl py-4'>
              I am a results-driven CEO with a strong focus on innovation, strategic growth, and 
              building high-performing teams. I lead with a forward-thinking mindset, combining 
              technical expertise in web development and software engineering with a deep 
              understanding of evolving industry trends. My approach centers on delivering scalable, 
              high-quality solutions while fostering a culture of continuous improvement, 
              accountability, and excellence. I am passionate about driving organizational growth through smart technology adoption, 
              clear vision, and effective leadership. With a strong attention to detail and a 
              commitment to best practices, I take ownership of strategic decisions while empowering 
              teams to contribute meaningfully to the company's long-term success.
            </p>
            
            <p className="my-2 max-w-xl py-4">Passionate about driving sustainable organizational growth, I focus on aligning 
              technology, business objectives, and client needs to deliver tangible results. I 
              take ownership of strategic decisions while promoting transparency, efficiency, 
              and innovation across all levels of the company. My experience spans leading 
              cross-functional teams, overseeing end-to-end project development, and implementing 
              robust processes that enhance productivity and ensure the delivery of reliable, 
              high-impact solutions. Through thoughtful leadership and a commitment to best 
              practices, I aim to build not only successful products but also a resilient and 
              forward-looking organization that thrives in a rapidly evolving technological 
              landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About