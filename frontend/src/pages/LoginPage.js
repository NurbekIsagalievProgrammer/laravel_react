import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const navigate = useNavigate(); 

  
  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm />
      
   
      <button onClick={goToRegister}>Register</button>
    </div>
  );
}

export default LoginPage;
