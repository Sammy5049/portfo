import React, { useState } from 'react'
import './About.css'
import about from '../../Images/about.jpg'
import Fade from 'react-reveal/Fade';


import Slide from 'react-reveal/Slide';

import Bounce from 'react-reveal/Bounce';


const About = () => {

  return (
    <div id='about' className='container text-center about-section'>
     <div className='row'>
      <Bounce bottom>

      <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
       <div className="about-image">
        <img src={about} alt="" />
       </div>
      </div>
      </Bounce>

     
      <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
       <div className="about-tittle">
<Fade top>
          <h2>About me</h2>
</Fade>
        <span className='about-border'></span>
       </div>
       <div className="about-details">
<Slide right>

        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse cupiditate reprehenderit aperiam repellendus sit consequuntur quidem dicta vitae ab. Esse exercitationem rem aliquam sapiente dignissimos ullam, iure, non corporis sint magnam quibusdam voluptates. Illum adipisci, suscipit eius, cumque sed itaque neque, repellendus sapiente cum error accusantium! Ut, dolores aperiam!
        </p>
</Slide>
       </div>
      </div>
     </div>
     
    </div>
  )
}

export default About