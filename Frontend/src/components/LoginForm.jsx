import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const LoginForm = () => {
  const handleLoginSuccess = (response) => {
    console.log(response);
    // Handle successful login
  };

  const handleLoginError = (error) => {
    console.error(error);
    // Handle login error
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
      />
    </div>
  );
};

export default LoginForm;
