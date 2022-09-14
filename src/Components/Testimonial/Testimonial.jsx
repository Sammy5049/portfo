import React from 'react'
import './Testimonial.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Zoom from 'react-reveal/Zoom';


const Testimonial = () => {

 const dataa = [
  {image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  name: 'Adeola', 
  position:'Tech Engineer',
   text:'Lorem ipsum dolor sit amet consectetur  Voluptatem quae culpa aspernatur animi dolorum libera vero atque molestias!' },
  {image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   name: 'Bisi',
    position:'Tech Engineer', 
    text:'libero eligendi a vero atque molestias!' },
  {image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  name: 'Moses',
   position:'Tech Engineer', 
   text:'Voluptatem quae culpa aspernatur animi dolorum libero eligendi a vero atque molestias!' },
  {image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   name: 'Aina',
   position:'Tech Engineer', 
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
  {image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   name: 'Cole',
   position:'Tech Engineer', 
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. molestias!' },
  {image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   name: 'Bimpe',
   position:'Tech Engineer', text:'Lorem adipisicing elit. Voluptatem quae culpa tque molestias!' },
  {image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  name: 'James',
   position:'Tech Engineer', 
  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
  {image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   name: 'Banjo',
   position:'Tech Engineer',
   text:' consectetur adipisicing elit. Voluptatem quae culpa aspernatur animi dolorum libero eligendi !' },
  {image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  name: 'Clement',
   position:'Tech Engineer', 
  text:'Lorem ipsum dolor sit amet m libero eligendi a vero atque molestias!' },
 ]

 var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      initialSlide: 0,
      arrows: false,
      autoplay: true,
      rows:1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


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
  ];

  return (
  
    <div id='testimonial' className='container testimonial-section'>

     <div className="techstack-title">
      <h4>Testimonial</h4>
      <span className='about-border'></span>
     </div>


     <div className="slider-section">
        <Slider {...settings}>
      {dataa.map((dats,index) => (
       <div className="slider-main" key={index}>
          <Zoom>
        <div style={{backgroundColor: coloring[index]}} className="slider-page">
       
          <img src={dats.image} alt="More on" className='slider-image' />
          <h5>{dats.name}</h5>
          <h6> {dats.position} </h6>
          <p>{dats.text}</p>
         
        </div>
           </Zoom>
       </div>
      ))}
      </Slider>
     </div>



    </div>
 
  )
}

export default Testimonial