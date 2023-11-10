import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const Head_navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top"style={{background : 'linear-gradient( #f1e7d9,#fff,#fff,#fff,#fff)'}}>
      <div className="container">
        <a className="navbar-brand" href="#">Your Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" data-bs-toggle="modal" data-bs-target="#AboutstaticBack">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="modal" data-bs-target="#ContactstaticBack">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/*Contact popup*/}
    <div class="modal fade" id="ContactstaticBack" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ContactstaticBackdrop" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ContactstaticBackdrop">Contact Info</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
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
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="AboutstaticBackdrop">About us</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
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
