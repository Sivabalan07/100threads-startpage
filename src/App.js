import './App.css';
import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'
import Head_navbar from './Component/Header.Component';
import Foot_bar from './Component/Footer.Component';

function App() {
  const [showLoginModal, setShowLoginModal] = React.useState(true);

  const handleOpenLoginModal = () => {
    setShowLoginModal(!showLoginModal);

  }
  return (
      <div>
      <Head_navbar/>
      <div className="container mt-4">
        <h1>Your Content Goes Here</h1>
        {/* Add your page content here */}
  
      </div>
      <foot_bar/>
      </div>

  );
}

export default App;
