import React, { useState } from 'react'
import './Contact.css'
import { MdOutlineSend } from "react-icons/md";
import guru from '../../Images/guru.jpg';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Bounce from 'react-reveal/Bounce';

import Slide from 'react-reveal/Slide';


const Contact = () => {

  const API = 'http://localhost:8080/send';

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [jobtype, setJobtype] = useState();
  const [message, setMessage] = useState();
  
  const handleSubmit = () => {
    fetch(API, {
      method:   'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json', 
      },
      body: JSON.stringify({
        name,
        email,
        jobtype,
        message
      }),
    }).then((res) => res.json())
    .then((result) => {
      if(result.error){
            toast.error(result.error,{  
              position: toast.POSITION.TOP_RIGHT
            })
      }
      else{
           toast.success("Your Order has been placed",{  
              position: toast.POSITION.TOP_RIGHT
                })

        setName("");
        setJobtype("");
        setMessage("");
        setEmail("");
      }

    })
    .catch((err) =>{
      console.log(err);
    });
  };


  return (
    <div id='contact' className='container contact-cont'>
     <div className="row">
<Bounce bottom>
      <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5'>
       <div className="contact-image">
        <img src={guru} alt="" />
       </div>
      </div>
      </Bounce>

      <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7'>

      <div className="contact-section">
       <h4 className="text-center">Contact Form</h4>

       <form>
        <Slide right>
        <div className="contact-form">
         <label className='form-label'>Name</label>
         <input value={name} onChange={(e) => setName(e.target.value)} className='form-control' type="text" placeholder='Joe Cole' />
        </div>

        <div className="contact-form">
         <label className='form-label'>E-mail</label>
         <input value={email} onChange={(e) => setEmail(e.target.value)}  className='form-control'  type="email" placeholder='example@gmail.com' />
        </div>

        <div className="contact-form">
         <label className='form-label'>Job Types</label>
         <select value={jobtype} onChange={(e) => setJobtype(e.target.value)} className='form-control'>
          <option>Working Student</option>
          <option>Full time</option>
          <option>Part time</option>
          <option>Contract</option>
         </select>
        </div>


        <div className="contact-form">
         <label className='form-label'>Your messsage</label>
         <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='form-control' rows={4}  type="text" />
        </div>

        <div onClick={handleSubmit} className="form-submit">
          <Bounce left>
         <p>Submit <MdOutlineSend  /></p>
         </Bounce>
        </div>
        </Slide>

        </form>

       </div>



      </div>

      


      </div>
      <ToastContainer draggable={ true} hideProgressBar={true} closeOnClick pauseOnHover autoClose={8000} />
     </div>
   
  )
}

export default Contact