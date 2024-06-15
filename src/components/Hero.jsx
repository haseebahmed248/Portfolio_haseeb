import React, { useState, useEffect } from 'react';
import '../index.css'
import useTypewriter from 'react-typewriter-hook'

function InfiniteTypewriterHook(message, speed = 100) {
  const [index, setIndex] = useState(0);
  const output = useTypewriter(message[index], speed);
  
  useEffect(() => {
    if (output === message[index]) {
      setTimeout(() => {
        setIndex((index + 1) % message.length);
      }, 1000); 
    }
  }, [output, index, message]);

  return output;
}

function Hero() {
  const SoftwareEngineer = InfiniteTypewriterHook(['Software Engineer', ' '], 500);
  
  return (
    <div className="flex flex-col justify-center md:px-48 px-6 text-white md:ml-20 mt-24 md:mb-24 mb-6 relative">
      <h3 className="text-6xl font-bold mb-5 text-rose-500">
        Haseeb Ahmed
      </h3>
      <p className="text-2xl text-left text-blue-400">{SoftwareEngineer}<span className="text-rose-600 blinking-cursor">|</span></p>
      <p className="text-xl mt-3 text-gray-400 max-w-96">Software Engineering student at FAST-NUCES, passionate about technology with skills in Java, C++, Java, and web development. Seeking summer internship opportunities to enhance practical knowledge and contribute to meaningful projects.</p>
    </div>
  );
}

export default Hero;