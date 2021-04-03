import React from 'react';
import {useHistory} from 'react-router-dom';
import validate from './validateInfo';
import useForm from './UseForm';
import './Form.css';
import axios from 'axios';

const FormSignup = ({ submitForm }) => {


  const history=useHistory();
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form className='form' noValidate>
        <h1 style={{fontSize:'30px'}}>
          User Registration
        </h1>
        <div className='form-inputs'>
          <label style={{color:'white'}}>Teacher</label>
          <input
            id='teacher'
            type='radio'
            name='type'
            value='teacher'
            style={{color:"white"}}
          />
          
        </div>
        <div className='form-inputs'>
          <label style={{color:'white'}}>Student</label>
          <input
            id='student'
            type='radio'
            name='type'
            value='student'
            style={{color:"white"}}
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Firstname</label>
          <input
            id='fname'
            className='form-input'
            type='text'
            name='firstname'
            placeholder='Enter your firstname'
            value={values.firstname}
            onChange={handleChange}
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Lastname</label>
          <input
            id='lname'
            className='form-input'
            type='text'
            name='lastname'
            placeholder='Enter your lastname'
            value={values.lastname}
            onChange={handleChange}
          />
        
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            id='uname'
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Telephone Number</label>
          <input
            id='phonno'
            className='form-input'
            type='text'
            name='telephone'
            placeholder='Enter your telephone number'
            value={values.telephone}
            onChange={handleChange}
          />
        
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            id='email'
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            id='password'
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            id='confirmPassword'
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit' onClick={(e)=>
          {
              e.preventDefault();
              const types=document.getElementsByName('type'); 
              console.log(types);
              let selectedType='';
              for(let t of types)
              {
                if(t.checked)
                  selectedType=t.value;
              }
              console.log(selectedType);

             const ob=
              {
                type:selectedType,
                fname:document.getElementById('fname').value,
                lname:document.getElementById('lname').value,
                uname:document.getElementById('uname').value,
                phonno:document.getElementById('phonno').value,
                email:document.getElementById('email').value,
                password:document.getElementById('password').value,
              }
              console.log(ob);
              axios.post('http://localhost:8000/user.info',ob)
                  .then(res=>
                    {
                      if(res.data==='usernane has taken')
                        alert('username has taken');
                      else if(res.data==='phonno has taken')
                        alert('phone no. has taken');                      
                      else if(res.data==='email has taken')
                        alert('email has taken');
                      else
                        history.push('/login');  
                    })
          }}>
          Sign up
        </button>
        <span className='form-input-reg'>
          Already have an account? Login <a href='/login'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;