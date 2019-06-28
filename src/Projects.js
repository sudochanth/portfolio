import React from 'react';
import './Projects.css';
import studio from '/Users/Sunny/development/programming/react-portfolio/src/imgs/StudioGhibli.png';

const Projects = () => {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-list">
        <div className="project">
          <h3>Studio Ghibli API Project</h3>
          <a href="https://stupefied-shirley-ecca23.netlify.com/">See it in action</a>
          <br/>
          <br/>
          <a href="https://github.com/sudochanth/studioghibli">Github</a>
          <img className="studio" src={studio}></img>
          <p>
            This project was made to gain an understanding of API's and pulled from the Studio Ghibli API in order to display all movies made from the studio. 
          </p>
          <p>
            Created using React & CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;