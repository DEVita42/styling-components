import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import Clock from './Clock';
import TodoList from './Todolist';
import UncontrolledLogin from './UncontrolledLogin';
import FocusableInput from './FocusableInput';

function Welcome() {
  return (
    <>
    <div className="welcome">
      <h1>La mia App</h1>
      <p>Welcome component.</p>
    </div>
    <Clock/>
    <TodoList/>
    <UncontrolledLogin/>
    <FocusableInput/>
    </>
  );
}

ReactDOM.render(<Welcome /> , document.getElementById('root'));