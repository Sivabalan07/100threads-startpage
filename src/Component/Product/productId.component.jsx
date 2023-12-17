import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import HeadNavbar from '../Header.Component';
import './products.component.css'; // Include your custom CSS file for additional styling
 

const ProductId = () => {
  const imagearray=["https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYTUP2YmHYzll02_40lU1WPRsvxJC7h1eC2ftKi2heNmloKcLtGanzRNrQ7dHM6_Je7RmqUYEF8WyDRrpBnUmmlkq9VX=w1366-h633","ps://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYTu_NYwzAeAZqSDAEBvnWcC3NFdNhwb1rKoWBsHrj-xMqvSkwgciI65ZPfd9rIwny4FW5-MIPMUUx-K1U1N0fv8eMr3=w2048-h1456","https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYT_GCbj-IkswnYXLsN8gHTGSjzkqcY_Q32qWBetKRvVBldXrTSrCAgqW5bpQ8ui9iHhhaoO6cWyTTeTF3ALhTaG_1Aspw=w2048-h1456","https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYQE3Scf6XIMGhZ5d362O7ntcs96SI_j9wPtlZo5_RuBdk0X_S_vsKvTWBVvsPyxj02jrk781NyViuiCNUpVsSCpuAPG=w2048-h1456","https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYST1w955IGZkexvLqa9WO0CkKEmjLYSw8CVsgHrEM1UBFeV4gTSYkzVgneBAy4R9r_Z9kjWHk8WwucaAsiMSidxGd2Pfw=w2048-h1456"]

  const { id } = useParams();
  const [Size,SetSize]=useState("XS");
  const [quantity,setQuantity]= useState(1);
  const [image,setImage] = useState(0);
  const Sizechange=(event)=>{
    SetSize(event.target.value);
  }
  const addquantity=()=>{
    if(quantity<15)
      setQuantity(quantity+1)
  }
  const subtractquantity=()=>{
    if(quantity>1)
      setQuantity(quantity-1)
  }
  return (
    <>
      <HeadNavbar />

      
      <div id="main">
      <div className="img">
      <div className="card mb-5" style={{width: '30rem',margin: '10px'}}>
            <img className="card-img-top" src={imagearray[image]}/>
        </div>
    </div>
    {/* <div className="previewImage">
      <img className="card-img-preview" value
    </div> */}
        <div className="pro_details">
          <h1 className="product-title">Turtleneck with full sleeve</h1>

          <p className="product-description">
            {/* Add your product description here */}
           A turtleneck design is a timeless style that stretches high up the neck and ends just below your chin.
          </p>

          <div className="price-section">
            <p className="regular-price">Regular price Rs. 1,679.00</p>
            <p className="sale-price">Sale price Rs. 479.00</p>
            <p className="availability"></p>
          </div>

          <div className="size-section">
            <label htmlFor="size">Size:</label>
            <select id="size" className="size-dropdown" onChange={Sizechange} style={{border:1, borderRadius:5,backgroundColor:'transparent'}}>
              <option value="XS" selected>Extra Small</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extar Large</option>
            </select>
          </div>

          <div className="quantity-section">
            <label htmlFor="quantity">Quantity:</label>
            <img  style={{width:40,height:40}} onClick={subtractquantity}/>
            <input type="number" id="quantity" className="quantity-input" Value={quantity} min="1" max="15" onChange={(e)=> setQuantity(e.target.value)} style={{border:1, borderRadius:5,backgroundColor:'transparent',width:40,margin:0}}/>
            <img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-64.png" style={{width:40,height:40,padding:10}} onClick={addquantity}/>
          </div>

          <button
            className="add-to-cart-btn btn btn-dark"
            onClick={() => {window.location.href=`/order/${id}?size=${Size}&quantity=${quantity}&name=Knit top full sleeve&price=479`}}
          >
            Buy it now
          </button>
        </div>

      </div>
    
    </>
  );
};


export default ProductId;
