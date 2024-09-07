import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">PMSSS</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/about" className="hover:text-blue-600">About</a></li>
            <li><a href="/faq" className="hover:text-blue-600">FAQ</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
        <div>
          <a href="/login" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
