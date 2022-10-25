import {Button } from 'react-bootstrap';
import Lightclick from '../Lightclick';
import { NavLink } from "react-router-dom";
import React from 'react'
function Contact(props) {
  return (
    <>
   <div className='bg-black text-light res-img container-fluid'>
    <div className='container'>
    <div className='row py-5 position-relative'>
      <div className='col-lg-6 text'>
        <div>
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
        <div className='d-flex gap-3'>
        <NavLink exact to ="/cv"> 
        <Lightclick buttontext="CV / Resume"/>
        </NavLink>
        <NavLink exact to ="/hireme"> 
        <Lightclick buttontext="Hire Me"/>
          </NavLink>
          </div>
        </div>
    
      </div>
      <div className='col-lg-6 pic'>
      <img src={props.image} width="100"/>
      </div>
    </div>
    </div>
   </div>
    </>
  )
}
export default Contact