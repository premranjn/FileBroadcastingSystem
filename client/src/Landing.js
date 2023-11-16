import React from 'react';
import './Landing.css'; // You can create a CSS file for styling
import { Link, useLocation } from 'react-router-dom';

function Landing() {
  const url = 'https://i.postimg.cc/nzkCCkrq/IMG-20230905-101613-02-2.jpg';
  // const url = 'https://i.postimg.cc/qRBy8T8D/NITT.png';
  const location = useLocation();

  // const isHomePage = location.pathname === '/';

  return (
    <div className='landing-container' >
      <img src={url} className='background-img' alt='Digital Art Background' />
      <div className='navbar'>
        {/* {!isHomePage && <Link to="/">Home</Link>} */}
        
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/download">Download</Link>
        <Link to="/relation">Relation</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className='content-wrapper'>
        <h1>Welcome to  Digi ShareNITT</h1>
        <p>Explore Sharing with immense possibilities with our digital platform.</p>
        <Link to ="/login"><button className='login-button'>Login</button></Link>
      </div>
    </div>
  );
}

export default Landing;
