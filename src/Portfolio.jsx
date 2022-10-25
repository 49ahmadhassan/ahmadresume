import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckIcon from '@mui/icons-material/Check';
import { NavDropdown } from 'react-bootstrap';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

function Portfolio(props) {
 
  return (
    <>
    <Card className='card-info' sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
         {/* {props.logoname}  */}
         {logo3()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">

               <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Visit Site</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Download Code</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">About Project</NavDropdown.Item>
            </NavDropdown>
            {/* <MoreVertIcon/>    */}
          </IconButton>
        }
        title={props.name}
        subheader={props.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <ul>
            <li><CheckIcon/> {props.s1}</li>
            <li><CheckIcon/> {props.s2}</li>
            <li><CheckIcon/> {props.s3}</li>
          </ul>
          {/* This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like. */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
      </>
  )
}
var name = "Clinic Pharmacy";
  const logo3 = () =>{
    var sum = name.charAt(0);
    return sum;
  }
  return (
    <>
    <div className='container'>
      <div className='row justify-content-between gap-5 py-5'>
        <Portfolio name="New Yourk Pizza" date="December 31, 1999" logoname="A" image="/image/port1.png" s1="Design" s2="Frontend development" s3="Backend Development"/>
        <Portfolio name={name} date="July 15, 1998"  logoname="S" image="/image/port2.png" s1="Coding" s2="testing" s3="Implementing"/>
        <Portfolio name="Indure Shopes" date="September 28, 2005" logoname="Z" image="/image/port3.png" s1="Design" s2="Frontend development" s3="Backend Development"/>
        <Portfolio name="Ilm Group of College" date="Octuber 1, 1997" logoname="F" image="/image/port4.png" s1="Design" s2="Frontend development" s3="Backend Development"/>
      </div>
    </div>
      </>
  )
}


//export default Portfolio
          

















// image="/image/port1.png"
// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper";
// export default function App() {
//   const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + (index + 1) + "</span>";
//     },
//   };
//   return (
//     <>
//       <Swiper
//         pagination={pagination}
//         modules={[Pagination]}
//         className="mySwiper"
//       >   
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//       </Swiper>
//     </>
//   );
// }





















































































// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper";
// export default function App() {
//   return (
//     <>
//       <Swiper
//         pagination={{
//           type: "progressbar",
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//       </Swiper>
//     </>
//   );
// }



















// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import {FreeMode, Pagination, Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// export default function App() {
//   return (
//     <>
//        <Swiper 
//         slidesPerView={3}
//         spaceBetween={15}
//         freeMode={true}
//         // autoplay= {true}
//         // speed ={100}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[FreeMode, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide className="myswiimg"><img src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide className="myswiimg"><img src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide className="myswiimg"><img src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide className="myswiimg"><img src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide className="myswiimg"><img src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide className="myswiimg"><img src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide className="myswiimg"><img src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide className="myswiimg"><img src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide className="myswiimg"><img src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//       </Swiper> 
//        <hr/> 


//        <Swiper
//         pagination={{
//           type: "progressbar",
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//         <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.jpg"}/></SwiperSlide>
//       </Swiper>
//     </>
//   );
// }