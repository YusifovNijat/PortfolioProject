import React from 'react';
import "./experience.css";

import wsb from "../../images/wsb.jpg";
import Itransition from "../../images/itransition.png";
import Coders from "../../images/coders.jpg";
import Google from "../../images/google.png";
import Johns from "../../images/johns.jpg";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Experience = () => {

  return (
    <div className="experience">
      <h2>Experience and Study</h2>
      <div className="experience-container">
        <div className="experience-item">
          <div className="left-box">
            <h3>WSB University <br/>Master's Degree in Computer Science</h3>
            <FontAwesomeIcon icon={faLocationDot} /><p className='location'>Warsaw, Poland</p>
            <p> I embarked on my Master's in Computer Science with a deep-seated passion for advancing my knowledge and skills in the ever-evolving world of technology. Throughout this journey, I am eager to explore cutting-edge concepts, solve complex problems, and delve into innovative research. </p>
          </div>
          <div className="right-box">
            <p className='year'>2023 - Present</p>
            <img src={wsb} alt="" />
          </div>
        </div>
        <div className="experience-item">
          <div className="left-box">
            <h3>Itansition Group <br/>Internship in Web Development</h3>
            <FontAwesomeIcon icon={faLocationDot} /><p className='location'>Warsaw, Poland</p>
            <p> I've collaborated with cross-functional teams to develop solutions using HTML, CSS, JavaScript, React, and SQL, catering to both mobile and desktop platforms. I consistently research emerging web technologies and trends, evaluating their potential integration into web projects to maintain innovation and relevance in this dynamic field. </p>
          </div>
          <div className="right-box">
            <p className='year'>Apr 2022 - Jul 2022</p>
            <img src={Itransition} alt="" />
          </div>
        </div>
        <div className="experience-item">
          <div className="left-box">
            <h3>Coders Azerbaijan <br/>Software Development Course</h3>
            <FontAwesomeIcon icon={faLocationDot} /><p className='location'>Baku, Azerbaijan</p>
            <p>Through this course, I've cultivated a versatile skill set encompassing SQL, Object-Oriented Programming (OOP), JavaScript, Redux, Spring Boot, MySQL, React.js, React Native, TypeScript, Java, and Front-End Development. These competencies equip me to excel in various facets of software development, from database management and server-side development to dynamic front-end interfaces. </p>
          </div>
          <div className="right-box">
            <p className='year'>Jun 2021 - Sep 2021</p>
            <img src={Coders} alt="" />
          </div>
        </div>
        <div className="experience-item">
          <div className="left-box">
            <h3>The Johns Hopkins University <br/>Front-End Engineering Course</h3>
            <FontAwesomeIcon icon={faLocationDot} /><p className='location'>Online</p>
            <p>I completed a front-end course at The Johns Hopkins University online, mastering essential skills such as JavaScript, Responsive Web Design, HTML, Git, and Cascading Style Sheets (CSS). This comprehensive training not only equipped me to create visually appealing and responsive web applications but also instilled strong version control practices. I'm ready to apply these skills to create user-friendly, dynamic web experiences. </p>
          </div>
          <div className="right-box">
            <p className='year'>Oct 2020 - Mar 2021</p>
            <img src={Johns} alt="" />
          </div>
        </div>
        <div className="experience-item">
          <div className="left-box">
            <h3>Google <br/>Google IT Support Professional Certificate</h3>
            <FontAwesomeIcon icon={faLocationDot} /><p className='location'>Online</p>
            <p>This program, developed by Google, has equipped me with a wide range of tools and techniques essential for troubleshooting, customer service, networking, and system administration. Proficiency in tools, including the command line interface, coupled with hands-on experience, make me a valuable asset in providing exceptional IT support services and maintaining the integrity of digital systems. </p>
          </div>
          <div className="right-box">
            <p className='year'>Sep 2020 - Dec 2020</p>
            <img src={Google} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;