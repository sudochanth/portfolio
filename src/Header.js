import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <div id="header" className="container">
      <section id="intro">
        {/* <h3>Hello my name is</h3> */}
        <h1 id="name">Sunny Chanthavong</h1>
        <h2>| Full Stack Developer |</h2>
      </section>
    </div>
  );
};

export default Header;