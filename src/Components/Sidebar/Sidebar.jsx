import React, { useState } from 'react'
import Home from '../Home/Home'
import './Sidebar.css'
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

import Sidebarlist from './Sidebarlist';

const Sidebar = ({tems, setTems, handleTheme}) => {

 const [expand, setExpand] = useState(false)

 const expandHandler = () => {
  setExpand(!expand);
 }

  return (
    <div className='container-fluid sidebar-section'>

     <div className=  {expand ? "expandicon sidebar" : "sidebar"} >
      <div className="display-icon">
      <p onClick={expandHandler}> {expand ? (<BsArrowBarLeft size={30}  /> ): (<BsArrowBarRight size={30} /> )}</p>
      </div>


      <Sidebarlist expand={expand} />
      
     </div>

     

     <div className="container homepage">
      <Home tems={tems} setTems={setTems} handleTheme={handleTheme} />
     </div>

    </div>
  )
}

export default Sidebar