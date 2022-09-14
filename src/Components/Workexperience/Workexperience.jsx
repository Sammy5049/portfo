import React, { useState } from 'react'
import './Workexperience.css'
import { GiHamburgerMenu } from "react-icons/gi";
import Switch from "react-switch";

import { FcHome, FcAbout, FcList,FcGraduationCap,FcVoicePresentation, FcComboChart, FcContacts } from "react-icons/fc";
import {Link } from 'react-scroll'


const Workexperience = ({tems,handleTheme}) => {
const [showMenu, setShowMenu] = useState(true);
const showHandleMenu = () => {
  setShowMenu(!showMenu);
}

  return (
 
      <div className='side-menu-container'>
        <div  className="side-show">

      <div onClick={showHandleMenu} className="icons-show">
        <GiHamburgerMenu size={30} />
      </div>

        </div>
        {showMenu ? (null) : ( <div   className="menu-list-items">
                 <ul>
            <li className="nav-items">
               <Link
               spy={true}
               smooth={true}
               duration={500}
               to="home">
                <FcHome size={25}  color={'white'} /> Home
            </Link>
              
            </li>
            <li className="nav-items">

               <Link 
                 spy={true}
               smooth={true}
               duration={500}
               to="about">
                <FcAbout size={25} color={'white'} /> About Me
            </Link>
         
             
            </li>
            <li className="nav-items">
           <Link
             spy={true}
               smooth={true}
               duration={500}
           to="tech">
                <FcList size={25} color={'white'} /> TechStack
            </Link>
              
            </li>
            <li className="nav-items">
       <Link
         spy={true}
               smooth={true}
               duration={500}
       to="project">
               <FcComboChart size={25} color={'white'} /> Project
            </Link>
              
            </li>

            <li className="nav-items">
       <Link 
         spy={true}
               smooth={true}
               duration={500}
       to="education">
               <FcGraduationCap size={25} color={'white'} /> Education
            </Link>
              
            </li>

               <li className="nav-items">
       <Link
         spy={true}
               smooth={true}
               duration={500}
       to="testimonial">
               <FcVoicePresentation size={25} color={'white'} /> Testimonial
            </Link>
              
            </li>

            <li className="nav-items">
              <Link
                spy={true}
               smooth={true}
               duration={500}
              to="contact">
                <FcContacts size={25} color={'white'} /> Contact
            </Link>
              
            </li>
            

          <li className="nav-items">
              
              
        <Switch onChange={handleTheme} checked={tems==='dark'} />
            </li>


          </ul>

      
          
        </div>)}
       

     </div>
  
  )
}

export default Workexperience