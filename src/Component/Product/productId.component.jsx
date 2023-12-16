import React from 'react';
import { useParams } from 'react-router-dom';
import HeadNavbar from '../Header.Component';
import './products.component.css'; // Include your custom CSS file for additional styling

const ProductId = () => {
  const { id } = useParams();

  return (
    <>
      <HeadNavbar />
      <hr></hr>
      
      <div id="main">
      <div className="img">
      <div class="card mb-5" style={{width: '30rem',margin: '10px'}}>
            <img class="card-img-top" src="/cloth2.jpg" alt="Product 2"/>
        </div>
    </div>
        <div className="pro_details">
          <h1 className="product-title">Unstoppable T-Shirt</h1>

          <p className="product-description">
            {/* Add your product description here */}
            Unstoppable T-Shirt description goes here.
          </p>

          <div className="price-section">
            <p className="regular-price">Regular price Rs. 1,099.00</p>
            <p className="sale-price">Sale price Rs. 399.00</p>
            <p className="availability">Sold out</p>
          </div>

          <div className="size-section">
            <label htmlFor="size">Size:</label>
            <select id="size" className="size-dropdown">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>

          <div className="quantity-section">
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" className="quantity-input" min="1" />
          </div>

          <button
            className="add-to-cart-btn"
            onClick={() => console.log('Add to Cart clicked')}
          >
            Add to Cart
          </button>
        </div>

      </div>
    
    </>
  );
};

export default ProductId;
