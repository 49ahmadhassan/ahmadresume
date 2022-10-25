import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

function Cv() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-3 left-side'>
          <div className='container'>
            <div className='row'>
              <div className='col'>

          <div className='contact_img'>
          <img src={process.env.PUBLIC_URL+"./image/cv pic.jpg"}/>
          <h2>Ahmad Hassan</h2>
          <h6>Software Enginnerer.</h6>
          <hr/>
          </div>
          <div className='contact_info'>
            <h2>Contact Info</h2>
            <ul>
              <li><WhatsAppIcon/> &nbsp; &nbsp;03030853614</li>
              <li><LocalPostOfficeIcon/> &nbsp; &nbsp;49ahmadhassan@gmail.com</li>
              <li><LinkedInIcon/> &nbsp; &nbsp;49ahmadlinkedin.com</li>
              <li><LocalPostOfficeIcon/>&nbsp; &nbsp; Lahore Punjab, Pakistan</li>
            </ul>
          </div>
          <div className='contact_info'>
            <h2>Education</h2>
            <div>
            <span>2018 - 2022</span>
            <p>Bachular of Science in Computer Science</p>
            <p>Govt College University Faislabad</p>
            </div>
            <div>
            <span>2015 - 2017</span>
            <p>Intermediate in Computer Science</p>
            <p>BISE LAHORE</p>
            </div>
            <div>
            <span>2013 - 2015</span>
            <p>Matric</p>
            <p>BISE LAHORE</p>
            </div>
          </div>
          <div  className='contact_info'>
            <h2>Language</h2>
            <ul className='progras'>
              <li>English </li>
              <li>Urdu</li>
              <li>Punjabi</li>
              <li>Chinese</li>
            </ul>
          </div>           
          </div>
            </div>
          </div>
        </div>
        <div className='col-lg-9 border right_side'>
          <div className='container'>
            <div className='row'>
          <div className='col'>
          <h2>Profile</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repellat esse officiis reiciendis, libero eveniet consequatur sit mollitia voluptatibus quas quos aspernatur aut enim nemo ut amet commodi tempora dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione harum in perspiciatis ad veniam nesciunt, tempore ipsa excepturi nihil vitae laudantium nisi fugit nostrum accusantium ullam facere ab ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur eveniet omnis sed obcaecati vero impedit eligendi, quasi magni delectus eius nulla non odit facilis cum. Nam dicta cum reiciendis nobis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, culpa doloribus animi sunt, voluptas sint illum tempora maiores quis laboriosam praesentium! Error delectus magni aperiam cum quis, vero obcaecati ullam!</p>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cv