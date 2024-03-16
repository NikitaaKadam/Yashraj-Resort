import React, { useRef,useState} from 'react'
import { Link } from 'react-router-dom'
import '../Login.css';
import axios from 'axios';

export default function Signup() {
  const [error, setError] = useState('');
  const firstName=useRef(null);
  const lastName=useRef(null);
  const email =useRef(null);
  const phNo=useRef(null);
  const dob = useRef(null);
  const password =useRef(null);
  const confirmPassword = useRef(null);
  const userRole =useRef(null);
  
  const validateForm = () => {
    //console.log(confirmPassword.current); // Check if this is not null or undefined
 // console.log(confirmPassword.current?.value);
    if (
      !firstName.current?.value ||
      !lastName.current?.value ||
      !email.current?.value ||
      !phNo.current?.value ||
      !dob.current?.value ||
      !password.current?.value ||
      !confirmPassword.current?.value ||
      !userRole.current?.value
    ) {
      setError('All fields are required');
      return false;
    }

// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email.current.value)) {
  setError('Invalid email format');
  return false;
}

// Password validation
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$/;
if (!passwordRegex.test(password.current.value)) {
  setError('Need Strong password with atleast 8 characters');
  return false;
}

if (password.current.value !== confirmPassword.current.value) {
  setError('Passwords do not match');
  return false;
}

// Phone number validation
const phoneRegex = /^\d{10}$/;
if (!phoneRegex.test(phNo.current.value)) {
  setError('Invalid phone number format (10 digits without spaces)');
  return false;
}

setError('');
return true;
};

  const registerHandle = () => {
    if (validateForm()) {
    const newUser={
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      phNo:phNo.current.value,
      dob:dob.current.value,
      password:password.current.value,
      confirmPassword:confirmPassword.current.value,
      userRole:userRole.current.value,
    };
    axios
      .post("http://localhost:7066/user/regUser", newUser)
      .then((res) => {
        console.log(res.data);
        alert(res)
        setUsers(res.data);
      })
      .catch((err) => {
        alert("user already exists with this email or password")
        // console.log(err);
      });
  }
};
  return (
      <div className='row signup justify-content-center align-items-center vh-100 '>
      <div className='col-xl-6 container p-5 border border-dark rounded'>
        <h1 className='text-center'>Sign Up</h1>
        <div className='row mb-2'>
          <div className='col'>
            <label htmlFor='fname'>First Name</label>
            <input type='text' placeholder='Enter First Name' className='form-control' ref={firstName}/>
          </div>
          <div className='col'>
            <label htmlFor='lname'>Last Name</label>
            <input type='text' placeholder='Enter Last Name' className='form-control' ref={lastName}/>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col-xl-6 mb-2'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control' ref={email}/>
          </div>
          
          <div className='col-xl-6 mb-2'>
            <label htmlFor='dob'>Date of Birth</label>
            <input type='date' placeholder='Enter Date of Birth' className='form-control' ref={dob}/>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col-xl-6 mb-2'>
            <label htmlFor='phNo'>Phone No</label>
            <input type='text' placeholder='Enter Phone No' className='form-control' ref={phNo}/>
          </div>
          <div className='col-xl-6 mb-2 '>
          <label  className='drpdwn' htmlFor='userRole'>User Role</label><br/>
            <select className='drpdwn' ref={userRole}>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter Password' className='form-control' ref={password}/>
          </div>
          <div className='mb-2'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <input type='password' placeholder='Confirm Password' className='form-control'ref={confirmPassword} />
          </div>
        </div>
        <div className='d-grid'>
          <button className='btn btn-primary' onClick={registerHandle}>Sign Up</button>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
        <p className='text-center mt-2'>
          Already registered? <Link to="/login" className='ms-2'>Sign In</Link>
        </p>
      </div>
    </div>
  );
}

