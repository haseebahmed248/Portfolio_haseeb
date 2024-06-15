import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { SiLeetcode } from 'react-icons/si';

function Footer() {
  return (
    <div>
      <footer className="flex md:justify-center md:items-center text-white absolute md:-bottom-60 md:left-64 left-20">
        <a href="https://linkedin.com/in/haseeb-ahmed-17509a27b" target="_blank" className="mx-2">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/haseebahmed248" target="_blank" className="mx-2">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://leetcode.com/u/haseebahmed2345/" target="_blank" className="mx-2">
          <SiLeetcode size={32} />
        </a>
      </footer>
    </div>
  );
}

export default Footer;
