import React from 'react';

import './expertise.css';
import ExpertiseItem from '../expertiseItem/expertiseItem';

import {HiOutlineDesktopComputer} from 'react-icons/hi';
import {FaReact} from 'react-icons/fa';

const Expertise = () => {
  return (
    <div className='expertise'>
        <h2>Expertise</h2>
        <div className="expertise-container">
            <ExpertiseItem name="Backend Development" icon={<HiOutlineDesktopComputer/>} text="Skilled in both functional and OOP: SQL, MySQL, Spring, Java, JavaScript, TypeScript."/>
            <ExpertiseItem name="Frontend Dev, React" icon={<FaReact/>} text="Over 2 years of development experience in HTML, CSS, JS, React and Redux."/>
            <ExpertiseItem name="React Native Development" icon={<FaReact/>} text="Skilled in developing mobile apps using the React Native."/>
        </div>
    </div>
  )
}

export default Expertise;