import React from 'react'

function Navbar() {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light bg-light hidden md:block top-0 w-full z-50 px-48 ml-20"
    >
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar 