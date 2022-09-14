import React, { useEffect, useState } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import ADEOLA from './ADEOLA.pdf'

const Home = ({tems,setTems, handleTheme}) => {

  useEffect(() => {
  
setTems((current) => (current === 'dark' ? 'dark' : 'light' ) );

  }, [tems])
  


  return (
    <div id="home" className="container-fluid home">

      <div onClick={handleTheme} className="theme-change">
          {tems === 'light' ? (<p><BsMoonStarsFill size={35} /></p>) : (<p className="rolloniown"><BsFillSunFill  size={35} /></p>)}
      </div>

      <div className="container home-content">
       <Fade right>
        <h1>Hi! I'm Damilola Adeola </h1>
         <Popup trigger={<button style={{backgroundColor:'red', color:'white', borderRadius:'5px', padding:' 3px 10px'}}> message</button>} position="right center">
    <div>You are in the right place dear customer. Hire me and let's get to business !!</div>
  </Popup>

     
       

        <h3>
          <Typewriter
            options={{
              strings: ["Frontend web developer", "UX Designer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
         </Fade>

        <Bounce bottom>

        <div className="button-control">
          <div className="first-btn">Hire me</div>
          <div className="second-btn">
            <a href={ADEOLA} download='adeola_cv.pdf'>Get Resume</a>
            </div>
        </div>
        </Bounce>



      </div>
    </div>
  );
};

export default Home;
