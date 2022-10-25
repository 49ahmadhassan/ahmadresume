import React from 'react'
import ConstructionIcon from '@mui/icons-material/Construction';
import Skillcard from './skills/Skillcard';
import Carasoual from './skills/Carasoual';
import Testinomilas from './skills/Testinomilas';
function Skills() {
  return (
    <>
   
<Carasoual/>

     <div className='container'>
      <div className='row'>
        <div className='col'>
          <h2><ConstructionIcon/> Core Skills</h2>
        </div>
      </div>
        <div className='row pb-4 justify-content-around '>
            <div className='col-md-4 p-4'><Skillcard skill="Mern Stack" experience="4" projects="6"/></div>
            <div className='col-md-4 p-4'><Skillcard skill="C Programming" experience="7" projects="11"/></div>
            <div className='col-md-4 p-4'><Skillcard skill="Photoshop" experience="5" projects="8"/></div>
            <div className='col-md-4 p-4'><Skillcard skill="Frontend-Development" experience="5" projects="7"/></div>
        </div>
    </div>
    <Testinomilas/>  
    </>
  )
}

export default Skills




{/* <div class="col-lg-4 style-3">
<div class="tour-item ">
        <div class="tour-desc bg-white">
        <div class="link-name d-flex justify-content-center"><h4>React JS Developer</h4></div>
        <div class="link-position d-flex justify-content-center">2 Year Experience | 8 Project</div> 
        <div class="d-flex justify-content-center pt-2 pb-2">
            <img class="tm-people" src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg" alt=""/>
        </div>
        <div class="tour-text color-grey-3 text-center">&ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;
            </div>
        </div>
    </div>
</div> */}