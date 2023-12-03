import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Foot_bar from "./Component/Footer.Component";
import logo from "./logo.svg";
import Product from "./Component/Product/product.component";
import Contact from "./Component/Contact/contact.component";
import About from "./Component/About/about.component";
import HeadNavbar from "./Component/Header.Component";
import Home from "./Component/Home/home.component"

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route
            path="error"
            element={
              <div>
                <p>hi</p>
              </div>
            }
          />
          <Route path="privacy-ploicy" element={<Product />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="product" element={<Contact/>} />
          <Route path="About" element={<About/>} />
          <Route index path="Home" element={<Home/>}/>
          <Route
            path="*"
            element={
              <>
              <HeadNavbar />
              <div className="container mt-5 App">
                <div className="animation-cs">
                  <p>Coming soon..</p>
                </div>
                {/* Add your page content here */}
                <div className="fade-in show">
                  <div className="bg-img" role="banner"></div>
                </div>
                <img
                  url={logo}
                  alt="100Threads"
                  className="img-rounded"
                  style={{ opacity: 0.5, postion: "relative" }}
                />

                <p style={{ fontFamily: "Snell Roundhand, cursive" }}>
                  The best clothing to buy and have a full comfort of our brand
                  products
                </p>
              </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      <Foot_bar />
    </div>
  );
}

export default App;
