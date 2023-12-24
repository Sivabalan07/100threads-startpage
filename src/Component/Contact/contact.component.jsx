import React from 'react';
import HeadNavbar from "../Header.Component";
import "./contact.component.css"


const Contact = () => {

    return (
        <>
            <HeadNavbar Setactbar='3' />
            <div className="contactstyle">
                <p>
                    Trade name: 100 Threads Apparel
                    <br /><br />
                    Email: <a href='mailto:support@100threads.com' style={{ color: "black", textDecoration: "none" }}>support@100threads.com</a>
                    <br /><br />
                    Physical address:
100threads Apparel, 
Tirupur-2, 
Tamilnadu,India.
                    <br /><br />
                </p>
            </div>
            
        </>
    );
}

export default Contact;