import React from 'react'
import test from '../../public/vite.svg'
import '../index.css'

function Projects() {
  const projects = [
    {
      image: test,
      title: 'Enhanced Jira',
      description: 'Enhanced-Jira integrates real-time live chat into Jira, enhancing team collaboration and productivity. It bridges the gap in traditional project management tools by enabling instantaneous communication directly within the platform. Transform your project management experience with seamless, live chat capabilities.',
      tags: ['React', 'Node', 'PostgreSQL', 'Socket.io','Redis'],
      url: 'https://github.com/haseebahmed248/Enchanced-Jira'
    },
    {
      image: test,
      title: 'Poetry Management System ',
      description: 'The Poetry Management System is a Java-based application designed to organize and manage a collection of poems. It features a user-friendly interface built with Java Swing, uses Apache SQL for database operations, and implements design patterns such as Facade and Singleton. The project follows SOLID principles and includes JUnit testing, Log4j logging, and comprehensive JavaDocs.',
      tags: ['Java', 'Apache SQL', 'Java Swing', 'Log4j','JUnit'],
      url: 'https://github.com/haseebahmed248/Poetry-management-System'
    },{
      image: test,
      title: 'UnitTesting',
      description: 'The "UnitTesting" project automates testing for a local website hosted on Docker, covering both GUI and API aspects. It employs tools such as Metabase, Insomnia, Semgrep, and Checkstyle to ensure comprehensive code quality and functionality. The project is primarily developed in Java.',
      tags: ['Java', 'Docker', 'Metabase', 'Insomnia','Java HTTP Client','Semgrep','Checkstyle'],
      url: 'https://github.com/haseebahmed248/UnitTesting.git'
    },{
      image: test,
      title: 'RealTime Chat System',
      description: 'The project is a clone of WhatsApp, designed as a full-stack application with real-time messaging capabilities, voice and video calls, and persistent data storage. It uses modern web technologies to replicate the key features of WhatsApp.',
      tags: ['C++','Cmake','Qt','C','MakeFile'],
      url: 'https://github.com/RealTime-Messaging/WhatsApp-'
    }
    // Add more projects here...
  ];

  return (
    <section
      className='mt-28 md:max-w-2xl max-w-fit px-6 p-5'
      id="projects"
    >
      {projects.map((project, index) => (
        <div key={index} className='flex mb-4 hover:backdrop-brightness-125 p-6 transition-all duration-200 rounded border-transparent hover:border-gray-500 hover:shadow-lg'>  
        <a href={project.url} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline' style={{ textDecoration: 'none' }}>
          <img className='w-16 h-16 mr-4 mb-4 ' src={project.image} />
          <div>
            <h1 className='font-extrabold text-lg text-white-800 mb-4'>{project.title}</h1>
            <p className='text-gray-400'>{project.description}</p>
            <div className='flex flex-wrap'>
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className='text-center text-stone-50 bg-rose-600 px-2 py-1 rounded-full min-w-14 mt-4 mr-2 hover:bg-rose-800 transition-all duration-200'>{tag}</span>
              ))}
            </div>
            
          </div>
          </a>
        </div>
      ))}
    </section>
  )
}

export default Projects