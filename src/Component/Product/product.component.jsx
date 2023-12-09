import React, { useState } from 'react';
import HeadNavbar from "../Header.Component";

const Product = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <>
    <HeadNavbar/>
    <div className={`my-component ${isActive ? 'active' : ''}`}>
      <p>This is my component.</p>
      <button onClick={toggleClass}>Toggle Class</button>
    </div>
    </>
  );
};

export default Product;
