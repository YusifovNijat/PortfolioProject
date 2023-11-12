import React from 'react';
import "./InfoFooter.css";

const InfoFooter = ({project}) => {
  return (
    <div className='info-footer'>
        <div className="footer-container">
            <h3>Tools</h3>
            <div className="span-container">
                {project.tools.map(tool => (
                <span key={tool}>{tool}</span>
                ))}
            </div>
            <h3>GitHub Code: <a href={project.github} target="_blank" rel="noreferrer">Here</a></h3>
        </div>
    </div>
  )
}

export default InfoFooter