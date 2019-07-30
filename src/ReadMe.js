import React from 'react';
import './Readme.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ReadMe = () => {
  return (
    <div id="readme" className="readme">
      <section className="title">
      <h2>README</h2>
      </section>
      <section className="profile">
        <section className="aboutme">
          <h3>About</h3>
          <p>I am currently pursuing my degree in Computer Science and Communications. I am a quick learner, a creative thinker and a hard worker. I am an advocate for education and love learning new things.</p>
          <br/>
          <p>My journey in computer science started when MySpace was in its heyday. I loved to create layouts for myself and friends, often making layouts in exchange for lunch and school supplies. I continued this journey by attending an intensive, full stack web development program focusing in the MERN stack. I am also finishing up my associate's degree at Salt Lake Community College and plan to pursue my bachelor's as well.</p>
          <br/>
          <p> On my free time I do a lot of bingeing of the Netflix and chocolate variety, reading and writing. When I'm not holed up at home I like to be outside and go on hikes with my dog in the summer, and snowboarding and sledding in the winter.
          </p>
        </section>
        <section className="skills">
          <h3>Skills</h3>
          <p>I recently finished a full stack web development program that taught me about the MERN stack. I am also learning Java while in school for my degree.</p>
          <br/>
          <h4>Front End</h4>
          <ul>
            <li>JavaScript/ES6</li>
            <li>React</li>
            <li>HMTL</li>
            <li>CSS</li>
          </ul>
          <br/>
          <h4>Back End</h4>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>Mongoose</li>
              <li>MongoDB</li>
            </ul>
          <br/>
          <h4>Other Skills</h4>
            <ul>
              <li>Git</li>
              <li>JSON</li>
            </ul>
        </section>
      </section>
      
    </div>
  );
};

export default ReadMe;