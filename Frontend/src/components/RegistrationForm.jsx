import React from 'react';

const RegistrationForm = () => {
  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full mt-2 p-3 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full mt-2 p-3 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" className="w-full mt-2 p-3 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Document</label>
          <input type="file" className="w-full mt-2 p-3 border rounded" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
