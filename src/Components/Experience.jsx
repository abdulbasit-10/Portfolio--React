import React from 'react';

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-4xl font-bold">Experience</h1>

      <div className="p-6 rounded-lg mx-auto">
        <h2 className="text-2xl font-semibold text-white">MERN Stack Developer</h2>
        <p className="text-sm font-bold">April 2025 - Present</p>
        <h3 className="text-lg mb-4">Encoder Bytes Pvt Limited</h3>

        <p className="mb-4">
          Currently working as a MERN Stack Developer, skilled in building scalable web applications. Experienced in
 Javascript, React, Next, and Tailwind CSS for responsive frontends, and Node.js, Express, and MongoDB for
 secure and efficient backends. Focused on performance, API integration, and delivering seamless user
 experiences.
        </p>

        <div className="flex flex-wrap gap-2">
          {["HTML 5", "Javascript", "React.js", "Tailwind CSS", "Next.js", "Node.js", "Express.js", "MongoDB"].map((tech) => (
            <span
              key={tech}
              className="bg-green-800 text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-white pt-10">Web Developer</h2>
        <p className="text-sm">Nov 2024 - Mar 2025</p>
        <h3 className="text-lg mb-4">Zgalleria</h3>

        <p className="mb-4">
            As aLead Web Developer, I was responsible for designing, developing, and maintaining the company’s website
 and web applications. I built the site using modern technologies such as HTML, CSS, JavaScript, and React,
 ensuring responsive design and smooth functionality. I also handled ongoing updates, performance
 optimization, and collaborated with cross-functional teams to deliver high-quality solutions.

        </p>

        <div className="flex flex-wrap gap-2">
          {["HTML 5", "Javascript", "TailwindCSS", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB"].map((tech) => (
            <span
              key={tech}
              className="bg-green-800 text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        </div>
      </div>
  );
};

export default Experience;


