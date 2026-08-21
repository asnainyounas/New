import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-2">
          Welcome!
        </h1>
        <p className="text-lg text-gray-700">
          Authentication is working 🎉
        </p>
      </div>
    </div>
  );
};

export default Home;