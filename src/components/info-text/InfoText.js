import React from 'react'
import "./InfoText.css";

const InfoText = ({project}) => {
  return (
    <div className='info-text'>
        <div className="info-pic">
            <img src={project.image} alt="" />
        </div>
        <div className="info-text-content">
            <h3>Project Overview</h3>
          <p>{project.overview}</p>
        </div>
    </div>
  )
}

export default InfoText