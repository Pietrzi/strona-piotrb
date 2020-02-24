import React from 'react';
import './App.css';
import sample from './Surfer1.mp4'

function App() {
  return (
    <>
    <header>
      <video src={sample} autoPlay="true" loop="true"></video>
    </header>
    <div className="content">
      <h1>Navbar</h1>
      <p>content</p>
      <p>footer</p>
    </div>
    </>
  );
}

export default App;
