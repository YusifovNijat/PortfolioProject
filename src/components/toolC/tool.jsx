import React from 'react';

import { FaReact } from 'react-icons/fa';
import {BiLogoJavascript, BiLogoSass, BiLogoTypescript, BiLogoJava} from 'react-icons/bi';
import {DiHtml5, DiCss3} from 'react-icons/di';
import {TbSql} from 'react-icons/tb';
import {SiSpring} from 'react-icons/si';

import './tool.css';
import ToolItem from '../toolItem/toolItem';

const Tool = () => {
  return (
    <div className='tool'>
      <h2>TOOLS</h2>
      <div className="tools-container">
        <ToolItem name='React' icon={<FaReact/>}/>
        <ToolItem name='Typescript' icon={<BiLogoTypescript/>}/>
        <ToolItem name='React Native' icon={<FaReact/>}/>
        <ToolItem name='Java' icon={<BiLogoJava/>}/>
        <ToolItem name='Spring' icon={<SiSpring/>}/>
        <ToolItem name='HTML' icon={<DiHtml5/>}/>
        <ToolItem name='CSS' icon={<DiCss3/>}/>
        <ToolItem name='SQL' icon={<TbSql/>}/>
        <ToolItem name='Sass' icon={<BiLogoSass/>}/>
        <ToolItem name='Javascript' icon={<BiLogoJavascript/>}/>
      </div>
    </div>
  )
}

export default Tool;