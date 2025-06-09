import React from 'react';

/**
 * Interface for FilterBar props
 */
interface FilterBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  propertyType: string;
  setPropertyType: (type: string) => void;
  location: string;
  setLocation: (location: string) => void;
  priceRange: string;
  setPriceRange: (range: string) => void;
}

/**
 * FilterBar component with property filters
 * 
 * @param {FilterBarProps} props - Component props
 * @returns {React.ReactElement} The rendered FilterBar component
 */
const FilterBar = ({
  activeTab,
  setActiveTab,
  propertyType,
  setPropertyType,
  location,
  setLocation,
  priceRange,
  setPriceRange
}: FilterBarProps): React.ReactElement => {
  return (
    <div className="w-full px-4 flex flex-col items-start gap-8 py-4">
      {/* Tabs */}
      <div className="bg-blue-500 rounded-full overflow-hidden max-w-md w-full">
        <div className="flex p-2">
          <button
            className={`flex-1 py-3 px-6 text-center transition-colors ${
              activeTab === 'buy' 
                ? 'bg-white text-blue-500 font-medium rounded-l-full rounded-r-full' 
                : 'text-white hover:bg-blue-600'
            }`}
            onClick={() => setActiveTab('buy')}
          >
            Buy
          </button>
          <button
            className={`flex-1 py-3 px-6 text-center transition-colors ${
              activeTab === 'rent' 
                ? 'bg-white text-blue-500 font-medium rounded-r-full rounded-l-full' 
                : 'text-white hover:bg-blue-600'
            }`}
            onClick={() => setActiveTab('rent')}
          >
            Rent
          </button>
          <button
            className={`flex-1 py-3 px-6 text-center transition-colors ${
              activeTab === 'lease' 
                ? 'bg-white text-blue-500 font-medium rounded-r-full rounded-l-full' 
                : 'text-white hover:bg-blue-600'
            }`}
            onClick={() => setActiveTab('lease')}
          >
            Lease
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 bg-transparent rounded-xl overflow-hidden">
          {/* Property Type Filter */}
          <div className="flex items-center">
            <div className="p-3 md:p-4 flex items-center">
              <div className="bg-blue-500 text-white p-3 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium">Property Type</p>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full text-sm text-gray-800 bg-transparent border-none focus:outline-none"
                >
                  <option value="">All</option>
                  <option value="House">House</option>
                  <option value="Flat">Flat</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Terrace">Terrace</option>
                  <option value="Duplex">Duplex</option>
                </select>
              </div>
            </div>
            <div className="hidden md:block h-12 w-px bg-gray-200 my-auto"></div>
          </div>

          {/* Location Filter */}
          <div className="flex items-center">
            <div className="p-3 md:p-4 flex items-center">
              <div className="bg-blue-500 text-white p-3 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium">Location</p>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full text-sm text-gray-800 bg-transparent border-none focus:outline-none"
                >
                  <option value="">Anywhere</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Ogun">Ogun</option>
                </select>
              </div>
            </div>
            <div className="hidden md:block h-12 w-px bg-gray-200 my-auto"></div>
          </div>

          {/* Price Range Filter */}
          <div className="flex items-center">
            <div className="p-3 md:p-4 flex items-center">
              <div className="bg-blue-500 text-white p-3 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium">Price Range</p>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full text-sm text-gray-800 bg-transparent border-none focus:outline-none"
                >
                  <option value="">Any Price</option>
                  <option value="0-1000000">₦0 - ₦1,000,000</option>
                  <option value="1000000-2000000">₦1,000,000 - ₦2,000,000</option>
                  <option value="2000000-3000000">₦2,000,000 - ₦3,000,000</option>
                  <option value="3000000+">₦3,000,000+</option>
                </select>
              </div>
            </div>
            <div className="hidden md:block h-12 w-px bg-gray-200 my-auto"></div>
          </div>

          {/* Search Button */}
          <div className="p-3 md:p-4 flex items-center justify-center">
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg flex items-center justify-center w-full md:w-auto hover:bg-blue-600 transition-colors">
              <span>Search</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar; 