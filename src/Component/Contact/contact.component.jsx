import React from 'react';
import HeadNavbar from "../Header.Component";

const Contact = () => {

    return (
        <>
        <HeadNavbar />
        <div style={{ textAlign: "Left", padding: 40, fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace", justifyContent:'center'}}>
            <p>
                Trade name: 100 Threads Apparel
                <br /><br />
                Email: <a href='mailto:support@100threads.com' style={{ color: "black", textDecoration: "none" }}>support@100threads.com</a>
                <br /><br />
                Physical address:  manathottam Near AVP school, Thirumurgan poondi ring road, Tirupur-641652 TN, India.
                <br /><br />

                GST NUMBER :
            </p>
        </div>
        </>
    );
}

export default Contact;