import React from 'react';
import project1 from "./assets/Project1.png";
import project2 from "./assets/Project2.png";
import project3 from "./assets/Project3.png";
import project4 from "./assets/Project4.png";
import project5 from "./assets/Project5.png";
import project6 from "./assets/Project6.png";

const projectData = [
  {
    title: 'Avicenna Enterprise Solution',
    description:
      'Avicenna Enterprise Solutions delivers innovative web, mobile, and AI-driven digital solutions that help businesses grow with quality, reliability, and scalability.',
    image: project1,
    alt: 'Avicenna Enterprise Solution Project',
    link: 'https://avicennaenterprise.com/',
  },
  {
    title: 'AI Tool Finder',
    description: `Built a platform to explore and filter AI tools with advanced search and category filters.`,
    image: project2,
    alt: 'AI Tool Finder Project',
    link: 'https://aitoolfind.co/',
  },
  {
    title: 'Study Studio',
    description:
      'Developed an educational platform with responsive UI for digital learning resources.',
    image: project3,
    alt: 'Study Studio Project',
    link: 'https://studystudio.jerrizz.com/',
  },
  {
    title: 'Planto Website',
    description: `Plant-store eCommerce site with cart, checkout, and admin dashboard.`,
    image: project4,
    alt: 'Planto Project',
    link: 'https://planto-project-9814.vercel.app/',
  },
  {
    title: 'JKD Pakistan',
    description: `Organization website with landing page, student dashboard, and admin panel.`,
    image: project5,
    alt: 'JKD Pakistan Project',
    link: 'https://jkd-organization.vercel.app/',
  },
  {
    title: 'Limelight Performance Dashboard',
    description:
      'Data dashboard with real-time analytics and interactive charts for insights.',
    image: project6,
    alt: 'Limelight Dashboard',
    link: 'https://limelight.trionex.pk/dashboard-1',
  },
];

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
      <h2 className='my-20 text-center text-4xl font-bold'>Projects</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-10'>
        {projectData.map((project, index) => (
          <div
            key={index}
            className='bg-black text-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 w-full max-w-[350px] mx-auto flex flex-col justify-between h-full'
          >
            <div>
              <div className='w-full h-40 mb-10 flex items-center justify-center'>
                <img
                  src={project.image}
                  alt={project.alt}
                  className='h-full w-auto object-contain'
                />
              </div>

              <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>

              <p className='text-sm text-gray-400 mb-4'>{project.description}</p>
            </div>

            {/* View Button */}
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block bg-green-600 text-white px-5 py-2 text-sm rounded-lg font-medium hover:bg-green-800 transition mt-4'
            >
              Opens the live project in a new tab.
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

