import React, { useState, useEffect } from 'react';

const Notification = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => onClose(), 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    show ? (
      <div className="fixed top-0 right-0 m-4 bg-blue-500 text-white p-4 rounded-md shadow-lg">
        {message}
      </div>
    ) : null
  );
};

export default Notification;
