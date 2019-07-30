import React from 'react';
import './Projects.css';
import studio from '/Users/Sunny/development/programming/react-portfolio/src/imgs/StudioGhibli.png';
import face from '/Users/Sunny/development/programming/react-portfolio/src/imgs/face.png';

const Projects = () => {
  return (
    <div id="portfolio" className="portfolio">
      <h2>Portfolio</h2>
      <div style={{ padding: "3em" }} className="portfolio-container">
        <section>
          <h3>Studio Ghibli API</h3>
          <img className="port-image" src={studio} alt=""/>
        </section>
        <section style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
          <p>
            This project was made to gain an understanding of API's and pulled from the Studio Ghibli API in order to display all movies made from the studio. 
            <br/>
            <br/>
            <a href="https://stupefied-shirley-ecca23.netlify.com/" target="_blank">See it in action</a> ||
            <a href="https://github.com/sudochanth/studioghibli" target="_blank"> Github</a>
          </p>
        </section>

        
        <section style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
          <p>
          Worked on a full stack website using React.js, JavaScript, Node.js, PostgreSQL and a REST API by Clarifai that allows users to detect faces in an uploaded image URL using AI recognition.
            <br/>
            <br/>
            <a href="https://sc-facerecognition.herokuapp.com/" target="_blank">See it in action</a> ||
            <a href="https://github.com/sudochanth/react-facialrecognition-fe" target="_blank"> Github</a>
          </p>
        </section>

        <section style={{ textAlign: "right" }}>
          <h3>Face Recognition App</h3>
          <img className="port-image" src={face} alt=""/>
        </section>
      </div>
    </div>
  );
};

export default Projects;