import React from 'react';
import HeadNavbar from "../Header.Component";
import "./products.component.css";
import { product, products } from "../../Function/Productdata";
const Product = () => {

  // const handleOrderNow = (event) => {
  //   var id=event.target.value;
  //   window.location.href = `product/${id}`;
  // };
  const productList = products();
  return (
    <>
      <HeadNavbar Setactbar='1' />
      <div className="container" style={{ padding: '2rem' }}>
      <div className="d-flex flex-wrap justify-content-between">
      {productList.map(product=> {return(
          <a href={`product/${product.id}`}>
            <div className="card mb-5" style={{ width: '18rem', border: 'none', backgroundColor: 'transparent' }}>
              <div className="image" style={{ overflow: 'hidden' }}>
                <img className="card-img-top" src={product.frontImage} alt="Product 1" />
              </div>
              <div className="card-body" style={{ backgroundColor: '#000', color: '#fff' }}>
                <h5 className="card-title">{product.title}</h5>
                <div className="price">
                  <p className="old-price"><strike>&#8377;{product.price}</strike><div style={{ font: 'Inconsolata', fontSize: 12 }}>({Math.ceil((product.price-product.sellprice)*100/product.price)}% discount)</div></p>
                  <p className="discount"><b>&#8377;{product.sellprice}</b></p>
                </div>
                <center><button className="btn btn-dark" style={{ border: '2px solid white' }} value={product.id}>Buy Now</button></center>
              </div>
            </div>
          </a>
      )})}
      </div>
      </div>

    </>
  );
};



export default Product;
