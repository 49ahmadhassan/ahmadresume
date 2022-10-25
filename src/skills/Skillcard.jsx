import React from 'react'
import Card from 'react-bootstrap/Card';
function Skillcard(props) {
  return (
    <>
    <Card style={{ width: '80%' }}>
      <Card.Body className='text-center'>
        <Card.Title><h3>{props.skill}</h3></Card.Title>
        <Card.Subtitle className="mb-2 text-muted experi">{props.experience} Year </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted proj">{props.projects} Projects</Card.Subtitle>
        <Card.Text>
        <div className='year'>
               <span>a</span>
               <span>a</span>
               <span>a</span>
               <span>a</span>
               <span>a</span>
               <span>a</span>
               <div>a</div>
               <div>a</div>
               <div>a</div>
               <div>a</div>
               <div>a</div>
               <div>a</div>
               <div>a</div>
               <div>a</div>
              </div>
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </>
  )
}

export default Skillcard