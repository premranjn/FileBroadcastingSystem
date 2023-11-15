import { useState, useEffect, useRef } from 'react';
import './Upload.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Relation() {
  const [result, setResult] = useState('');
  const [userId,setStudentId] = useState('');
  const [className,setClassName] = useState('');
  const [uploadError, setUploadError] = useState(null); // State for handling upload errors
  const [uploadSuccess, setUploadSuccess] = useState(false);



  // const url = 'https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/277465105_2132765590207385_4886455866660821286_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DaMUEGOZiiEAX8vK_7Y&_nc_ht=scontent-bom1-1.xx&oh=00_AfDrR1HhB3bYbdwn6ojVfwlemYHAGTInToWtZCLBVM2-Jw&oe=65578841';
  // const url = 'https://miro.medium.com/v2/resize:fit:1400/1*57BSpJqbnKSAF7t7CHAfTA.jpeg';
  const url = 'https://scontent.fmaa8-1.fna.fbcdn.net/v/t1.6435-9/117717500_1671836616300287_4208783604533456706_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=4dc865&_nc_ohc=nhh_74841VYAX-nUm-b&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfAEQoeCQRuTGB0-0srGJBl4FbHcZVapc0gKXTD9GmN6hQ&oe=65794F30';

  const updateRelation = async () => {
    try {
        const response = await axios.post('http://localhost:8000/manage', {
          className,
          userId,
        });
        setUploadSuccess(`${userId} Successfully added to ${className}`); // Set upload success
        console.log('Backend Response', response.data);

    }catch(error){
      console.log('Error Updating Relation to backedn', error);
      setUploadError('Operation Failed, Please try again.');
    }
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
        <h1>Manage Clusture!</h1>
        <p>Add Students to a clusture.</p>
        
        <input
          type="text"
          id="stduentId"
          value={userId}
          onChange={(e) => setStudentId(e.target.value)}
          placeholder="Student's Id you want to add"
        />
        <input
          type="text"
          id="className"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          placeholder='Class you want to add the Student to'
        />
        
        <button onClick={updateRelation}>Add Student</button>
        {uploadError && (
        <p className={`error-message ${uploadError ? 'show' : ''}`}>{uploadError}</p>
        )}
        {uploadSuccess && (
          <p className={`success-message ${uploadSuccess ? 'show' : ''}`}>{uploadSuccess}</p>
        )}
        <a href={result} target='_blank'>{result}</a> 
      </div>
    </div>
  );
}

export default Relation;
