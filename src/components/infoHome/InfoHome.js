import React from 'react';
import "./InfoHome.css";
import { Link } from 'react-router-dom';

const InfoHome = ({project}) => {
  return (
    <div className='info-home'>
        <div className="info-header">
            <Link to="/">
            <img src={require('../../images/my-logo.png')} alt="logo" className='logo' />
            </Link>
        </div>
        <div className="info-home-content">
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <button><a href={project.link} target='_blank' rel='noreferrer'>Link for Project</a></button>
        </div>
    </div>
  )
}

export default InfoHome