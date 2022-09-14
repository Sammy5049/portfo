import React from "react";
import "./Sidebarlist.css";
import about from '../../Images/about.jpg'
import { BsArrowBarLeft } from "react-icons/bs";
import { FcHome, FcAbout, FcList,FcGraduationCap,FcVoicePresentation, FcComboChart, FcContacts } from "react-icons/fc";
import {Link } from 'react-scroll'

const Sidebarlist = ({ expand }) => {
  return (
    <React.Fragment className="meee">
      {expand ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            
            <img src={about} alt="profilepix" />
           
          </div>
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
            
          </ul>
        </div>
      ) : (
        <div className="navbar-items-onlyicons"> 

          <ul>
            <li className="list-nav-items">
               <Link 
                 spy={true}
               smooth={true}
               duration={500}
               to="home">
              <FcHome size={25}  color={'white'} />
            </Link>
             
              
            </li>
            <li className="list-nav-items">
           <Link
             spy={true}
               smooth={true}
               duration={500}
            to="about">
              <FcAbout  size={25}  color={'white'} />
            </Link>
              
            </li>
            <li className="list-nav-items">
           <Link
             spy={true}
               smooth={true}
               duration={500}
            to="tech">
             <FcList size={25} color={'white'} />
            </Link>
              
            </li>


            <li className="list-nav-items">
               <Link
                 spy={true}
               smooth={true}
               duration={500}
                to="project">
              <FcComboChart size={25} color={'white'} />
            </Link>
             
            </li>

            <li className="list-nav-items">
           <Link
             spy={true}
               smooth={true}
               duration={500}
            to="education">
             <FcGraduationCap size={25} color={'white'} />
            </Link>
              
            </li>

            <li className="list-nav-items">
           <Link
             spy={true}
               smooth={true}
               duration={500}
            to="testimonial">
             <FcVoicePresentation size={25} color={'white'} />
            </Link>
              
            </li>


            <li className="list-nav-items">
               <Link
                 spy={true}
               smooth={true}
               duration={500}
                to="contact">
              <FcContacts size={25} color={'white'} />
            </Link>
              
            </li>
            
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default Sidebarlist;
