"use client";
import { RefreshCwIcon } from 'lucide-react';
import React from 'react';
 

const LoadingIcon = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500">
        <RefreshCwIcon className="h-8 w-8 text-blue-500" />
      </div>
    </div>
  );
};

export default LoadingIcon;
