import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="form-group"> 
      <input
        ref={inputRef}
        type="text"
        className="form-control"  
        placeholder="Type something..."
      />
    </div>
  );
};

export default FocusableInput;
