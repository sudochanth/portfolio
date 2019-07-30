import React from 'react';
import './Navbar.css';
import crescent from '/Users/Sunny/development/programming/react-portfolio/src/imgs/crescentwhite.png';

const NavBar = () => {
  return (
    <>
      <nav id="navbar" class="sticky">
        <ul class="main-nav">
          {/* <span><li className="center"><a href="#"></a></li></span> */}
          <li className="crescent-container">
            <a href="#header">
              <img className="crescent" src={crescent} alt=""></img>
              <span className="s">S</span>
            </a>
          </li>
          <li><a href="#readme">README</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li class="push"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;