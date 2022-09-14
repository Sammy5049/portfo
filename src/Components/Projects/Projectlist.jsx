import React, { useState } from 'react'
import './Projects.css'
import { FcExpand , FcCollapse } from "react-icons/fc";

import Zoom from 'react-reveal/Zoom';



const Projectlist = ({name, describe, Link, technames }) => {

  const [expand, setExpand] = useState(false);

  const handleExpandShow = () => {
    setExpand(!expand);
  }

  const coloring = [
    'red',
    'blue',
    'tomato',
    'purple',
    'orange',
    'black',
    'brown',
    'blue',
      'purple',
       'black',
  ]


  return (
  <Zoom>
    
    <div  className= {expand ? ('project-details-opened project-details') : ('project-details') } onClick={handleExpandShow} >

    
      
 
     <div className="project-details-name-and-icon">
      <h5>

      {name}
      </h5>
      <p>
        {expand ? <FcCollapse /> : <FcExpand /> } 
      </p>
     </div>
     <div className="decription">{expand ? (<p> {describe}</p>) : (<p>{describe.substring(0,50)} .....Readmore </p>)}</div>

     


     <div className='row'>
      
     {technames && technames.map((techies,index) => (
        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' key={index}>
            <Zoom >

         <div style={{backgroundColor: coloring[index] }} className='techlist-item'>
        
         {techies.techused}
      
            
         </div>
            </Zoom>

        </div>
        
      

     ))}
     </div>
     <div className='demo-link'>
      <a target='_' href={Link}>Demo</a>
     </div>

    

    </div>
       </Zoom>
  )
}

export default Projectlist