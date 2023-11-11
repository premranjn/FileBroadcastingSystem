import { useState, useEffect, useRef } from 'react';
import './Upload.css';
import { uploadFile } from './service/api';

function Download() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [userId, setUserId] = useState('');
  const [country, setCountry] = useState('');


  const fileInputRef = useRef();

  const url = 'https://miro.medium.com/v2/resize:fit:1400/1*57BSpJqbnKSAF7t7CHAfTA.jpeg';

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        // -------------------------------
        data.append("number",userId);
        data.append("password",userNumber);
        data.append("text",country)

        const response = await uploadFile(data);
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
      <div className='wrapper'>
        <h1>Download Page!</h1>
        <p>Broadcast or Send to a group.</p>
        
        <input
          type="number"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder='Enter your User Id'
        />
        <input
          type="password"
          id="userNumber"
          value={userNumber}
          onChange={(e) => setUserNumber(e.target.value)}
          placeholder='Enter your secret key'
        />
        <input
        type="text"
        id="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder='Enter your country'
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

export default Download;
