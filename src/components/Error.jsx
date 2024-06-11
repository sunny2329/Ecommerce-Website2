import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
        <p className="text-lg text-gray-700 mb-4">
          The page you are looking for might have been removed,
          <br /> had its name changed, or is temporarily unavailable.
        </p>
        <button
          onClick={() => window.history.back()}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg focus:outline-none"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
