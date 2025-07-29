import React from 'react'
import { useState } from 'react'
import menuIcon from "../assets/menuIcon.png"
import closeIcon from "../assets/closeIcon.png"

function Navbar() {
 
  const [menuOpen, setMenuOpen] = useState(false)




  return (
    <nav className='navbar'>
      <a href='/' className='navbar__title'>
        My portfolio
      </a>
      
      <div className='navbar__menu'>
        <img className='navbar__menuBtn' src={menuOpen ? closeIcon : menuIcon}
        alt=""
        onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`navbar__menuItems ${menuOpen && "navbar__menuOpen"}`} onClick={() => {setMenuOpen(false)}}>
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#experience">Experience</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

      </div>
      
    </nav>
   
    
  )
}

export default Navbar