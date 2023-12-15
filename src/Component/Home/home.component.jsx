import React from 'react';
import HeadNavbar from "../Header.Component";

const Home =() =>{
    return (
        <>
    <HeadNavbar Setactbar='0'/>
    <hr></hr>

   <marquee> <img class name="home_image" src="brand.png" alt="no preview available"></img></marquee>
    </>
    );
}

export default Home;