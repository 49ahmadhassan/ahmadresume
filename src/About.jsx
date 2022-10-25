import { Public } from '@mui/icons-material';
import React from 'react'

import Background from './aboutus/Background';
import Certificate from './aboutus/Certificate';
import Skills from './aboutus/Skills';
import Slider from './home/Slider';
function About() {
  return (
    <>
    <Slider heading="Software Engineer at Codeavour." text="I'm a WordPress specialist, developer and creative designer. I’m passionate about WordPress, and I’ve been using it to develop modern and impressive websites for clients for nearly 10 years." image="./image/banner2.png"/>
    {/* Background */}
    <Background/>
   {/* Skills */}
   <div className='container-fluid bg-black'>
    <div className='container'>
    <div className='row skill'>
    <div className='col-lg-4'>
      <h3>Skills</h3>
      <hr/>
      <p>I build bespoke responsive WordPress websites, working with a graphic designer (which I can provide), is what I love to do. This would typically cover both front-end development (HTML5/CSS3/JS) and back-end (WordPress as CMS fields and functionality) development.</p>
    </div>
    <div className='col-lg-8'>
      <div className='row'>
        <div className='col-6'> <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Bootstrap</li>
        <li>React JS</li>
        <li>C Programming</li>
        <li>Node JS</li>
        <li>Wordpress</li>
        <li>PHP</li>
        <li>Laraval</li>
      </ul></div>
        <div className='col-6'><ul>
        <li>Photoshop</li>
        <li>Figma</li>
        <li>Illustartor</li>
        <li>Git Hub</li>
        <li>Draw.io</li>
        <li>Elementor</li>
        <li>ACF</li>
        <li>Reapter</li>
        <li>Gutten Burg</li>
        <li>Generate Press</li>
      </ul></div>
      </div>
    </div>
    </div>
    </div>
   </div>
   {/* codeable */}
   <Certificate/>
   {/* Lets Talk */}
 <Skills/>
   
    </>
  )
}

export default About;