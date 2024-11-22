import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../register/register.css";

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameErr, setNameErr] = useState(false);
  const history = useHistory();

  function registertration() {
    if ((username.trim().length === 0) || (password.trim().length === 0) || (email.trim().length === 0)) {
      setNameErr(true);
    } else if (!email.includes('@') || !email.includes('.') || !email.includes('com')) {
      alert('Please enter a valid email address');
    } else if (password.length < 5) {
      alert('Please enter a password with more than five characters');
    } else {
      setNameErr(false);
      const array = [{ username: username, email: email, password: password }];
      console.log(array);
      sessionStorage.setItem('user', JSON.stringify({ 'name': username, 'email': email, 'password': password }));
      history.push('/login');
    }
  }

  function navigateToLogin() {
    history.push('/login');
  }

  return (
    <div className="register-body">
      <div className="register-main">
        <h1>Register Form</h1>
        {nameErr && <p className="errP">*Please fill every input field*</p>}
        <br />
        <p>Name</p>
        <input
          type='text'
          value={username}
          onChange={(e) => { setUsername(e.target.value); }}
        />
        <br />
        <p>Email</p>
        <input
          type='text'
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
        />
        <br />
        <p>Password</p>
        <input
          type='password'
          value={password}
          onChange={(e) => { setPassword(e.target.value); }}
        />
        <br /><br />
        <button onClick={registertration}>Register</button>
        <br /><br />
        <p>
          Already have an account?{' '}
          <span
            className="login-link"
            onClick={navigateToLogin}
            style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
