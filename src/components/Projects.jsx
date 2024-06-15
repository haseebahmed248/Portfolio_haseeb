import React from 'react'
import test from '../../public/vite.svg'

function Projects() {
  const projects = [
    {
      image: test,
      title: 'My first project',
      description: 'This is description of my project. You can add more Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, corrupti doloribus illum tempore similique error earum, ex id corporis nihil voluptatem magnam non. Quas cumque alias vero in deserunt enim.',
      tags: ['React', 'Node']
    },
    // Add more projects here...
  ];

  return (
    <section
      className='mt-28 md:max-w-2xl max-w-fit px-6 p-5 md:flex hover:backdrop-brightness-125 transition-all duration-200 rounded border-transparent hover:border-gray-500 hover:shadow-lg'
      id="projects"
    >
      {projects.map((project, index) => (
        <div key={index} className='
            flex
        '>  
          <img className='w-16 h-16 mr-4 mb-4 ' src={project.image} />
          <div>
            <h1 className='font-extrabold text-lg text-white-800 mb-4'>{project.title}</h1>
            <p className='text-gray-400'>{project.description}</p>
            <div className='flex flex-wrap'>
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className='text-stone-50 bg-rose-600 px-2 py-1 rounded-full mt-2 mr-2 hover:bg-rose-800 transition-all duration-200'>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Projects