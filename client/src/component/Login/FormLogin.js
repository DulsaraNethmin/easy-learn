import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import {useHistory} from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const history= useHistory(); 
  return (
    <div className='form-content-right-login'>
      <form onSubmit={handleSubmit} className='form-login' noValidate>
        <h1>
          Login
        </h1>
        <div className='form-inputs-login'>
          <label className='form-label-login'>Username</label>
          <input
            id='uname'
            className='form-input-login'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
       
        <div className='form-inputs-login'>
          <label className='form-label-login'>Password</label>
          <input
            id='password'
            className='form-input-login'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
        <button className='form-input-btn-login' type='submit' onClick={(e)=>
            {
              const data=
              {
                  uname:document.getElementById('uname').value,
                  password:document.getElementById('password').value,
              }
              console.log(data);
              axios.post('http://localhost:8000/user.info/login',data)
                  .then(res=>
                      {
                          if(res.data==='wrong pw')
                              alert('invalid username or password');
                          else
                          {
                              sessionStorage.setItem("type",`${res.data.type}`);
                              sessionStorage.setItem("uname",`${res.data.uname}`);
                              if(sessionStorage.getItem("type")=="teacher")
                                  history.push('/home.teacher');
                              else
                                  history.push('/home.student');
                          }
                      })
            }}>
          Login
        </button>
        <span className='form-input-login-login'>
          Don't have an account? Sign up <a href='/register'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormLogin;


 