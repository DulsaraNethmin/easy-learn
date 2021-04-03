import React, { useState } from 'react';
import FormLogin from './FormLogin';
import './Login.css';

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='xxx'>
        
       
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          null
        )}
      </div>
    </>
  );
};

export default Login;