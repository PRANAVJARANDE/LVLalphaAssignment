import React from 'react';

const Loading = ({ message = "Extracting..." }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-blue-500"></div>
        <p className="mt-4 text-gray-700 text-lg">{message}</p>
      </div>
    </div>
  );
};

export default Loading;
