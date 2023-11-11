import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes

import './index.css';
import Upload from './Upload';
import Download from './Download';
import Landing from './Landing';
import Relation from './RelationManager';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

// Render the components with React Router
root.render(
  <React.StrictMode>
    <Router>
      <Routes> {/* Wrap your Routes in a Routes component */}
        <Route path="/" element={<Landing />} />
        <Route path="/relation" element={<Relation />} />
        <Route path="/download" element={<Download />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
