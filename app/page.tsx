'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import PropertyCard from './components/PropertyCard';
import PropertySkeleton from './components/PropertySkeleton';
import Pagination from './components/Pagination';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { Property, PropertyFilters } from './types';
import listingsData from './data/listings.json';

/**
 * Home component that serves as the main page
 * 
 * @returns {React.ReactElement} The rendered Home component
 */
export default function Home(): React.ReactElement {
  // State for property listings and pagination
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage] = useState(6); // Show 6 properties per page (3 rows of 2)
  const [loading, setLoading] = useState(true);
  
  // State for filters
  const [activeTab, setActiveTab] = useState('rent');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  /**
   * Initialize properties from data
   */
  useEffect(() => {
    // Simulate API loading
    setLoading(true);
    
    setTimeout(() => {
      // Cast listings to Property[] type
      setProperties(listingsData as unknown as Property[]);
      setLoading(false);
    }, 500); // Short delay to demonstrate loading state
  }, []);

  /**
   * Filter properties whenever filters change
   */
  useEffect(() => {
    if (!properties.length) return;

    // Show loading state when filtering
    setLoading(true);

    // Simulate filtering delay
    const filterTimeout = setTimeout(() => {
      let results = [...properties];

      // Filter by tab (buy, rent, lease)
      if (activeTab) {
        const statusMap: Record<string, string> = {
          'buy': 'For Sale',
          'rent': 'For Rent',
          'lease': 'For Lease'
        };
        
        results = results.filter(property => 
          property.status.includes(statusMap[activeTab] || '')
        );
      }

      // Filter by property type
      if (propertyType) {
        results = results.filter(property => 
          property.status.includes(propertyType)
        );
      }

      // Filter by location
      if (location) {
        results = results.filter(property => 
          property.location.includes(location)
        );
      }

      // Filter by price range
      if (priceRange) {
        const [minStr, maxStr] = priceRange.split('-');
        const min = parseInt(minStr);
        const max = maxStr === '+' ? Infinity : parseInt(maxStr);
        
        results = results.filter(property => {
          // Extract numeric value from price string
          const priceValue = parseInt(property.price.replace(/[^\d]/g, ''));
          return priceValue >= min && priceValue <= max;
        });
      }

      setFilteredProperties(results);
      setCurrentPage(1); // Reset to first page after filtering
      setLoading(false);
    }, 300);

    return () => clearTimeout(filterTimeout);
  }, [properties, activeTab, propertyType, location, priceRange]);

  /**
   * Handle page change
   * 
   * @param {number} pageNumber - The page number to navigate to
   */
  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate pagination
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  // Generate skeleton loaders when loading
  const skeletons = Array(propertiesPerPage).fill(0).map((_, index) => (
    <PropertySkeleton key={`skeleton-${index}`} />
  ));

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <FilterBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          propertyType={propertyType}
          setPropertyType={setPropertyType}
          location={location}
          setLocation={setLocation}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
        
        {/* Property Grid - Exactly 2 cards per row */}
        <div className="mt-8">
          {loading ? (
            // Skeleton Loading Grid - 2 cards per row
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skeletons}
            </div>
          ) : currentProperties.length > 0 ? (
            // Property Cards Grid - 2 cards per row
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            // No results message
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-600">No properties found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your filters to find more properties.</p>
            </div>
          )}
        </div>
        
        {!loading && filteredProperties.length > propertiesPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
      
      <Newsletter />
      <Footer />
    </main>
  );
}
