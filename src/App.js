import logo from './logo.svg';
import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Cards from './components/Cards';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import Experience from './components/Experience';
import BlogPage from './components/BlogPage';
import Testimonial from './components/Testimonial';
import FaqSection from './components/FaqSection';
import LastSection from './components/LastSection';

function App() {
  return (
    <div>
     
      <Navbar/>
      <Hero/>
      <Expertise/>
      <div className="cards-section">
  <div style={{display:'flex',justifyContent: 'space-between', alignItems: 'center'}} ><h2 className="section-title" style={{color:'white'}}>✹ Works</h2>
  <p style={{color:'white',textDecoration:'underline'}}>view all</p>
  </div>
  <div className="card-grid">
    <Cards img={image3} title="Analysis Application"     
     description="With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence." 
       tags={['FIGMA', 'UX']}
        caseStudyText="View Case Study"
     />  
    <Cards img={image4} title="Fortknox Application"     
     description="With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence." 
       tags={['MOBILE', 'WEB']}
        caseStudyText="View Case Study"
     />  
    <Cards img={image5} title="Zenocide Application"     
     description="With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence." 
       tags={['APP', 'WEB']}
        caseStudyText="View Case Study"
     />  
    </div>
    </div>
    <div className='experience-section'>
    <h2 className="section-title" style={{color:'white'}}>✹ Experience</h2>
    <Experience heading={'Lead Product Designer'} name={'Fortknox'} date={'Mar 2022-Oct 2023'}/>
    <Experience heading={'Intern Designer'} name={'OmniSafe'} date={'Mar 2022-Oct 2023'}/>
    <Experience heading={'UI Designer'} name={'Doradesign'} date={'Mar 2022-Oct 2023'}/>
    <Experience heading={'Frontend Developer'} name={'OpacityAuthor'} date={'Mar 2022-Oct 2023'}/>
    </div>
   <BlogPage/>
   <Testimonial/>
   <FaqSection/>
  <LastSection/>
    </div>
    
  );
}

export default App;
