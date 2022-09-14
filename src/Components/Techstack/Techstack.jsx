import React, { useState } from 'react'
import './Techstack.css'

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


const Techstack = () => {


 const techs = [

  {name:'Frontend Developer'},
  {name:'Ui/UX Designer'},
  {name:'React js'},
  {name:'Node js'},
  {name:'Javascript'},
  {name:'Material UI'},
  {name:'Tailwind CSS'},
  {name:'Frontend Developer'},
  {name:'Ui/UX Designer'},
  {name:'React js'},
  {name:'Node js'},
  {name:'Javascript'},
  {name:'Material UI'},
  {name:'Tailwind CSS'},
  {name:'Frontend Developer'},
  {name:'Ui/UX Designer'},
  {name:'React js'},
  {name:'Node js'},
  {name:'Javascript'},
  {name:'Material UI'},
  {name:'Tailwind CSS'},

 ]


 const colors = [
  "#0088FE",
  '#00C79F',
  '#8181F7',
  '#FE2EF7',
  '#8181F7',
  '#585858',
  '#800000',
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#001CCE',
  '#00C79F',
  '#FFBB24',
  '#FB1042',
  '#800000',
  '#585858',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#001CCE',
  '#FFBB28',
  '#FF8042',
 ]

 const [loadMoreItems, setLoadMoreItems] = useState(9);

 const loadHandle = () => {
  setLoadMoreItems((prev)=>prev+3);
 }

  return (
    <div  id='tech' className='container tech-section'>
     <div className="techstack-title">
      <h4>Tech Stack</h4>
      <span className='about-border'></span>
     </div>
     <div className="row">
      {techs.slice(0,loadMoreItems).map((tech, index)=> (

       <div key={index} className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
        <Fade right>

        <div className={index===0? "techdetail-section-active techdetail-section" : "techdetail-section"}>
         <span className='tech-number' style={{backgroundColor: colors[index]}}>{index+1}</span>
         <p>{tech.name}</p>
        </div>
        </Fade>
       </div>

      ))}
     </div>
     {loadMoreItems >= techs.length ? null : (  <Zoom> <span onClick={loadHandle} className="load-more">Load more</span></Zoom>)}
    
     
    </div>
  )
}

export default Techstack