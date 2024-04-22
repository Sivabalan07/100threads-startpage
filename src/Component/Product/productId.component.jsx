import React, { useState,useEffect,useRef } from 'react';
import { useParams } from 'react-router-dom';
import HeadNavbar from '../Header.Component';
import './products.component.css'; // Include your custom CSS file for additional styling
import minus from "../../asset/minus.svg";
import {product,stock} from "../../Function/Productdata";
import Error from '../Error/error.component';


const ProductId = () => {

  //#region  variables 
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(0);
  const stocks=stock(id);
  const quantityref=useRef();
  const productvalue=product(id);
  const [Size, SetSize] = useState(Object.keys(stocks).filter(x=>stocks[x]>0)[0]);
  // console.log(productvalue); 
  //#endregion
 
  //#region functions
  const Sizechange = (event) => {
    // count++;
    SetSize(event.target.value);
  }
  const addquantity = () => {
    // console.log("add",stocks[Size])
    if (quantity < stocks[Size])
      setQuantity(quantity + 1)
  }
  const subtractquantity = () => {
    // console.log("subtract",stocks[Size])
    if (quantity > 1)
      setQuantity(quantity - 1)
  }
  const sharelink=()=>{
    navigator.share( {url: window.location.href});
  }
  //#endregion

  //#region  effect function
  useEffect(()=>{
    //console.log(productvalue);

    if(productvalue!=undefined)
    {var sizequantity=stocks[Size];
      
    if(quantity>sizequantity){
      setQuantity(sizequantity);
    }
    if(sizequantity>0 && quantity<1){
    setQuantity(1);
  }
    if(sizequantity<1){
      setQuantity(0);
    }
  }
  },[quantity,Size])
  //#endregion
  
  
  return (
    
    <>
          <HeadNavbar />
    {productvalue!=undefined?
    <>
      <div id="main">
        <div className="img">
          <div className="card mb-5" style={{ border: 0, justifySelf: 'center' }}>
            <img className="card-img-top" src={productvalue.image[image]} />
          </div>
          <div className="previewImage">
            {/* <img value="0" src={imagearray[0]} onClick={() => setImage(0)} />
            <img value="1" src={imagearray[3]} onClick={() => setImage(3)} />
            <img value="2" src={imagearray[2]} onClick={() => setImage(2)} /> */}
            {
              productvalue.image.map((x,i)=>{ return(<img src={x} onClick={() => setImage(i)} />) })
            }
            {/*<img value="3" src={imagearray[1]} onClick={() => setImage(1)} />
            <img value="4" src={imagearray[4]} onClick={() => setImage(4)} />*/}
          </div>
        </div>

        <div className="pro_details">
          <h1 className="product-title">{productvalue.title}</h1>

          <p className="product-description">
            {/* Add your product description here */}
            {/* A turtleneck design is a timeless style that stretches high up the neck and ends just below your chin. */}
            {productvalue.description}
          </p>

          <div className="price-section">
            <p className="regular-price">Original price Rs. {productvalue.price}</p>
            <p className="sale-price">Special Offer({Math.ceil((productvalue.sellprice*100)/productvalue.price)}% off) price Rs. {productvalue.sellprice}</p>
            <p className="availability"></p>
          </div>

          <div className="size-section">
            <label htmlFor="size">Size:</label>
            {/* <select id="size" className="size-dropdown" defaultValue={productvalue.size[0]} onChange={Sizechange} style={{ border: 1, borderRadius: 5, backgroundColor: 'transparent' }}>
            {productvalue.size.map(i=>{return(<option value={i}>{i}</option>)})}
            </select> */}
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
            { productvalue.size.map(i=>{return(<button disabled={stocks[i]<1} type="button" className={`btn btn-outline-dark ${Size==i?"selected":""}`} onClick= { Sizechange} value={i}>{i}</button>)})}
            </div>
          </div>

          <div className="quantity-section">
            <label htmlFor="quantity">Quantity:</label>
            <img src={minus} style={{ width: 40, height: 40, padding: 10 }} onClick={subtractquantity} />
            <input ref={quantityref} type="number" id="quantity" className="quantity-input" value={quantity} min="1" max="50" onChange={Sizechange} style={{ border: 1, borderRadius: 5, backgroundColor: 'transparent', width: 40, margin: 0 }} />
            <img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-64.png" style={{ width: 40, height: 40, padding: 10, paddingLeft: 0, paddingRight: 20 }} onClick={()=>addquantity()} />
          </div>

          <button
            className="add-to-cart-btn btn btn-dark"
            onClick={() => { window.location.href = `/order/${id}?size=${Size}&quantity=${quantity}&name=${productvalue.title}&price=${productvalue.sellprice}` }}
          >
            Buy it now
          </button><a onClick={sharelink} title='share'><img src="https://cdn-icons-png.flaticon.com/512/1828/1828954.png" style={{width:40,height:40, padding:4 ,marginLeft:20}}/></a>
        </div>
        
        {
          productvalue.Addditiondes.map(x=>{return(
            <div className="pro_details">
          <h1 className="product-title">{x.heading}</h1>

          <p className="product-description">
            {/* Add your product description here */}
           {x.detail.split("\n").map(x=><>{x}<br/></>)}
          </p>
        </div>)
          })
        }

      </div>
      </>:
          <Error/>}

    </>
  );
};


export default ProductId;
