
import { FaGraduationCap  } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css'

const Education = () => {

  const educate =[
   {name:'Obafemi Awolowo University', des:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repudiandae.', degree:' Bsc Microbiology', year: "2013-2018" },
   {name:'C A C. Sec School', des:'  Atque nobis, sed voluptate porro harum magni sit totam repellendus.', degree:' College graduation ',  year: "2009-2011" },
   
  ]

  const colorss = [
   '#4b088a',
   '#001cce',
   
  ]


  return (
    <div id="education" className='container edu-section'>

     <div className="techstack-title">
      <h4>Education</h4>
     
     
      <span className='about-border'></span>
     </div>

     <div className='education-section'>
      <VerticalTimeline lineColor="#ff6349">
       {educate.map((edu,index) => (


  <VerticalTimelineElement
  dateClassName='date-date'
    className="vertical-timeline-element--work"
    contentStyle={{ background: colorss[index], color:'#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #ffbb24' }}
    date={edu.year}
    iconStyle={{ background: colorss[index], color: '#fff' }}
    icon={<FaGraduationCap />}
  >
    <h3 className="vertical-timeline-element-title">{edu.name}</h3>
    <h5 className="vertical-timeline-element-subtitle" style={{color:'yellow'}} >{edu.degree}</h5>
    <p>
      {edu.des}
    </p>
  </VerticalTimelineElement>
       ))}

  </VerticalTimeline>
     </div>



    </div>
  )
}

export default Education