import React from 'react';

const UsersGreeting = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-slate-200 to-purple-300">
      <div className="text-center p-6 bg-white rounded-2xl shadow-lg max-w-md">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome to Your Space!
        </h1>
        <p className="text-gray-600 mt-4">
          Every click leads to discovery, and every moment is tailored just for you.
        </p>
      </div>
    </div>
    );
};

export default UsersGreeting;