import React from 'react';

const Features = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold">Digital Document Submission</h3>
            <p className="mt-2 text-gray-600">Easily upload and manage your documents online.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold">Real-Time Tracking</h3>
            <p className="mt-2 text-gray-600">Track the status of your application anytime, anywhere.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold">Secure & Efficient</h3>
            <p className="mt-2 text-gray-600">Your data is protected with the latest security measures.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
