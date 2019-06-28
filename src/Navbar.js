import React from 'react';
import './Navbar.css';

const NavBar = () => {
  return (
    <>
      <nav id="navbar" class="sticky">
        <ul class="main-nav">
          <li><a href="#">About</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Stuff</a></li>
          <li class="push"><a href="#">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;