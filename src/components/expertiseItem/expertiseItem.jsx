import React from 'react'

import './expertiseItem.css';

const ExpertiseItem = ({icon, name, text}) => {
  return (
    <div className='expertise-item'>
        <div className="title-cont">
            {icon}
            {name}
        </div>
            <div className='code'>
            <h3>&lt;h3&gt;</h3> <br />
                <h3 className='text-h3'>{text}</h3><br />
            <h3>&lt;/h3&gt;</h3> 
            </div>        
    </div>
  )
}

export default ExpertiseItem