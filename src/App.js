import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css'
import Head_navbar from './Component/Header.Component';
import Foot_bar from './Component/Footer.Component';
// import logo from './logo.svg'


function App() {



  return (
      <div>
      <Head_navbar/>
      <BrowserRouter>
        <Routes>
         <Route path='error' element={<div><p>hi</p></div>} />
          {/*<Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={
      <div className="container mt-5 App"  >
        <div className='animation-cs' ><p>Coming soon..</p></div>
        {/* Add your page content here */}
        <div className='fade-in show'>
        <div className='bg-img' role="banner" ></div>   
        </div>
        {/* <img url={logo} alt='100Threads' style={{opacity:0.5,postion:'relative'}}/> */}
        
        <p style={{fontFamily : "Snell Roundhand, cursive"}}>The best clothing to buy and have a full comfort of our brand products</p>
      </div>} />
      </Routes>
      </BrowserRouter>
      <Foot_bar/>
      </div>

  );
}

export default App;
