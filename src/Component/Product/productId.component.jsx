import React, { useState,useEffect,useRef } from 'react';
import { useParams } from 'react-router-dom';
import HeadNavbar from '../Header.Component';
import './products.component.css'; // Include your custom CSS file for additional styling
import minus from "../../asset/minus.svg";



const ProductId = () => {
  const imagearray = ["https://lh3.googleusercontent.com/u/1/drive-viewer/AEYmBYQL7ov3B7rwZ9f1J44pChoLdYufy3F8ToWs1P-OqwCXsk-vNbwGXMjuqbrt0uscLYObF0pjBGEeNhGlFSYDMrgaaG9xng=w1960-h3344",
   "https://lh3.googleusercontent.com/u/1/drive-viewer/AEYmBYRMBSnRN99KjMJaaYeVS3QffAHR6CD0plrNK2jn-_vDAZcSM7PjobC32a2tvykRoY6u7nXvXHSIwdEJszhsYevTyYFCfg=w1960-h3344",
   "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYT_GCbj-IkswnYXLsN8gHTGSjzkqcY_Q32qWBetKRvVBldXrTSrCAgqW5bpQ8ui9iHhhaoO6cWyTTeTF3ALhTaG_1Aspw=w2048-h1456",
   "https://lh3.googleusercontent.com/u/1/drive-viewer/AEYmBYQ-izfb4pXFo69U5z-OAlc0LkaKfrmhzeTx5jaAl5EuZ23W2Ga60kGegGI8ps5N1FmEMZ2Roz8fDOuMWPE-g3MR5N1z8w=w1960-h3344", 
   "https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYST1w955IGZkexvLqa9WO0CkKEmjLYSw8CVsgHrEM1UBFeV4gTSYkzVgneBAy4R9r_Z9kjWHk8WwucaAsiMSidxGd2Pfw=w2048-h1456"]


  const { id } = useParams();
  const [Size, SetSize] = useState("XS");
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(0);
  const quantityref=useRef();
  const Sizechange = (event) => {
    SetSize(event.target.value);
  }
  const addquantity = () => {
    if (quantity < 15)
      setQuantity(quantity + 1)
  }
  const subtractquantity = () => {
    if (quantity > 1)
      setQuantity(quantity - 1)
  }
  const sharelink=()=>{
    navigator.share( {url: window.location.href});
  }

  useEffect(()=>{
    if(quantity>15){
      setQuantity(15);
      quantityref.Value=quantity;
    }
    if(quantity<1)
    setQuantity(1);
  },[quantity])
  useEffect(()=>{
    if(id!=="100T0001")
    window.location.href="/products"
  },[])
  return (
    <>
      <HeadNavbar />

      <div id="main">
        <div className="img">
          <div className="card mb-5" style={{ border: 0, justifySelf: 'center' }}>
            <img className="card-img-top" src={imagearray[image]} />
          </div>
          <div className="previewImage">
            <img value="0" src={imagearray[0]} onClick={() => setImage(0)} />
            <img value="1" src={imagearray[3]} onClick={() => setImage(3)} />
            <img value="2" src={imagearray[2]} onClick={() => setImage(2)} />
            <img value="3" src={imagearray[1]} onClick={() => setImage(1)} />
            <img value="4" src={imagearray[4]} onClick={() => setImage(4)} />
          </div>
        </div>

        <div className="pro_details">
          <h1 className="product-title">Turtleneck with full sleeve</h1>

          <p className="product-description">
            {/* Add your product description here */}
            A turtleneck design is a timeless style that stretches high up the neck and ends just below your chin.
          </p>

          <div className="price-section">
            <p className="regular-price">Original price Rs. 1,679.00</p>
            <p className="sale-price">Offer price Rs. 479.00</p>
            <p className="availability"></p>
          </div>

          <div className="size-section">
            <label htmlFor="size">Size:</label>
            <select id="size" className="size-dropdown" onChange={Sizechange} style={{ border: 1, borderRadius: 5, backgroundColor: 'transparent' }}>
              <option value="XS" selected>Extra Small</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extar Large</option>
            </select>
          </div>

          <div className="quantity-section">
            <label htmlFor="quantity">Quantity:</label>
            <img src={minus} style={{ width: 40, height: 40, padding: 10 }} onClick={subtractquantity} />
            <input ref={quantityref} type="number" id="quantity" className="quantity-input" Value={quantity} min="1" max="15" onChange={(e) => setQuantity(e.target.value)} style={{ border: 1, borderRadius: 5, backgroundColor: 'transparent', width: 40, margin: 0 }} />
            <img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-64.png" style={{ width: 40, height: 40, padding: 10, paddingLeft: 0, paddingRight: 20 }} onClick={addquantity} />
          </div>

          <button
            className="add-to-cart-btn btn btn-dark"
            onClick={() => { window.location.href = `/order/${id}?size=${Size}&quantity=${quantity}&name=Turtleneck with full sleeve&price=479` }}
          >
            Buy it now
          </button><a onClick={sharelink} title='share'><img src="https://cdn-icons-png.flaticon.com/512/1828/1828954.png" style={{width:40,height:40, padding:4 ,marginLeft:20}}/></a>
        </div>
        <div className="pro_details">
          <h1 className="product-title">Product details</h1>

          <p className="product-description">
            {/* Add your product description here */}
            Material composition-cotton elastane blend<br />
            Pattern-solid<br />
            Fit-slim fit<br />
            Sleeve type-long sleeve<br />
            Neck style-Highneck<br />
          </p>
        </div>
        <div className="pro_details">
          <h1 className="product-title">About this item</h1>

          <p className="product-description">
            {/* Add your product description here */}
            Fit type-Regular fit<br />
            Wash care-machine & Hand wash<br />
            Pattern name-solid, sleeve tyle-full sleeve<br />
            Look trendy and feel comfortable with highneck<br />
          </p>
        </div>
        <div className="pro_details">
          <h1 className="product-title">Additional information</h1>

          <p className="product-description">
            {/* Add your product description here */}
            County of origin-India<br/>
            Manufacturer-100threads<br/>
            Item weight-250 gms<br/>
            Item dimension LxW-12x10 inch<br/>
            Net qty-1.00 count<br/>
            Generic name -T-shirt<br />
          </p>
        </div>

      </div>

    </>
  );
};


export default ProductId;
