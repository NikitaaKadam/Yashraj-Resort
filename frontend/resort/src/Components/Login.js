import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../Login.css';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const username = useRef(null);
  const password = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usern = username.current.value;
    const pass = password.current.value;

    try {
      const response = await axios.post("http://localhost:7066/user/loginUser", {
        email: usern,
        password: pass
      });
      console.log(response.data);
      const [role, userId] = response.data.split('-');
      const uId = parseInt(userId)
      Cookies.set('userId', uId);
      if (role === 'user') {
        Cookies.set('isUser', true);
        Cookies.set('authenticated', true);
        navigate('/');
        window.location.reload();
      } else if (role === 'admin') {
        Cookies.set('isAdmin', true);
        Cookies.set('authenticated', true);
        navigate('/');
        window.location.reload();
      } else {
        alert(response.status)
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setError("Incorrect Username or Password");
    }
  };


  return (
    <div className='login d-flex justify-content-center align-items-center 150-w vh-100 '>
      <div className=' row form_container p-5 rounded border border-dark'>
        <form onSubmit={handleSubmit}>
          <h3 className='text-center mb-3'>Sign In</h3>
          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor='email'>Email</label>
                <input
                  type='username'
                  name="Username"
                  ref={username}
                  placeholder='Enter Email'
                  className='form-control'
                />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name="password"
                  ref={password}
                  placeholder='Enter Password'
                  className='form-control'
                />
              </div>
            </div>
          </div>
          <div className='d-grid'>
            <button type='submit' className='btn btn-primary'>Sign In</button>
            {error && <div className="alert alert-danger">{error}</div>}
          </div>
          <p className='text-end mt-2'>
            Forgot password? <Link to="/signup" className='ms-2'>Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
