import React, { useState } from 'react';

const DocumentUpload = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // Simulate file upload
      setStatus("File uploaded successfully");
      // Here you would typically send the file to the backend
    } else {
      setStatus("Please select a file");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Upload Your Documents</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full border border-gray-300 p-2 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Upload
        </button>
        {status && <p className="text-green-500 mt-2">{status}</p>}
      </form>
    </div>
  );
};

export default DocumentUpload;
