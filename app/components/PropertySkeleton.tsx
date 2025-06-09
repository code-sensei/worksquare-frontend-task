import React from 'react';

/**
 * PropertySkeleton component that displays a loading placeholder for property cards
 * 
 * @returns {React.ReactElement} The rendered PropertySkeleton component
 */
const PropertySkeleton = (): React.ReactElement => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md animate-pulse">
      {/* Image placeholder */}
      <div className="w-full h-64 bg-gray-200"></div>
      
      {/* Content placeholders */}
      <div className="p-5">
        {/* Price placeholder */}
        <div className="mb-4">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
        
        {/* Features placeholder */}
        <div className="flex items-center gap-6 mb-4">
          <div className="h-5 bg-gray-200 rounded w-24"></div>
          <div className="h-5 bg-gray-200 rounded w-24"></div>
        </div>
        
        {/* Location placeholder */}
        <div className="h-5 bg-gray-200 rounded w-40 mb-4"></div>
        
        {/* Title placeholder - 2 lines */}
        <div className="h-5 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>
        
        {/* Button placeholder */}
        <div className="h-10 bg-gray-200 rounded w-28"></div>
      </div>
    </div>
  );
};

export default PropertySkeleton; 