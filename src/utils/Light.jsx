import React, { useEffect, useRef } from 'react';
import '../index.css';

function LightEffect() {
  const lightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const light = lightRef.current;
      const lightSize = 500; // size of the light element
      const halfLightSize = lightSize / 2;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let left = e.pageX - halfLightSize;
      let top = e.pageY - halfLightSize;

      // Constrain the light within the viewport
      if (left < 0) left = 0;
      if (left > viewportWidth - lightSize) left = viewportWidth - lightSize;
      if (top < 0) top = 0;
      if (top > viewportHeight - lightSize) top = viewportHeight - lightSize;

      light.style.left = `${left}px`;
      light.style.top = `${top}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={lightRef} id="light" className='md:w-full max-w-xs' ></div>;
}

export default LightEffect;
