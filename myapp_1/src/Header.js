import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <h1> logo </h1>
      <nav>
        <ul>
          <li>
            <a href="#home">
              <i class="fa fa-fw fa-home"></i> Home
            </a>
            <a href="#search">
              <i class="fa fa-fw fa-search"></i> Search
            </a>
            <a href="#contact">
              <i class="fa fa-fw fa-envelope"></i> Contact
            </a>
            <a href="#login">
              <i class="fa fa-fw fa-user"></i> Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
