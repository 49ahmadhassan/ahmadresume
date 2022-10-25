import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from "react-router-dom";
// import './dashboard/Admin.css';
import './index.css';
//import './assets/index.css';
import React from 'react'
import Bar from './Bar';
import Footer from "./Footer";
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import Cv from "./Cv";
import Contect from "./Contect";
import Skills from "./Skills";
import Admin from './dashboard/Admin';
import Hireme from "./Hireme";
import Service from "./Service";
// import Sidebar from "./dashboard/Sidebar";
// import Comment from "./dashboard/components/Comment";
// import Dashboard from "./dashboard/components/Dashboard";
// import Analytics from "./dashboard/components/Analytics";
// import Product from "./dashboard/components/Product";
// import ProductList from "./dashboard/components/ProductList";
function App() {
  return (
    <>

 <Bar/>
 <Routes>
  <Route path='/' element={<><Home/></>} /> 
  <Route path='/about' element={<><About/></>} />
  <Route path='/portfolio' element={<><Portfolio/></>} /> 
  <Route path='/hireme' element={<><Hireme/></>} /> 
  <Route path='/cv' element={<><Cv/></>}/>
  <Route path='/serivce' element={<> <Service/> </>}/>
  <Route path='/skill' element={<><Skills/></>}/>
  <Route path='/contect' element={<><Contect/></>}/> 
  </Routes>
   <Footer/> 
<Routes>
  <Route path="/admin" element={<> <Admin/> </>}/>
</Routes>



        {/* <Sidebar/>
        <Routes>
          <Route path="/" element={<><Dashboard /></>} />
          <Route path="/comment" element={<><Comment /></>} />
          <Route path="/analytics" element={<><Analytics /></>} />
          <Route path="/product" element={<><Product /></>} />
          <Route path="/productList" element={<><ProductList /></>} /> 
        </Routes>
        <Sidebar/> */}
    </>
    );
  }
export default App;