import React from 'react';
import HeadNavbar from "../Header.Component";
import "./products.component.css";
const Product = () => {

  // const handleOrderNow = (event) => {
  //   var id=event.target.value;
  //   window.location.href = `product/${id}`;
  // };
  return (
    <>
      <HeadNavbar Setactbar='1' />
      

<div className="container" style={{padding:'2rem'}}>
  <div className="d-flex flex-wrap justify-content-between">
    <a href="product/100T0001">
    <div className="card mb-5" style={{width: '18rem', border:'none',backgroundColor:'transparent'}}>
      <div className="image" style={{overflow:'hidden'}}>
      <img className="card-img-top" src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYST1w955IGZkexvLqa9WO0CkKEmjLYSw8CVsgHrEM1UBFeV4gTSYkzVgneBAy4R9r_Z9kjWHk8WwucaAsiMSidxGd2Pfw=w2048-h1456" alt="Product 1"/>
      </div>
      <div className="card-body" style={{backgroundColor:'#000',color:'#fff'}}>
        <h5 className="card-title">Turtleneck with full sleeve</h5>
        <div className="price">
          <p className="old-price"><strike>&#8377;1679</strike><div style={{font:'Inconsolata',fontSize:12}}>(70% discount)</div></p>
          <p className="discount"><b>&#8377;479</b></p>
        </div>
        <center><button className="btn btn-dark" style={{border: '2px solid white'}} value="100T0001">Buy Now</button></center>
      </div>
    </div>
    </a>

    {/* <div className="card mb-5" style={{width: '18rem',margin: '10px'}}>
      <img className="card-img-top" src="cloth2.jpg" alt="Product 2"/>
      <div className="card-body">
        <h5 className="card-title">Product 2</h5>
        <div className="price">
          <p className="old-price"><strike>&#8377;1200</strike></p>
          <p className="discount"><b>&#8377;1000</b></p>
        </div>
        <center><button onClick={handleOrderNow} className="btn btn-dark">Order Now</button></center>
      </div>
    </div>
    <div className="card mb-5" style={{width: '18rem',margin: '10px'}}>
      <img className="card-img-top" src="cloth2.jpg" alt="Product 2"/>
      <div className="card-body">
        <h5 className="card-title">Product 2</h5>
        <div className="price">
          <p className="old-price"><strike>&#8377;1200</strike></p>
          <p className="discount"><b>&#8377;1000</b></p>
        </div>
        <center><button onClick={handleOrderNow} className="btn btn-dark">Order Now</button></center>
      </div>
    </div>

    <div className="card mb-5" style={{width: '18rem',margin: '10px'}}>
      <img className="card-img-top" src="cloth2.jpg" alt="Product 2"/>
      <div className="card-body">
        <h5 className="card-title">Product 2</h5>
        <div className="price">
          <p className="old-price"><strike>&#8377;1200</strike></p>
          <p className="discount"><b>&#8377;1000</b></p>  
        </div>
        <center><button onClick={handleOrderNow} className="btn btn-dark" value="100T0001">Order Now</button></center>
      </div>
    </div>

    <div className="card mb-5" style={{width: '18rem',margin: '10px'}}>
      <img className="card-img-top" src="cloth2.jpg" alt="Product 2"/>
      <div className="card-body">
        <h5 className="card-title">Product 2</h5>
        <div className="price">
          <p className="old-price"><strike>&#8377;1200</strike></p>
          <p className="discount"><b>&#8377;1000</b></p>
        </div>
        <center><button onClick={handleOrderNow} className="btn btn-dark">Order Now</button></center>
      </div>
    </div>

    <div className="card mb-5" style={{width: '18rem',margin: '10px'}}>
      <img className="card-img-top" src="cloth2.jpg" alt="Product 2"/>
      <div className="card-body">
        <h5 className="card-title">Product 2</h5>
        <div className="price">
          <p className="old-price"><strike>&#8377;1200</strike></p>
          <p className="discount"><b>&#8377;1000</b></p>
        </div>
        <center><button onClick={handleOrderNow} className="btn btn-dark">Order Now</button></center>
      </div>
    </div>

    <div className="card mb-5" style={{width: '18rem',margin: '10px'}}>
      <img className="card-img-top" src="cloth2.jpg" alt="Product 2"/>
      <div className="card-body">
        <h5 className="card-title">Product 2</h5>
        <div className="price">
          <p className="old-price"><strike>&#8377;1200</strike></p>
          <p className="discount"><b>&#8377;1000</b></p>
        </div>
        <center><button onClick={handleOrderNow} className="btn btn-dark">Order Now</button></center>
      </div>
    </div>

    <div className="card mb-5" style={{width: '18rem',margin: '10px'}}>
      <img className="card-img-top" src="cloth2.jpg" alt="Product 2"/>
      <div className="card-body">
        <h5 className="card-title">Product 2</h5>
        <div className="price">
          <p className="old-price"><strike>&#8377;1200</strike></p>
          <p className="discount"><b>&#8377;1000</b></p>
        </div>
        <center><button onClick={handleOrderNow} className="btn btn-dark">Order Now</button></center>
      </div> 
    </div>*/}


    {/* <!-- Repeat this pattern for more products --> */}

  </div>
</div>

    </>
  );
};



export default Product;
