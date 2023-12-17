import React from 'react';
import HeadNavbar from "../Header.Component";

const Home =() =>{
    return (
        <>
    <HeadNavbar Setactbar='0'/>
    <div style={{margin:"20px 0px",padding:5,backgroundColor:'black',color:'white',justifyContent:'center',width:'100%'}}>
   <marquee ><p style={{justifyContent:'inherit',marginBottom:0,marginTop:15}}>Sales on live with 70% off on the first product!! grap it now.</p></marquee>
   </div>
    </>
    );
}

export default Home;