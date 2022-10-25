import React from 'react'
import Lightclick from "../Lightclick";
import { Button } from 'react-bootstrap';
function Skills() {
  return (
    <>
  <div className='container-fluid bg-black'>
    <div className='container'>
    <div className='row skill-lern'>
    <div className='col-11'>
      <h3>Skills</h3>
      <hr/>
      <p>I build bespoke responsive WordPress websites, working with a graphic designer (which I can provide), is what I love to do. This would typically cover both front-end development (HTML5/CSS3/JS) and back-end (WordPress as CMS fields and functionality) development.</p>
    </div>
    <div className='col-2'>
 <Lightclick buttontext="Get Started"/>
    {/* <Button variant="secondary">Get Started</Button> */}
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Skills