import React from 'react';

const Hero = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center h-screen flex items-center">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-white">Empowering Education with Ease</h1>
        <p className="text-xl text-white mt-4">Streamlining the scholarship process for a better future.</p>
        <a href="/get-started" className="mt-6 inline-block bg-blue-600 text-white py-3 px-8 rounded hover:bg-blue-700">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
