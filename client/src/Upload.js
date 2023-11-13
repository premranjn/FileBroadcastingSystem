import { useState, useEffect, useRef } from 'react';
import './Upload.css';
import { uploadFile } from './service/api';
import { Link } from 'react-router-dom';


function Upload() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [userId, setUserId] = useState('');

  const fileInputRef = useRef();

  // const url = 'https://miro.medium.com/v2/resize:fit:1400/1*57BSpJqbnKSAF7t7CHAfTA.jpeg';
  const url = 'https://i.postimg.cc/4xHqv6qc/octa-1.jpg';

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        // -------------------------------
        data.append("number",userId);
        data.append("password",userNumber);

        const response = await uploadFile(data);
        console.log(response);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

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
        <h1>File Sharing!</h1>
        <p>Broadcast or Send to a group.</p>
        
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder='Enter your User name'
        />
        <input
          type="password"
          id="userNumber"
          value={userNumber}
          onChange={(e) => setUserNumber(e.target.value)}
          placeholder='Enter your secret key'
        />
        
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <a href={result} target='_blank'>{result}</a> 
      </div>
    </div>
  );
}

export default Upload;
