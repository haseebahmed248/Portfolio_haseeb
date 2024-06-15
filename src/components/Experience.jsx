import React from 'react'

function Experience() {
  const experiences = [
    {
      date: 'Date',
      title: 'My first project',
      description: 'This is description of my project. You can add more Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, corrupti doloribus illum tempore similique error earum, ex id corporis nihil voluptatem magnam non. Quas cumque alias vero in deserunt enim.',
      tags: ['React', 'Node']
    },
    // Add more experiences here...
  ];

  return (
    <section
      className='mt-28 mb-10 md:max-w-2xl max-w-fit px-6 p-5 md:flex hover:backdrop-brightness-125 transition-all duration-200 rounded border-transparent hover:border-gray-500 hover:shadow-lg'
      id="experience"
    >
      {experiences.map((experience, index) => (
        <div key={index} className='flex'>
          <div className='text-gray-400 block w-fit h-fit px-2 mr-4'>{experience.date}</div>
          <div>
            <h1 className='font-extrabold text-lg text-white-800 mb-4'>{experience.title}</h1>
            <p className='text-gray-400'>{experience.description}</p>
            <div className='flex flex-wrap'>
              {experience.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className='text-stone-50 bg-rose-600 px-2 py-1 rounded-full mt-2 mr-2 hover:bg-rose-800 transition-all duration-200'>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Experience



// import React from 'react'

// function Experience() {
//   return (
//     <section
//     className='mt-28 md:max-w-2xl max-w-fit px-6 p-5 md:flex hover:backdrop-brightness-125 transition-all duration-200 rounded border-transparent hover:border-gray-500 hover:shadow-lg'
//     id="experience"
// >
        
//         <div
//         className='text-gray-400 block w-fit px-2 mr-4'
//         >Date</div>
//         <div>
//             <h1
//             className='font-extrabold text-lg text-white-800 mb-4'
//             >My frist project</h1>
//             <p
//             className='text-gray-400'
//             >This is description of my project
//             you can add more Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, corrupti doloribus illum tempore similique error earum, ex id corporis nihil voluptatem magnam non. Quas cumque alias vero in deserunt enim.</p>
//             <div
//             className='flex flex-wrap'
//             >
//                 <span
//                 className='text-stone-50 bg-rose-600 px-2 py-1 rounded-full mt-2 mr-2 hover:bg-rose-800 transition-all duration-200'
//                 >React</span>
//                 <span
//                 className='text-stone-50 bg-rose-600 px-2 py-1 rounded-full mt-2 mr-2 hover:bg-rose-800 transition-all duration-200'
//                 >Node</span>
//             </div>
//         </div>
        
//     </section>
//   )
// }

// export default Experience