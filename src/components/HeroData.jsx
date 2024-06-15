import React from 'react'

function HeroData() {
  return (
    <section 
        className='mt-24 md:mt-12 lg:mt-6 md:max-w-2xl max-w-screen-sm  px-6 md:px-3 lg:px-1' id="about"
    >
        <p className=' text-2xl md:text-xl lg:text-lg text-white-800 md:hidden mb-3' style={{
            fontWeight:'300px'  
        }}>About</p>
        <p className='text-gray-400 text-sm md:text-base lg:text-lg'>I am a dedicated Software Engineering student at FAST National University, specializing in programming and software development. My proficiency extends across several programming languages, including <span className='text-blue-500 text-lg md:text-base lg:text-sm'>Java</span>, <span className='text-blue-500 text-lg md:text-base lg:text-sm'>C++</span>, <span className='text-blue-500 text-lg md:text-base lg:text-sm'>React.js</span>, <span className='text-blue-500 text-lg md:text-base lg:text-sm'>Node.js</span>, and <span className='text-blue-500 text-lg md:text-base lg:text-sm'>PostgreSQL</span>. Through rigorous academic training and practical experience, I have cultivated expertise in software testing methodologies such as <span className='text-blue-500 text-lg md:text-base lg:text-sm'>API</span>, <span className='text-blue-500 text-lg md:text-base lg:text-sm'>GUI</span>, and <span className='text-blue-500 text-lg md:text-base lg:text-sm'>BDD</span>, ensuring the delivery of robust and high-quality software solutions.

<br/> <br />In addition to my technical skills, I possess a creative aptitude demonstrated by proficiency in <span className='text-blue-500 text-lg md:text-base lg:text-sm'>Blender</span> for design and 3D modeling. This unique blend of technical proficiency and creativity empowers me to approach problem-solving with a comprehensive outlook, striving for both functional excellence and aesthetic appeal in all my projects.</p>
    </section>
  )
}

export default HeroData