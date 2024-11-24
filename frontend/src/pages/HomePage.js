import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is a protected page.</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default HomePage;
