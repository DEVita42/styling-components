import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import Clock from './Clock';

function Welcome() {
  return (
    <>
    <div className="welcome">
      <h1>La mia App</h1>
      <p>Welcome component.</p>
    </div>
    <Clock/>
    </>
  );
}

ReactDOM.render(<Welcome /> , document.getElementById('root'));