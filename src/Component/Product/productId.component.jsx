import React, { useState,useEffect,useRef } from 'react';
import { useParams } from 'react-router-dom';
import HeadNavbar from '../Header.Component';
import './products.component.css'; // Include your custom CSS file for additional styling
import minus from "../../asset/minus.svg";



const ProductId = () => {
  const imagearray = ["https://lh3.googleusercontent.com/u/1/drive-viewer/AEYmBYQL7ov3B7rwZ9f1J44pChoLdYufy3F8ToWs1P-OqwCXsk-vNbwGXMjuqbrt0uscLYObF0pjBGEeNhGlFSYDMrgaaG9xng=w1960-h3344",
 "https://lh3.googleusercontent.com/u/1/drive-viewer/AEYmBYRMBSnRN99KjMJaaYeVS3QffAHR6CD0plrNK2jn-_vDAZcSM7PjobC32a2tvykRoY6u7nXvXHSIwdEJszhsYevTyYFCfg=w1960-h3344",
   "https://lh3.googleusercontent.com/fife/AGXqzDmI4UP408YH-nhb_R_mcAIC5Uw1ZN1ozTbqYJhv1_pxbq41IrFOWdpNAoHkySYExgWTAk14XXjcJ07BHtv5KtsLjHsIL2BdmOCOFln3sH31UbgAznnuzzjvEfvo7LA065PXuCaTxWAjAIgC49315lAfKCVf9yQmfhkweIrgvDqQu7_jbIz8rcBE1ocG6y_Y2OGEDyS5wY4zzTAn4WqP-A6temlbkWvOJf8FqyMurr9LapD4KfZZpq5dwjSb_cpYQo0v4tTRPyBz2xQn1A7YJpKjWeV_gvgROdqEwUqAMarY6QyJaJwteXWXLobE_Fkl-_qPckjWTud1gBmFAEK7D7wX-jbBTB3SShUwA6jtRGFw4oy8bczB7aCSebYTzMhMiR0nECbiv9Qurz54HfS2YuHOw0srNxN_AuKka5FH05Ghjiw5VvMVDE0x53bsPVyNzPpEXVtSQ0nNUGQfNMS4qhS8ZaysjVBKBTWXZar5TBpfoRkainggDs9bD7kQSL8deT3PdqLixOKlWfxH7HJ9mP4gNL1KlomXSQK3xVmdvizB8iyuXtIM_XEv6qf7fSssPJt77xVuD13aafzVMkilPfETPpq15G_Nm5s-uPK0GNqWnuYBTgGji1uo0Pih5O-D7sUF2H7i1sYnByzPrLtIpVaSfS48zEaepioYZ1c_8_HEZb_rZshkz9p7w6zu5H5bFYsg46dm2J_B0D5zbUgKrSWMKuPs09BpS-A2YMj-RiqrFwd2vZvIOpp2UYtXoVwzMWbE-TLi6_UncX5YwccuRVKs9e4OT8LijssfBdbODI8QggtcM52rg-OXNR5VyG3d_OQG33-2kys13inmHrUikRSPhpcOm6odrY7duYDEqCAXy8amt4x8LF77Y7zPYbx1QZ99rE_RHPgzw5viwNKHaP77D4soE_BelSiDC2cncmRnhYnobFQ2A2m_EoMdAnuwwIHF8ujmRxfR5Q43VscjYB1x_KSGmqjnGMRzhcaH_kx5evFHaHK8oY23el4IxArwzzP5ltCadx83IgtnZz6jPCcjiT03ssRtmzWK9StmaG4MWvUxY_y3to9bDb1iXO5DPTv4sa0h_zNMWyBpmvFH6LQtfzkKjS3u0SkIwOVj80lZm_THCEc1UFf_86OpVaeUAIEQrbctaWEbGYXv1gYx63NBgkqSpnVZTEliYuepbWDcEd25hHtp4t7KksrWP4nhW2PzkcW06v0aiVhVRvJFCr4bY7vgVJ0yA4hLF8-YQ2SR0RRILZ6xjPC_j00CQDoKHknboGVFPMNqvVGXpkWiBjhettWAxLkvdwijyTSy3NB92nzNx010003D885-4pYFW6tSWjD6wkRUsm8rtt2Z12OaFjFXw4yhMheYjzbD48UJKrGD5o-tZYi_MALNNCuLey8GMm-6h5Ik06xyqdpFPTKPUBQEJqxp_5eRH5wvz9RpObgrRU6pfqObHD6DaXCk_y2sy-PivOBsWIsm4AVHIyfTR5CuquZcA_UIT2YcWr4FkgOQ2z812OOcG4XlfZxDSHeSVGq3RDYKZ3eM7HylniAKuWqM=w2000-h1420",
   "https://lh3.googleusercontent.com/fife/AGXqzDmM8rPn3UP3-DnrVFwDSEER1fMPUDOFpqNfr0brkAECa0LhhbxtUMUDmQgifJssdoNRRyNumhXQCzC4GWrBNc4s3ej4XRQy6W0GC4X3Op94oSwUfLT47YZlJrbfT_yV5FMeV5ZPgUchblnefpWeuhXxVNmJ7tB6CMXRBGA0ie0jFwNk4WYPgqf6qSCfRwlYikq3jPOpJzf40n1wKv4TvOt3_zNAa9FEhumqkLy3dqmIQLZ-xQq09I_c0vRosYff4BYRhdq54YVcAAgTpCeXpCEq4rjaOo2zG1aBiI8kftQLSttOGVKtKMOlMr0_BAQW5-hVFj4Wbs0cS1gh69rxlhyFum6jfTeOQ8tPx9Ulk5DaMvwuLvL6VKLYtcP0JX6rR3NMbBnIE7-teLKJinD0_culiPlM9bKpuw6hzOy2Jl5edcr-h1iS08n6eH6L4v-vTKEb0X36afINOsARkTswqdxCkm3LIJ8m3L9e7FzYiXwrWCReY5e5qXK-loByyd8MlJv6_X4Ep3GmdAfHiAa6u5jVMSS1hFGoayuM13jKnIfpqv0YtoYDLnh-P3o7gD1DPtIcqMqZI2weyOQBpE3FrWs2B8G_LaB3c2i-NDHcfaycRoqw4s81JrGLMubqhyspEQhNj9Zk_CA6oRvNkgMFbT6cjuBQCUKxtTFFyMcffvwzDGTmCoI0TOJsDUPPUS98s6ej0Rs4SVFh-jk72JK0KiErJTo5JR2zGAp4mZBceo9yR4KGcen1t_V_wZ6z3hJSLFZCfdX_rVphWKxyjboEY8IO-KVp1ZQWslq2Nh8J5JCg_9S0NPxbdHMSiUWTaOxSwv5pCLEwIvk4SeUiYtwsRAFMqXC5IUtzzupCV0j-xoCfCcJRB0bB7fyfpuaijx9F95V-y3EafwfEaXjGjzKEC_rAXf3-Pi3yKNVw09gvJEnOPrObbZJmFN3dCNmuFZgYhn08KPkabhAq8blBNWFOJzXeS6SozbF7FtgNiA09qyayJaiQioRhHvxBZYkx_8nUws3gnvAmdukt0EGYDZDfrFeLUKfKVHJX7i0aOCPakQdir8G8b1rJ0nYJ4CO64cssy6M2kSe1SWSG2cXjXDSO3IgvL7IJUlzTZYomGToRs5paxniIKhVZzKKW1lYE5IBWttKeGkK9_GizR_o1pm1jD1hPMaDY2MyRxkCZC8VAPh7MdACwSSK4tvl71tR54sIMOKbXrj0g8cfTmXAQnHNoir3aSM9WizAgoCZgM81Mtm8-Vw_enbBtkzQIdhTq0kyNGE3I6tJEH_L7GTFFzk6cFEY5DQsc7-tk16K6tsLjdgRTcnNxw_HXHdIPrPEetMEamtquMJS_J2IPcfxqoN1i_j1ZD3LVLdopxsHeyLivk_GXlcE8sQXMBe-kXyLoe8FUC7CMjBhsOUr2b567rpGSbzSMUDR4YGnBHMrulnE69hxhMzY4WPqjjXQDHytwXm2ppm3cYEd5_GBJtMuqM5H7PdXEd3pF6wy0CZKC_zEihvsvNw4N00ctR2MSGXDyIiobGDW0_BBkqv64HAYdU4Tk_JWilSEN=w2000-h1420"
, 
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
    if (quantity < 50)
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
    if(quantity>50){
      setQuantity(50);
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
            {/*<img value="3" src={imagearray[1]} onClick={() => setImage(1)} />
            <img value="4" src={imagearray[4]} onClick={() => setImage(4)} />*/}
          </div>
        </div>

        <div className="pro_details">
          <h1 className="product-title">Turtleneck with full sleeve</h1>

          <p className="product-description">
            {/* Add your product description here */}
            A turtleneck design is a timeless style that stretches high up the neck and ends just below your chin.
          </p>

          <div className="price-section">
            <p className="regular-price">Original price Rs. 999.00</p>
            <p className="sale-price">Special Offer(48% off) price Rs. 479.00</p>
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
            <input ref={quantityref} type="number" id="quantity" className="quantity-input" value={quantity} min="1" max="50" onChange={(e) => setQuantity(e.target.value)} style={{ border: 1, borderRadius: 5, backgroundColor: 'transparent', width: 40, margin: 0 }} />
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
