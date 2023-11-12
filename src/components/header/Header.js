import React, {useState} from 'react'
import {Link} from 'react-scroll';
import "./header.css";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="header">
            <img src={require('../../images/my-logo.png')} alt="logo" className='logo' />
            <div className={menuOpen ? "menu" : "menu close"} onClick={()=>setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            
            <ul className={menuOpen ? "open" : ""}>
              
                <li><Link to="home" spy={true} smooth={true} offset={-70} duration={500} className='stable'>Home</Link></li>
                <li><Link to="tool" spy={true} smooth={true} offset={-80}  duration={500} className='stable' >Tool</Link></li>
                <li><Link to="expertise" spy={true} smooth={true} offset={-60}  duration={500} className='stable' >Expertise</Link></li>
                <li><Link to="experience" spy={true} smooth={true} offset={-30}  duration={500} className='stable'>Experience</Link></li>
                <li><Link to="projects" spy={true} smooth={true} offset={-35}  duration={500} className='stable' >Projects</Link></li>
                <li><Link to="contact" spy={true} smooth={true} offset={-30}  duration={500} className='stable'>Contact</Link></li>
            </ul>
            </div>
  )
}

export default Header;


