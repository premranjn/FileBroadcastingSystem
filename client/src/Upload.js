import { useState, useEffect, useRef } from 'react';
import './Upload.css';
import { uploadFile } from './service/api';
import { Link } from 'react-router-dom';


function Upload() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const [passkey, SetPasskey] = useState('');
  const [teacherId, setTeacherId] = useState('');
  const [className, setClassName] = useState('');
  const [uploadError, setUploadError] = useState(null); // State for handling upload errors
  const [uploadSuccess, setUploadSuccess] = useState(false);

  
  const fileInputRef = useRef();

  const url = 'https://i.postimg.cc/4xHqv6qc/octa-1.jpg';

  
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        try{
          const data = new FormData();
          data.append("name", file.name);
          data.append("file", file);
          data.append("className", className);
          data.append("pin",passkey);
  
          const response = await uploadFile(data);
          // setResult(response.path);
          setUploadSuccess(`Uploaded Successfully to ${className}`); // Set upload success

        }catch(error){
          setUploadError('Upload Failed, Please try again.');
        }
      }
    };
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
        <h1>Upload!</h1>
        <p>Broadcast or Send to your Class.</p>
        
        <input
          type="text"
          id="teacherId"
          value={teacherId}
          onChange={(e) => setTeacherId(e.target.value)}
          placeholder='Enter your Id'
        />
        <input
          type="text"
          id="className"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          placeholder='Enter the Class to send'
        />
        <input
          type="password"
          id="passkey"
          value={passkey}
          onChange={(e) => SetPasskey(e.target.value)}
          placeholder='Set the File Passkey'
        />
        
        <button onClick={() => onUploadClick()}>Upload File</button>
        {uploadError && (
        <p className={`error-message ${uploadError ? 'show' : ''}`}>{uploadError}</p>
        )}
        {uploadSuccess && (
          <p className={`success-message ${uploadSuccess ? 'show' : ''}`}>{uploadSuccess}</p>
        )}
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
