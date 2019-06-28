import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Projects from './Projects';
import Contact from './Contact';


const App = () => {

  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;