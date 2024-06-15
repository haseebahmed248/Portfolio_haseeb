import React from 'react';
import '../index.css'

function Hero() {
  return (
    <div className="flex flex-col justify-center md:px-48 px-6 text-white md:ml-20 mt-24 md:mb-24 mb-6 relative">
      <h3 className="text-6xl font-bold mb-5">
        Haseeb Ahmed
      </h3>
      <p className="text-2xl text-left">Software Engineer</p>
      <p className="text-xl mt-3 text-gray-400 max-w-96">Software Engineering student at FAST-NUCES, passionate about technology with skills in Java, C++, Python, and web development. Seeking summer internship opportunities to enhance practical knowledge and contribute to meaningful projects.</p>
    </div>
  );
}

export default Hero;
