import React from 'react';
import './Landing.css'; // You can create a CSS file for styling
import { Link } from 'react-router-dom';


function Landing() {
  // const url = 'https://miro.medium.com/v2/resize:fit:1400/1*57BSpJqbnKSAF7t7CHAfTA.jpeg';
  // const url = 'https://i.postimg.cc/Twc0HdDX/photo-2023-11-11-22-20-25.jpg';
  const url = 'https://i.postimg.cc/nzkCCkrq/IMG-20230905-101613-02-2.jpg';
  // const url = 'https://i.postimg.cc/yxDssXZ1/IMG-20230905-101613-02-3.jpg';

  return (
    <div className='landing-container'>
      <img src={url} className='background-img' alt='Digital Art Background' />
      <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/download">Download</Link>
        <Link to="/relation">Relation</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className='content-wrapper'>
        <h1>Welcome to Our Digital World</h1>
        <p>Explore the possibilities with our digital platform.</p>
        <button className='login-button'>Login</button>
      </div>
    </div>
  );
}

export default Landing;
