import React from 'react';
import Image from 'next/image';

/**
 * Property interface defining the structure of a property object
 */
interface Property {
  id: number;
  price: string;
  bedrooms: number;
  bathrooms: number;
  location: string;
  title: string;
  status: string[];
  image: string;
}

/**
 * PropertyCard component that displays a property listing with horizontal layout
 * 
 * @param {Property} property - The property object to display
 * @returns {React.ReactElement} The rendered PropertyCard component
 */
const PropertyCard = ({ property }: { property: Property }): React.ReactElement => {
  // Generate property image URL using Picsum with a seed based on property ID
  const imageUrl = `https://picsum.photos/seed/property-${property.id}/800/600`;
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
      {/* Property Image with Tags - Left Side */}
      <div className="relative w-full md:w-5/12">
        {/* Status Tags - Positioned at top right of image */}
        <div className="absolute top-3 left-3 flex gap-2">
          {property.status.slice(0, 2).map((status, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-white text-gray-700 text-xs font-medium rounded-full shadow-sm"
            >
              {status}
            </span>
          ))}
        </div>
        
        {/* Property Image */}
        <div className="w-full h-64 md:h-full relative">
          <Image 
            src={imageUrl}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            priority={property.id <= 4}
          />
        </div>
      </div>
      
      {/* Property Details - Right Side */}
      <div className="p-6 flex flex-col justify-between w-full md:w-7/12">
        <div className="space-y-4">
          {/* Price */}
          <h3 className="text-2xl font-bold text-gray-800">₦ {property.price.replace('₦', '').trim()}</h3>
          <p className="text-gray-500 text-sm -mt-3">Per Annum</p>
          
          {/* Features Row */}
          <div className="flex items-center gap-6 mt-2">
            {/* Bedroom */}
            <div className="flex items-center">
              <span className="text-gray-700 font-medium mr-1">{property.bedrooms}</span>
              <span className="text-gray-700">Bedroom</span>
            </div>
            
            {/* Bathroom */}
            <div className="flex items-center">
              <span className="text-gray-700 font-medium mr-1">{property.bathrooms}</span>
              <span className="text-gray-700">Bathroom</span>
            </div>

            {/* Location */}
            <div className="flex items-center">
              <span className="text-gray-700">{property.location}</span>
            </div>
          </div>
          
          {/* Property Title */}
          <h4 className="text-gray-800 text-lg font-medium line-clamp-2">{property.title}</h4>
        </div>
        
        {/* View Button - at the bottom */}
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white py-2 px-6 rounded-md flex items-center justify-center w-max">
            View
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard; 