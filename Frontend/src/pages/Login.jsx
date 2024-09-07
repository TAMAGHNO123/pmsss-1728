import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      <div className="max-w-md w-full p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">Login</h2>
        <LoginForm />
        <div className="mt-4 text-center">
          <p className="text-gray-600">Don't have an account?</p>
          <Link to="/register" className="text-blue-600 hover:underline font-semibold">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
