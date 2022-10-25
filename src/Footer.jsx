import React from 'react'

export const Footer = () => {
  return (
    <>
    <div className='container-fluid bg-black'>
      <div className='row'>
        <div className='col d-flex justify-content-center'>
          <img src={process.env.PUBLIC_URL+'./image/logo.png'} width="90" />
        </div>
      </div>
      <div className='row text-light'>
        <div className='col d-flex justify-content-center'>
        <h6>2022 Ahmad Owner. Term|Privacy</h6>
    <h6>Made By Mern Stack</h6>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer;