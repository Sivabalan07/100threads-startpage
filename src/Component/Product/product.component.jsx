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
      <img className="card-img-top" src=   "https://lh3.googleusercontent.com/fife/AGXqzDmM8rPn3UP3-DnrVFwDSEER1fMPUDOFpqNfr0brkAECa0LhhbxtUMUDmQgifJssdoNRRyNumhXQCzC4GWrBNc4s3ej4XRQy6W0GC4X3Op94oSwUfLT47YZlJrbfT_yV5FMeV5ZPgUchblnefpWeuhXxVNmJ7tB6CMXRBGA0ie0jFwNk4WYPgqf6qSCfRwlYikq3jPOpJzf40n1wKv4TvOt3_zNAa9FEhumqkLy3dqmIQLZ-xQq09I_c0vRosYff4BYRhdq54YVcAAgTpCeXpCEq4rjaOo2zG1aBiI8kftQLSttOGVKtKMOlMr0_BAQW5-hVFj4Wbs0cS1gh69rxlhyFum6jfTeOQ8tPx9Ulk5DaMvwuLvL6VKLYtcP0JX6rR3NMbBnIE7-teLKJinD0_culiPlM9bKpuw6hzOy2Jl5edcr-h1iS08n6eH6L4v-vTKEb0X36afINOsARkTswqdxCkm3LIJ8m3L9e7FzYiXwrWCReY5e5qXK-loByyd8MlJv6_X4Ep3GmdAfHiAa6u5jVMSS1hFGoayuM13jKnIfpqv0YtoYDLnh-P3o7gD1DPtIcqMqZI2weyOQBpE3FrWs2B8G_LaB3c2i-NDHcfaycRoqw4s81JrGLMubqhyspEQhNj9Zk_CA6oRvNkgMFbT6cjuBQCUKxtTFFyMcffvwzDGTmCoI0TOJsDUPPUS98s6ej0Rs4SVFh-jk72JK0KiErJTo5JR2zGAp4mZBceo9yR4KGcen1t_V_wZ6z3hJSLFZCfdX_rVphWKxyjboEY8IO-KVp1ZQWslq2Nh8J5JCg_9S0NPxbdHMSiUWTaOxSwv5pCLEwIvk4SeUiYtwsRAFMqXC5IUtzzupCV0j-xoCfCcJRB0bB7fyfpuaijx9F95V-y3EafwfEaXjGjzKEC_rAXf3-Pi3yKNVw09gvJEnOPrObbZJmFN3dCNmuFZgYhn08KPkabhAq8blBNWFOJzXeS6SozbF7FtgNiA09qyayJaiQioRhHvxBZYkx_8nUws3gnvAmdukt0EGYDZDfrFeLUKfKVHJX7i0aOCPakQdir8G8b1rJ0nYJ4CO64cssy6M2kSe1SWSG2cXjXDSO3IgvL7IJUlzTZYomGToRs5paxniIKhVZzKKW1lYE5IBWttKeGkK9_GizR_o1pm1jD1hPMaDY2MyRxkCZC8VAPh7MdACwSSK4tvl71tR54sIMOKbXrj0g8cfTmXAQnHNoir3aSM9WizAgoCZgM81Mtm8-Vw_enbBtkzQIdhTq0kyNGE3I6tJEH_L7GTFFzk6cFEY5DQsc7-tk16K6tsLjdgRTcnNxw_HXHdIPrPEetMEamtquMJS_J2IPcfxqoN1i_j1ZD3LVLdopxsHeyLivk_GXlcE8sQXMBe-kXyLoe8FUC7CMjBhsOUr2b567rpGSbzSMUDR4YGnBHMrulnE69hxhMzY4WPqjjXQDHytwXm2ppm3cYEd5_GBJtMuqM5H7PdXEd3pF6wy0CZKC_zEihvsvNw4N00ctR2MSGXDyIiobGDW0_BBkqv64HAYdU4Tk_JWilSEN=w2000-h1420" alt="Product 1"/>
      </div>
      <div className="card-body" style={{backgroundColor:'#000',color:'#fff'}}>
        <h5 className="card-title">Turtleneck with full sleeve</h5>
        <div className="price">
          <p className="old-price"><strike>&#8377;999</strike><div style={{font:'Inconsolata',fontSize:12}}>(48% discount)</div></p>
          <p className="discount"><b>&#8377;479</b></p>
        </div>
        <center><button className="btn btn-dark" style={{border: '2px solid white'}} value="100T0001">Buy Now</button></center>
      </div>
    </div>
    </a>
  </div>
</div>

    </>
  );
};



export default Product;
