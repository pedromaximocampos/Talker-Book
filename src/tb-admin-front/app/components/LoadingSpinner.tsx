import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-screen -mt-40">
            <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
        </div>
    );
};

export default LoadingSpinner;
