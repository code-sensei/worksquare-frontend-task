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
        <div className="absolute top-3 right-3 flex gap-2">
          <span className="px-3 py-1 bg-white text-gray-700 text-xs font-medium rounded-full shadow-sm">
            House
          </span>
          <span className="px-3 py-1 bg-white text-gray-700 text-xs font-medium rounded-full shadow-sm">
            For Rent
          </span>
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
          <div className="flex items-center justify-between mt-2">
            {/* Bedroom */}
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-1 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-gray-700 text-xs">{property.bedrooms} Bedroom</span>
            </div>
            
            {/* Bathroom */}
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-1 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700 text-xs">{property.bathrooms} Bathroom</span>
            </div>

            {/* Location */}
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-1 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-700 text-xs">{property.location}</span>
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