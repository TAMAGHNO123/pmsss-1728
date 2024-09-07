import React from 'react';

const StatusTracking = () => {
  // Mock status data
  const statusData = [
    { document: 'ID Proof', status: 'Pending' },
    { document: 'Address Proof', status: 'Verified' },
  ];

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Document Status</h2>
      <ul className="space-y-4">
        {statusData.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span>{item.document}</span>
            <span className={`font-semibold ${item.status === 'Verified' ? 'text-green-600' : 'text-red-600'}`}>
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatusTracking;
