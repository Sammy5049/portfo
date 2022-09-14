import React from 'react'
import Projectlist from './Projectlist'
import './Projects.css'

const Projects = () => {

 const proj = [
  {name: 'Heywhy graphics', 
  describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum, harum est iure aliquam distinctio earum quibusdam labore error amet voluptate nostrum molestiae velit quo sequi repudiandae quos. Perferendis quasi dicta ratione, qui est consequuntur unde nulla vitae eius in, distinctio sunt explicabo ex, iure dolores itaque rem? Cupiditate, quae!', 
  Link: 'google.com',
  technames: [
   {techused:'html'},
   {techused:'Javascript'},
   {techused:'css'},
   {techused:'Material Ui'},
   {techused:'Tailwindcss'},
   {techused:'nextjs'},
   {techused:'PHP'},
   {techused:'React js'}
   

  ]
 
 },

 {name: 'Todo App', 
  describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum, harum est iure aliquam distinctio earum quibusdam labore error diandae quos. Perferendis quasi dicta ratione, qui est consequuntur unde nulla vitae eius in, distinctio sunt explicabo ex, iure dolores itaque rem? Cupiditate, quae!', 
  Link: 'google.com',
  technames: [
   {techused:'html'},
   {techused:'Javascript'},
   {techused:'css'},
   {techused:'Material Ui'},
   {techused:'Tailwindcss'},
   {techused:'React js'},
   {techused:'Redux'}
   

  ]
 
 },
 {name: 'Admin Dashboard', 
  describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum, harum est iure aliquam distinctio earum quibusdam labore error amet voluptate nostrum  ex, iure dolores itaque rem? Cupiditate, quae!', 
  Link: 'google.com',
  technames: [
   {techused:'Material Ui'},
   {techused:'Tailwindcss'},
   {techused:'nextjs'},
   {techused:'PHP'},
   {techused:'React js'},
   {techused:'Redux'}
   

  ]
 
 },
 {name: 'Reasturant Website', 
  describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum, harum est iure aliquam distinctio earum quibusdam labore error amet voluptate nostrum molestiae velit quo sequi repudiandae quos. Perferendis quasi dicta ratione, qui est consequuntur unde nulla vitae eius in, distinctio sunt explicabo ex, iure dolores itaque rem? Cupiditate,  sequi repudiandae quos. Perferendis quasi dicta ratione, qui est consequuntur unde nulla vitae eius in, distinctio sunt explica sequi repudiandae quos. Perferendis quasi dicta ratione, qui est consequuntur unde nulla vitae eius in, distinctio sunt explica quae!', 
  Link: 'facebook.com',
  technames: [
   {techused:'Material Ui'},
   {techused:'nextjs'},
   {techused:'React js'},
   {techused:'Redux'},
   
   {techused:'PHP'},
   

  ]
 
 }

 ]


  return (
    <div id='project' className='container'>
    <div className="techstack-title">
      <h4>Project</h4>
      <span className='about-border'></span>
     </div>


     <div className='row'>
      {proj.map((itemss,index) => (
      <div key={index} className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>

       <Projectlist {...itemss} />


      </div>

      ))}
     
     </div>
     

    </div>
  )
}

export default Projects