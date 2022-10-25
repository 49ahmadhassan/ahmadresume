import React from 'react'
import { Button } from 'react-bootstrap';
import Click from '../Click';
function Certificate() {
  return (
    <>  <div className='container-fluid'>
    <div className='row codeable'>
      <div className='col-lg-6 codeable-text'>
        <h3>NOW A CERTIFIED WORDPRESS EXPERT</h3>
        <hr/>
        <p>From late 2019, I am a certified WordPress expert at Codeable.</p>
        <p>Codeable is the only WordPress exclusive freelancer platform that connects thousands of customers with the very top WordPress freelance experts to work on projects of any size.</p>
        <p>Partners include WooCommerce, Siteground, Advanced Custom Fields, experts to work on projects of any size.</p>
        <p>Partners include WooCommerce, Siteground, Advanced Custom Fields, WP Engine and more.</p>
        {/* <Button variant="secondary">Get Started</Button> */}
        <Click buttontext="Explore Me"/>
        {/* <Button variant="outline-light" className="outline-wlight">HIRE ME</Button> */}
      </div>
      <div className='col-lg-6'>
      <img src={process.env.PUBLIC_URL+"./image/codeable.png"}/>
      </div>
    </div>
   </div></>
  )
}

export default Certificate