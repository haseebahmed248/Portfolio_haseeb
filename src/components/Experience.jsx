import React from 'react'

function Experience() {
  const experiences = [
    {
      date: '02-13-2024',
      title: 'JPF/SPF Research',
      description: 'I worked as a research assistant in the JPF/SPF research project. I was responsible for settingup JPF/SPF tools and running them on different Java programs. Also, I was responsible for presenting the results of the java programs.',
      tags: ['JPF', 'SPF','Java']
    },
  ];

  return (
    <section
      className='mt-28 mb-10 max-w-xs sm:max-w-sm md:max-w-2xl px-6 p-5 md:flex hover:backdrop-brightness-125 transition-all duration-200 rounded border-transparent hover:border-gray-500 hover:shadow-lg'
      id="experience"
    >
      {experiences.map((experience, index) => (
        <div key={index} className='flex'>
          <div className='text-gray-400 block w-80 h-fit px-2 mr-4'>{experience.date}</div>
          <div>
            <h1 className='font-extrabold text-lg text-white-800 mb-4'>{experience.title}</h1>
            <p className='text-gray-400'>{experience.description}</p>
            <div className='flex flex-wrap'>
              {experience.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className='text-center text-stone-50 bg-rose-600 px-2 py-1 rounded-full min-w-14 mt-4 mr-2 hover:bg-rose-800 transition-all duration-200'>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Experience