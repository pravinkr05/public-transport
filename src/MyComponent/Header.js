
import React from 'react'
import './style.css'
import logo from './logo.png'

export const Header = () => {
  return (
<header className="header-container ">
      <div className="logo-container">
        <img src={logo} alt="Company" />
        <h1 className='my-1 ml-2'> Public Transport</h1>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  
  );
}


// Header.defaultProps = {
//   title: "Your Title Here",
//   searchBar: true
// }

// Header.propTypes = {
//   title: PropTypes.string,
//   searchBar: PropTypes.bool.isRequired
// }