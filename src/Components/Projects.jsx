import React from 'react';
import project1 from '../assets/Project1.png';
import project2 from '../assets/Project2.png';
import project3 from '../assets/Project3.png';
import project4 from '../assets/Project4.png';
import project5 from '../assets/Project5.png';
import project6 from '../assets/Project6.png';

const projectData = [
  {
    title: 'Avicenna Enterprise Solution',
    description:
      'Avicenna Enterprise Solutions delivers innovative web, mobile, and AI-driven digital solutions that help businesses grow with quality, reliability, and scalability.',
    tech: ['HTML', 'Tailwind CSS', 'React.js', 'Node.js', 'Express.js'],
    image: project1,
    alt: 'Avicenna Enterprise Solution Project',
  },
  {
    title: 'AI Tool Finder',
    description: `Built a platform to explore and filter AI tools with advanced search and category filters. Developed UI, admin dashboard (CRUD), and database system for tool management.`,
    tech: ['HTML', 'Tailwind CSS', 'React.js', 'Express.js', 'MongoDB'],
    image: project2,
    alt: 'AI Tool Finder Project',
  },
  {
    title: 'Study Studio',
    description:
      'Developed an educational platform with responsive UI for digital learning resources, offering a smooth user experience and optimized performance.',
    tech: ['HTML', 'Tailwind CSS', 'React.js', 'Node.js', 'Express.js'],
    image: project3,
    alt: 'Study Studio Project',
  },
  {
    title: 'Planto Website',
    description: `Built a full plant-store eCommerce site with product browsing, cart, and checkout. Integrated admin dashboard for adding, editing, and deleting products.`,
    image: project4,
    alt: 'Planto Project',
  },
  {
    title: 'JKD Pakistan',
    description: `Created a complete organization website with landing page, student dashboard, and admin panel. Delivered end-to-end UI, backend APIs, and secure login system.`,
    image: project5,
    alt: 'Portfolio Project',
  },
  {
    title: 'Limelight Performance Tracking Dashboard',
    description:
      'Developed a data dashboard to monitor sales, footfall, and conversion KPIs with real-time analytics and interactive charts for retail insights.',
    image: project6,
    alt: 'Limelight Dashboard',
  },
];


const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <h2 className='my-20 text-center text-4xl font-bold'>Projects</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-10'>
        {projectData.map((project, index) => (
          <div
            key={index}
            className='bg-neutral-900 text-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300'
          >
            <div className='w-full h-48 mb-4 flex items-center justify-center'>
              <img
                src={project.image}
                alt={project.alt}
                className='h-full object-contain rounded-lg'
              />
            </div>
            <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
            <p className='text-sm mb-4'>{project.description}</p>
            {/* <div className='flex flex-wrap gap-2'>
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className='bg-green-700 text-white px-3 py-1 text-xs rounded-full'
                >
                  {tech}
                </span>
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
