import React from 'react'

function HeroData() {
  return (
    <section 
        className='mt-24 md:max-w-2xl max-w-xl px-6' id="about"
    >
        <p className=' text-2xl text-white-800 md:hidden mb-3' style={{
            fontWeight:'300px'  
        }}>About</p>
        <p className='text-gray-400'>I am a dedicated Software Engineering student at FAST National University, specializing in programming and software development. My proficiency extends across several programming languages, including <span className='text-blue-500 text-lg'>Java</span>, <span className='text-blue-500 text-lg'>C++</span>, <span className='text-blue-500 text-lg'>React.js</span>, <span className='text-blue-500 text-lg'>Node.js</span>, and <span className='text-blue-500 text-lg'>PostgreSQL</span>. Through rigorous academic training and practical experience, I have cultivated expertise in software testing methodologies such as <span className='text-blue-500 text-lg'>API</span>, <span className='text-blue-500 text-lg'>GUI</span>, and <span className='text-blue-500 text-lg'>BDD</span>, ensuring the delivery of robust and high-quality software solutions.

<br/> <br />In addition to my technical skills, I possess a creative aptitude demonstrated by proficiency in <span className='text-blue-500 text-lg'>Blender</span> for design and 3D modeling. This unique blend of technical proficiency and creativity empowers me to approach problem-solving with a comprehensive outlook, striving for both functional excellence and aesthetic appeal in all my projects.</p>
    </section>
  )
}

export default HeroData