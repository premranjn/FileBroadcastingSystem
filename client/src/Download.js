import { useState, useEffect, useRef } from 'react';
import './Upload.css';
import { uploadFile } from './service/api';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Download() {
  const [result, setResult] = useState('');
  const [studentId, setStudentId] = useState('');
  const [className, setClassname] = useState('');
  const [passkey, setPasskey] = useState('');
  
  const handleDownload = async () => {
    try{
      const response = await axios.post('http://localhost:8000/download/verify',{
        studentId,
        className,
        passkey,
      });
      console.log('Backend Response:', response.data);
    }catch(error){
      console.error('Error sending to backend:', error);
    }
    
  };
  
  // const url = 'https://miro.medium.com/v2/resize:fit:1400/1*57BSpJqbnKSAF7t7CHAfTA.jpeg';
  const url = 'https://scontent.fmaa8-1.fna.fbcdn.net/v/t1.6435-9/117889307_1671835459633736_2521845204123450989_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=4dc865&_nc_ohc=7j73ThyoyeEAX8JX_pm&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfA1hqpxvsf5p8z2rKu1bLy72Ykysdde0OFTrYtZmDwn1Q&oe=657955D5'
  
  
  
  return (
    <div className='container'>
      <img src={url} className='img' />
      <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/download">Download</Link>
        <Link to="/relation">Relation</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className='wrapper'>
        <h1>Download!</h1>
        <p>Download Files Shared to your Class.</p>
        
        <input
          type="text"
          id="studentId"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          placeholder='Enter your Student Id'
        />
        <input
        type="text"
        id="className"
        value={className}
        onChange={(e) => setClassname(e.target.value)}
        placeholder='Enter your Classroom'
      />
        <input
          type="password"
          id="passkey"
          value={passkey}
          onChange={(e) => setPasskey(e.target.value)}
          placeholder='Enter the File Passkey'
        />
        
        
        <button onClick={handleDownload}>Download File</button>
        
        <a href={result} target='_blank'>{result}</a> 
      </div>
    </div>
  );
}

export default Download;
