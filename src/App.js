import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Projects from './Projects';
import Contact from './Contact';
import ReadMe from './ReadMe';
import './App.css';


const App = () => {

  return (
    <div>
      <Navbar />
      <Header />
      <ReadMe />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;