import React from 'react';
import {Link} from "react-router-dom";

import "./projects.css";


const Projects = ({lists}) => {
    
  return (
    <div className='projects'>
        <h2>Projects</h2>
        <div className="projects-container">
            {lists.map(list=>{
                return  <div key={list.id} className="projects-item">
                            <div className="left-item">
                                <img src={list.image} alt="" />
                            </div>
                            <div className="right-item">
                                <h3>{list.name}</h3>
                                <p>{list.description}</p>
                                <Link to={`/project/${list.id}`}>
                                    <button >Learn More</button>   
                                </Link>         
                            </div>
                        </div>
            })}
        </div>
    </div>
  )
}

export default Projects;