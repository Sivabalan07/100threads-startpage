import React from 'react';
import instalogo from "../../asset/instagram.svg"
import fblogo from "../../asset/icons8-facebook.svg"
import threadlogo from "../../asset/threads.svg"
import HeadNavbar from "../Header.Component";
import "./about.component.css";

const About = () => {
    return (
        <>
        <HeadNavbar/>
        <div className='heading'> About us</div>
        <div className="aboutstyle">
            <p>Welcome to 100Threads, where style meets comfort, and every thread tells a story! We are more than just a T-shirt brand; we're a canvas for self-expression, a celebration of individuality, and a testament to the power of comfortable fashion.
                <br /><br />
                At 100Threads, we believe that what you wear reflects who you are. Our journey began with a simple idea: to create T-shirts that not only look good but also feel amazing. We are a team of fashion enthusiasts, designers, and dreamers dedicated to bringing you a collection that blends quality craftsmanship with the latest trends.
                <br /><br /></p>
            <h5>Our Mission</h5><p>
                <br /><br />
                Our mission is clear – to redefine casual wear by providing you with T-shirts that effortlessly combine style, comfort, and personality. We strive to inspire confidence and encourage authenticity in every individual. Whether you're heading to a casual brunch, hitting the gym, or expressing your unique style, our T-shirts are designed to complement your lifestyle.
                <br /><br /></p>
            <h5>Why Choose 100Threads?</h5><p>
                <br /><br />
                - <b>Quality Matters:</b> We prioritize quality in every stitch and fabric choice, ensuring that our T-shirts stand the test of time.
                <br />- <b>Unique Designs:</b> Our in-house design team works tirelessly to create exclusive prints and graphics that make a statement.
                <br />- <b>Comfort First:</b> No compromise on comfort. We source materials that feel as good as they look, so you can wear our T-shirts all day, every day.
                <br /><br />
            </p>
            <h5>Join the 100Threads Community</h5><p>
                <br /><br />
                Beyond just a brand, 100Threads is a community of like-minded individuals who appreciate the fusion of style and comfort.
                <br />
                Follow us on social media, <a className='curser-pointer' href="https://www.instagram.com/100threadsdotcom"><img src={instalogo} /></a>  <a className='cursor-pointer' href="https://www.facebook.com/profile.php?id=61553383326943"><img src={fblogo} height={16} width={16} /></a>  <a className='cursor-pointer' href="https://www.threads.net/@100threadsdotcom"><img src={threadlogo} height={16} width={16} /></a>.
                <br /><br />
                Thank you for being a part of the 100Threads journey. We're excited to dress you in T-shirts that tell your story, one thread at a time.
            </p>
        </div>
        </>
    );
}

export default About;