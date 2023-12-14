import React, { useState } from 'react';
import HeadNavbar from "../Header.Component";
import "./products.component.css"
const Product = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <HeadNavbar Setactbar='1' />
      {/* <div className={`my-component ${isActive ? 'active' : ''}`}> */}
      <div className='details'>

        <div className='cards'>
          <img className='image' alt="no preview available" src='brand.png'>

          </img>
          <p className="text"> product1</p>
          <p className='text'>1500</p>
        </div>


        <div className='cards'>
          <img className='image' alt="no preview available" src='brand.png'>

          </img>
          <p className="text"> product1</p>
          <p className='text'>1500</p>
        </div>


        <div className='cards'>
          <img className='image' alt="no preview available" src='brand.png'>

          </img>
          <p className="text"> product1</p>
          <p className='text'>1500</p>
        </div>

        <div className='cards'>
          <img className='image' alt="no preview available" src='brand.png'>

          </img>
          <p className="text"> product1</p>
          <p className='text'>1500</p>
        </div>


        <div className='cards'>
          <img className='image' alt="no preview available" src='brand.png'>

          </img>
          <p className="text"> product1</p>
          <p className='text'>1500</p>
        </div>


        <div className='cards'>
          <img className='image' alt="no preview available" src='brand.png'>

          </img>
          <p className="text"> product1</p>
          <p className='text'>1500</p>
        </div>


        <div className='cards'>
          <img className='image' alt="no preview available" src='brand.png'>

          </img>
          <p className="text"> product1</p>
          <p className='text'>1500</p>
        </div>


        <div className='cards'>
          <img className='image' alt="no preview available" src='brand.png'>

          </img>
          <p className="text"> product1</p>
          <p className='text'>1500</p>
        </div>


        <div className='cards'>
          <img className='image' alt="no preview available" src='brand.png'>

          </img>
          <p className="text"> product1</p>
          <p className='text'>1500</p>
        </div>
      </div>
      {/* <button onClick={toggleClass}>Toggle Class</button> */}
      {/* </div> */}
    </>
  );
};

export default Product;
