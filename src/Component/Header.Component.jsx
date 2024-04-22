import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Headerfooter.component.css";

const HeadNavbar = ({Setactbar}) => {

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor: 'white', padding:0}}>
        <div className="container" style={{ padding:0, width:'max',fontWeight:550 }}>
          <a className="navbar-brand" href="/">
            <div className='logobg-img'></div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ border: "none" }}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-start" id="navbarNav" style={{ maxWidth: 240 }}>
            <div className="offcanvas-header" style={{ maxWidth: 240 }}>
              <h5 className="offcanvas-title"></h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{ alignItems: "end" }}></button>
            </div>
            <div className="offcanvas-body" style={{ maxWidth: 240 }}>
              <ul className="navbar-nav ml-auto">
                <li>
                  <a className={`nav-itstyle ${(Setactbar==='0')?'active':''}`} href="/">Home</a>
                </li>
                <li>
                  <a className={`nav-itstyle ${(Setactbar==='1')?'active':''}`} href="/Products">Products</a>
                </li>
                <li >
                <a className={`nav-itstyle ${(Setactbar==='2')?'active':''}`} href="/about">About</a>
                </li>
                <li >
                  <a className={`nav-itstyle ${(Setactbar==='3')?'active':''}`} href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    

    </header> 

  );
}

export default HeadNavbar;
