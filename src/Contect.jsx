import React from 'react';
import Click from './Click';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Contect() {
  return (
    <>
    <div className='container'>
      <div className='row justify-content-around'>
        <div className='col-lg-5 contect-text'>
          <h1>
            Get in touch
          </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae blanditiis natus magni! Quae a asperiores, ipsa nobis repudiandae porro dolores expedita, laborum adipisci vitae magnam quos eum, magni quasi?</p>
        <ul>
        <li><LocalPostOfficeIcon/> <a href="mailto:49ahmadhassan@gmail.com">&nbsp; 49ahmadhassan@gmail.com</a></li>
        <li><FacebookIcon/> <a href="#" target="_blank">&nbsp; Ahmad Hassan</a></li>
        <li><LinkedInIcon/> <a href="#" target="_blank">&nbsp; Linked In</a></li>
        <li><InstagramIcon/> <a href="#" target="_blank">&nbsp; Instagram</a></li>
        <li><WhatsAppIcon/> <a href="tel:0303-0853614">&nbsp; 0303-0853614</a></li>
        <li><TwitterIcon/> <a href="#" target="_blank">&nbsp; Twiter</a></li>
        <li><YouTubeIcon/> <a href="#" target="_blank">&nbsp; Ahmad Hassan Official</a></li>
        </ul>
        </div>
        <div className='col-lg-6 contect-link'>
          
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Phone Number (optional)</Form.Label>
        <Form.Control placeholder="0300-0000000" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message.....</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Click buttontext="Submit"/>
      {/* <Button className='my-4' variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>
        </div>
      </div>
    </div>
    </>
  )
}
export default Contect