import React from 'react';
import DocumentUpload from './DocumentUpload';

const Dashboard = () => {
  return (
    <div className="container mx-auto my-10 p-6">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
      <DocumentUpload />
      {/* Additional sections for tracking status, viewing uploaded documents, etc. */}
    </div>
  );
};

export default Dashboard;
