import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 

function Welcome() {
  return (
    <div className="welcome">
      <h1>La mia App</h1>
      <p>Welcome component.</p>
    </div>
  );
}

ReactDOM.render(<Welcome />, document.getElementById('root'));