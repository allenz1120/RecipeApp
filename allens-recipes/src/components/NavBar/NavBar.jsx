import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navBar'>
      <nav className='nav'>
          <a href='/' className='siteTitle'>3 Ward Kitchen</a>
          <ul>
              <li>
                  <a href='/about'>About</a>
              </li>
              <li>
                  <a href='/contact'>Contact</a>
              </li>
          </ul>
      </nav>
    </div>
  )
}

export default NavBar