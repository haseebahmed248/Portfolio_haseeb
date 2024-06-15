import React from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = React.useState('about');

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light hidden md:block top-0 max-w-fit z-50 px-48 ml-20">
      <ul>
        <li className="relative group">
  <a
    href="#about"
    onClick={(e) => {
      e.preventDefault(); 
      handleSetActive('about');
      window.scrollTo(0, 0);
    }}
    className={`inline-block py-2 transition-all duration-100 ease-in-out transform ${activeSection === 'about' ? 'text-xl' : 'group-hover:text-xl'}`}
  >
    <span
      className={`dash inline-block duration-150 ease-in-out transform origin-left ${
        activeSection === 'about' ? 'scale-x-800 mr-10' : 'group-hover:scale-x-800 scale-x-500 mr-6 group-hover:mr-10'
      } transition-all`}
    >
      -
    </span> ABOUT
  </a>
</li>
        <li className="relative group">
          <a
            href="#projects"
            onClick={() => handleSetActive('projects')}
            className={`inline-block py-2 transition-all duration-100 ease-in-out transform ${activeSection === 'projects' ? 'text-xl' : 'group-hover:text-xl'}`}
          >
            <span
              className={`dash inline-block duration-150 ease-in-out transform origin-left ${
                activeSection === 'projects' ? 'scale-x-800 mr-10' : 'group-hover:scale-x-800 scale-x-500 mr-6 group-hover:mr-10'
              } transition-all`}
            >
              -
            </span> PROJECTS
          </a>
        </li>
        <li className="relative group">
          <a
            href="#experience"
            onClick={() => handleSetActive('experience')}
            className={`inline-block py-2 transition-all duration-100 ease-in-out transform ${activeSection === 'experience' ? 'text-xl' : 'group-hover:text-xl'}`}
          >
            <span
              className={`dash inline-block duration-150 ease-in-out transform origin-left ${
                activeSection === 'experience' ? 'scale-x-800 mr-10' : 'group-hover:scale-x-800 scale-x-500 mr-6 group-hover:mr-10'
              } transition-all`}
            >
              -
            </span> EXPERIENCE
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
