import React from 'react';
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSolid } from '@fortawesome/free-solid-svg-icons';



const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-container">
            <div className="left-contact">
                <h3>NIJAT YUSIFOV</h3>
                <p>
                    
                Front-end developer skilled in user-friendly web interface design using modern technologies, with a foundation in back-end development for supporting dynamic web applications and improving user experiences.</p>
            </div>
            <div className="right-contact">
                <h3>SOCIAL</h3>
                <div className="icons">
                    <a href="https://wa.me/48793032071"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a href="https://www.linkedin.com/in/nijat-yusifov-47b369198/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href="https://github.com/YusifovNijat"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="mailto:nijatyusifov@outlook.com"><FontAwesomeIcon icon={faEnvelope} /></a>

                </div>
            </div>
        </div>
        <div className="footer">
        <p>© Copyright 2023.Made by Nijat Yusifov</p>       
        </div>
    </div>
  )
}

export default Contact;