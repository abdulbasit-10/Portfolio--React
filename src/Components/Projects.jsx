import React from 'react';
import project1 from '../assets/Project1.png';
import project2 from '../assets/Project2.png';
import project3 from '../assets/Project3.png';

const projectData = [
  {
    title: 'Airbnb Clone',
    description:
      'A fully functional dashboard with features like Add Plants, Get Plants, Update and Delete Plants, Transfer details, Saving details and user authentication.',
    tech: ['HTML', 'Tailwind CSS', 'React'],
    image: project1,
    alt: 'Dashboard Project',
  },
  {
    title: 'JKD Pakistan',
    description:
      'A portfolio project built using JavaScript (along with HTML and Tailwind CSS) to showcase your skills, projects, and contact information. It reflects technical and design abilities.',
    tech: ['HTML', 'Tailwind CSS', 'Javascript'],
    image: project2,
    alt: 'Portfolio Project',
  },
  {
    title: 'Planto Admin Dashboard',
    description:
      'A simple Rock, Paper, Scissors game. Rules: Rock beats Scissors, Scissors beats Paper, Paper beats Rock.',
    tech: ['HTML', 'CSS', 'Javascript'],
    image: project3,
    alt: 'Rock Paper Scissor Game',
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
            <div className='flex flex-wrap gap-2'>
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className='bg-green-700 text-white px-3 py-1 text-xs rounded-full'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

