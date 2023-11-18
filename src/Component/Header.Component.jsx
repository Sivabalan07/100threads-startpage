import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Headerfooter.component.css";
// import logo from '../../public/brand.png'
// import logo from "../asset/brand-removebg.png";
import instalogo from "../asset/instagram.svg"
import fblogo from "../asset/icons8-facebook.svg"
import threadlogo from "../asset/threads.svg"



const Head_navbar = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container" style={{height:70, fontFamily: "Snell Roundhand, cursive"}}>
        <a className="navbar-brand" href="#">
          {/* <img url="/brand.png" alt='100Threads' width={20} height={10}/> */}
          {/* <img url={logo} alt='100Threads' width={100} height={"auto"} role='image'/> */}
          <div className='logobg-img'></div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{border:"none"}}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-start" id="navbarNav" style={{maxWidth : 240}}>
          <div className="offcanvas-header" style={{maxWidth : 240}}>
          <h5 className="offcanvas-title"></h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{alignItems:"end"}}></button>
          </div>
          <div className="offcanvas-body" style={{maxWidth : 240}}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" data-bs-toggle="modal" herf="#AboutstaticBack" data-bs-target="#AboutstaticBack" style={{cursor:"pointer"}}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="modal" herf="#ContactstaticBack" data-bs-target="#ContactstaticBack" style={{cursor:"pointer"}}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    {/*Contact popup*/}
    <div className="modal fade" id="ContactstaticBack" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="ContactstaticBackdrop" aria-hidden="true" >
      <div className="modal-dialog" >
        <div className="modal-content modalst" >
          <div className="modal-header">
            <h5 className="modal-title" id="ContactstaticBackdrop" style={{fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace"}}>Contact Information</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
          </div>
          <div className="modal-body radialgradient" style={{textAlign:"Left",padding:40,  fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace"}}>
          Trade name: 100 Threads Clothing 
<br/><br/>
Email: <a href='mailto:support@100threads.com' style={{color:"black", textDecoration:"none"}}>support@100threads.com</a>
<br/><br/>
Physical address:  manathottam Near AVP school, Thirumurgan poondi ring road, Tirupur-641652 TN, India.
<br/><br/>

{/* GST NUMBER : */}
          </div>
          {/* <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Understood</button>
          </div> */}
        </div>
      </div>
    </div>

      {/*About popup*/}
    <div className="modal fade" id="AboutstaticBack" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="AboutstaticBackdrop" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content modalst">
          <div className="modal-header">
            <h5 className="modal-title" id="AboutstaticBackdrop" style={{fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace"}}>About us</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body radialgradient" style={{textAlign:"Left",padding:40, overflow : "auto" , fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace"}}>
          <p>Welcome to 100Threads, where style meets comfort, and every thread tells a story! We are more than just a T-shirt brand; we're a canvas for self-expression, a celebration of individuality, and a testament to the power of comfortable fashion.
          <br/><br/>
At 100Threads, we believe that what you wear reflects who you are. Our journey began with a simple idea: to create T-shirts that not only look good but also feel amazing. We are a team of fashion enthusiasts, designers, and dreamers dedicated to bringing you a collection that blends quality craftsmanship with the latest trends.
<br/><br/></p>
<h5>Our Mission</h5><p>
<br/><br/>
Our mission is clear – to redefine casual wear by providing you with T-shirts that effortlessly combine style, comfort, and personality. We strive to inspire confidence and encourage authenticity in every individual. Whether you're heading to a casual brunch, hitting the gym, or expressing your unique style, our T-shirts are designed to complement your lifestyle.
<br/><br/></p>
<h5>Why Choose 100Threads?</h5><p>
<br/><br/>
- <b>Quality Matters:</b> We prioritize quality in every stitch and fabric choice, ensuring that our T-shirts stand the test of time.
<br/>- <b>Unique Designs:</b> Our in-house design team works tirelessly to create exclusive prints and graphics that make a statement.
<br/>- <b>Comfort First:</b> No compromise on comfort. We source materials that feel as good as they look, so you can wear our T-shirts all day, every day.
<br/><br/>
</p>
<h5>Join the 100Threads Community</h5><p>
<br/><br/>
Beyond just a brand, 100Threads is a community of like-minded individuals who appreciate the fusion of style and comfort.
<br/>
Follow us on social media, <a style={{textDecoration: "none", color:"black"}} href="https://www.instagram.com/100threadsdotcom"><img src={instalogo}/></a>  <a style={{textDecoration: "none", color:"black"}} href="https://www.facebook.com/profile.php?id=61553383326943"><img src={fblogo} height={16} width={16}/></a>  <a style={{textDecoration: "none", color:"black"}} href="https://www.threads.net/@100threadsdotcom"><img src={threadlogo} height={16} width={16}/></a>.
<br/><br/>
Thank you for being a part of the 100Threads journey. We're excited to dress you in T-shirts that tell your story, one thread at a time.
</p></div>
{/* <div className="container-fluid bg-dark"><img src={instalogo}/></div> */}
          {/* <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Understood</button>
          </div> */}
        </div>
      </div>
    </div>

    </header>
    
  );
}

export default Head_navbar;
