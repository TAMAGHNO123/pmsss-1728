import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
