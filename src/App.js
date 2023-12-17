import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FootBar from "./Component/Footer.Component";
import Product from "./Component/Product/product.component";
import Contact from "./Component/Contact/contact.component";
import About from "./Component/About/about.component";
import HeadNavbar from "./Component/Header.Component";
import Home from "./Component/Home/home.component";
import ProductId from "./Component/Product/productId.component";
import Privacy from "./Component/Policy/privacy.component";
import Terms from "./Component/Policy/terms.component";
import Order from "./Component/Order/order.component";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="terms-and-condition" element={<Terms />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="products" element={<Product/>} />
          <Route index element={<Home/>} />
          <Route path="About" element={<About/>} />
          <Route path="Order/:id" element={<Order/>} />
          <Route
            path="*"
            element={
              <>
              <HeadNavbar Setactbar='0' />
              <div className="container mt-5 App">
                <div className="animation-cs">
                  <p>Your are looking page is not found <br></br> Please visit our home and enjoy shopping..</p>
                </div>
                <a href="./">
                <div className="fade-in show">
                  <div className="bg-img" role="banner"></div>
                </div>

                <p style={{ fontFamily: "Snell Roundhand, cursive" }}>
                  The best clothing to buy and have a full comfort of our brand
                  products
                </p>
                </a>
              </div>
              </>
            }
          />
          <Route path="product/:id" element={<ProductId/>} />
        </Routes>
      </BrowserRouter>
      <FootBar />
    </div>
  );
}

export default App;
