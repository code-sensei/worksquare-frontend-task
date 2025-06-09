import React, { useState } from 'react';
import Link from 'next/link';

/**
 * Navbar component for the DreamDwell Estates website
 * 
 * @returns {React.ReactElement} The rendered Navbar component
 */
const Navbar = (): React.ReactElement => {
  // Using Lorem Picsum with a specific seed for a consistent property-themed background
  const heroImageUrl = "https://picsum.photos/seed/realestate-hero/1920/350";
  const [activeTab, setActiveTab] = useState('property');
  
  return (
    <header className="w-full bg-cover bg-center h-[180px]" style={{ backgroundImage: `url(${heroImageUrl})` }}>
      <div className="container mx-auto grid grid-cols-3 px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white col-span-1">
          <h1 className="text-[32px] font-bold leading-tight">DreamDwell</h1>
          <p className="text-[22px] font-light mt-[-6px] ml-[35%]">Estates</p>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center justify-between space-x-6 col-span-2">
          <nav className="bg-white rounded-full overflow-hidden shadow-md">
            <ul className="flex">
              <li>
                <Link href="/" className="px-6 py-3 text-gray-700 hover:text-gray-900 block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/property" className={`px-6 py-3 ${activeTab === 'property' ? 'text-blue-500' : 'text-white'} block`}>
                  Property
                </Link>
              </li>
              <li>
                <Link href="/contact" className="px-6 py-3 text-gray-700 hover:text-gray-900 block">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Become an Agent Button */}
          <Link 
            href="/become-agent" 
            className="bg-blue-600 text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-200"
          >
            Become an Agent
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 