import Company from './home/Company';
import Slider from './home/Slider';
import Effective from './home/Effective';
import React from 'react'
function Contact() {
  return (
    <>
    <Slider heading="Software Enginerr and Mathematician." text="Freelance specialist in responsive WordPress design, front-end development, custom WordPress builds and WooCommerce." image="./image/banner2.png"/>
<Effective/>
    <div className='container'>
      <div className='row d-flex justify-content-center align-item-center'>
        <div className='col'>
          <Company/>
        </div>
      </div>
    </div>


    </>
  )
}
export default Contact