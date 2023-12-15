import React, { useState } from 'react';
import HeadNavbar from "../Header.Component";
import "./products.component.css"
const Product = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
  const handleOrderNow = () => {
    window.location.href = './product/hfyjfju';
  };
  return (
    <>
      <HeadNavbar Setactbar='1' />
      
<hr></hr>

<div class="container" style={{paddingTop:'2rem',paddingBottom:'2rem'}}>
  <div class="d-flex flex-wrap justify-content-between">
    <div class="card mb-5" style={{width: '18rem'}}>
      <img class="card-img-top" src="cloth1.jpg" alt="Product 1"/>
      <div class="card-body">
        <h5 class="card-title">Product 1</h5>
        <div class="price">
          <p class="old-price"><strike>&#8377;1500</strike></p>
          <p class="discount"><b>&#8377;1300</b></p>
        </div>
        <center><button onClick={handleOrderNow} class="btn btn-primary">Order Now</button></center>
      </div>
    </div>

    <div class="card mb-5" style={{width: '18rem',margin: '10px'}}>
      <img class="card-img-top" src="cloth2.jpg" alt="Product 2"/>
      <div class="card-body">
        <h5 class="card-title">Product 2</h5>
        <div class="price">
          <p class="old-price"><strike>&#8377;1200</strike></p>
          <p class="discount"><b>&#8377;1000</b></p>
        </div>
        <center><button onClick={handleOrderNow} class="btn btn-primary">Order Now</button></center>
      </div>
    </div>
    <div class="card mb-5" style={{width: '18rem',margin: '10px'}}>
      <img class="card-img-top" src="cloth2.jpg" alt="Product 2"/>
      <div class="card-body">
        <h5 class="card-title">Product 2</h5>
        <div class="price">
          <p class="old-price"><strike>&#8377;1200</strike></p>
          <p class="discount"><b>&#8377;1000</b></p>
        </div>
        <center><button onClick={handleOrderNow} class="btn btn-primary">Order Now</button></center>
      </div>
    </div>

    <div class="card mb-5" style={{width: '18rem',margin: '10px'}}>
      <img class="card-img-top" src="cloth2.jpg" alt="Product 2"/>
      <div class="card-body">
        <h5 class="card-title">Product 2</h5>
        <div class="price">
          <p class="old-price"><strike>&#8377;1200</strike></p>
          <p class="discount"><b>&#8377;1000</b></p>
        </div>
        <center><button onClick={handleOrderNow} class="btn btn-primary">Order Now</button></center>
      </div>
    </div>

    <div class="card mb-5" style={{width: '18rem',margin: '10px'}}>
      <img class="card-img-top" src="cloth2.jpg" alt="Product 2"/>
      <div class="card-body">
        <h5 class="card-title">Product 2</h5>
        <div class="price">
          <p class="old-price"><strike>&#8377;1200</strike></p>
          <p class="discount"><b>&#8377;1000</b></p>
        </div>
        <center><button onClick={handleOrderNow} class="btn btn-primary">Order Now</button></center>
      </div>
    </div>

    <div class="card mb-5" style={{width: '18rem',margin: '10px'}}>
      <img class="card-img-top" src="cloth2.jpg" alt="Product 2"/>
      <div class="card-body">
        <h5 class="card-title">Product 2</h5>
        <div class="price">
          <p class="old-price"><strike>&#8377;1200</strike></p>
          <p class="discount"><b>&#8377;1000</b></p>
        </div>
        <center><button onClick={handleOrderNow} class="btn btn-primary">Order Now</button></center>
      </div>
    </div>

    <div class="card mb-5" style={{width: '18rem',margin: '10px'}}>
      <img class="card-img-top" src="cloth2.jpg" alt="Product 2"/>
      <div class="card-body">
        <h5 class="card-title">Product 2</h5>
        <div class="price">
          <p class="old-price"><strike>&#8377;1200</strike></p>
          <p class="discount"><b>&#8377;1000</b></p>
        </div>
        <center><button onClick={handleOrderNow} class="btn btn-primary">Order Now</button></center>
      </div>
    </div>

    <div class="card mb-5" style={{width: '18rem',margin: '10px'}}>
      <img class="card-img-top" src="cloth2.jpg" alt="Product 2"/>
      <div class="card-body">
        <h5 class="card-title">Product 2</h5>
        <div class="price">
          <p class="old-price"><strike>&#8377;1200</strike></p>
          <p class="discount"><b>&#8377;1000</b></p>
        </div>
        <center><button onClick={handleOrderNow} class="btn btn-primary">Order Now</button></center>
      </div>
    </div>


    {/* <!-- Repeat this pattern for more products --> */}

  </div>
</div>

    </>
  );
};



export default Product;
