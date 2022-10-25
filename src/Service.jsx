import React from 'react'
import ComputerIcon from '@mui/icons-material/Computer';
import Click from "./Click";
function Service() {
  return (
    <>
        <div className='container'>
            <div className='row text-center py-5'>
            <h1>Our Services</h1>
            </div>
            <div className='row justify-content-between gap-3'>
                <div className='col-md-3 ser-card'>
                <div className='d-flex border'>
                    <div className='ser-icon'>
                    <ComputerIcon />
                    </div>
                    <div>ddd</div>
                    </div>
                    <h4>Web Development</h4>
                    <p>Number, the more blurred it will be, and the further out the shadow will extend. For instance a shadow with 5px of horizontal offset that also has a 5px blur radius will be 10px of total shadow.</p>
                    <Click buttontext="Learn More"/>
                </div>
                {/* <div className='col-md-3 border'>1</div>
                <div className='col-md-3 border'>1</div> */}
            </div>
        </div>
    </>
  )
}

export default Service