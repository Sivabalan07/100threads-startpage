import './App.css';
import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'
import Head from './Component/Header.Component';

function App() {
  const [showLoginModal, setShowLoginModal] = React.useState(true);

  const handleOpenLoginModal = () => {
    setShowLoginModal(!showLoginModal);

  }
  return (
      <div>
      <Head/>
      <div className="container mt-4">
        <h1>Your Content Goes Here</h1>
        {/* Add your page content here */}
        <br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
      </div>

  );
}

export default App;
