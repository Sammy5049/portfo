import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Sidebar from './Components/Sidebar/Sidebar';
import Techstack from './Components/Techstack/Techstack';
import Testimonial from './Components/Testimonial/Testimonial';
import ScrollToTop from 'react-scroll-to-top';
import Workexperience from './Components/Workexperience/Workexperience';
import { createContext, useState } from 'react';

export const ThemeContext =   createContext(null);

function App() {

  const [tems, setTems] = useState('light')


  
  const handleTheme = () => {
    setTems((prev)=> (prev === 'light' ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider  value={{tems,handleTheme}}  >
      <div id={tems}>

      <Workexperience tems={tems} handleTheme={handleTheme} />
      <Sidebar tems={tems} setTems={setTems} handleTheme={handleTheme} />
      <About />
      <Techstack />
      <Projects />
      <Education />
      <Testimonial />
      <Contact />
      </div>
      <ScrollToTop
      height='20'
      smooth={true}
      width='20'
      style={{borderRadius:'90px' , backgroundColor:`${tems=== 'dark' ? 'black' : 'tomato' }`}}
      color='white'
       />
     
    </ThemeContext.Provider>
  );
}

export default App;
