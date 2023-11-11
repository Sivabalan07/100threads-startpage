import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Headerfooter.component.css";
import logo from '../brand.png'


const Head_navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top"style={{background : 'linear-gradient( #f1e7d9,#fff,#fff,#fff,#fff)'}}>
      <div className="container">
        <a className="navbar-brand" href="#"><img url={logo} alt='100Threads' width={20} height={10}/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-start" id="navbarNav" style={{maxWidth : 240}}>
          <div class="offcanvas-header" style={{maxWidth : 240}}>
          <h5 class="offcanvas-title"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{alignItems:"end"}}></button>
          </div>
          <div className="offcanvas-body" style={{maxWidth : 240}}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" data-bs-toggle="modal" herf="#AboutstaticBack" data-bs-target="#AboutstaticBack">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="modal" herf="#ContactstaticBack" data-bs-target="#ContactstaticBack">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    {/*Contact popup*/}
    <div class="modal fade" id="ContactstaticBack" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ContactstaticBackdrop" aria-hidden="true" >
      <div class="modal-dialog" >
        <div class="modal-content modalst" >
          <div class="modal-header">
            <h5 class="modal-title" id="ContactstaticBackdrop">Contact Information</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body radialgradient" style={{textAlign:"Left",padding:40}}>
          Trade name: 100 Threads Clothing 
<br/><br/>
Email: 100womenthreads@gmail.com
<br/><br/>
Physical address:  manathottam Near AVP school, Aathupalayam poonding ring road, Tirupur-641652 TN, India.
<br/><br/>

{/* GST NUMBER : 33ECHPA3781F1ZV */}
          </div>
          {/* <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div> */}
        </div>
      </div>
    </div>

      {/*About popup*/}
    <div class="modal fade" id="AboutstaticBack" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="AboutstaticBackdrop" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content modalst">
          <div class="modal-header">
            <h5 class="modal-title" id="AboutstaticBackdrop">About us</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body radialgradient" style={{textAlign:"Left",padding:40}}>
            
          </div>
          {/* <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div> */}
        </div>
      </div>
    </div>

    </div>
    
  );
}

export default Head_navbar;
