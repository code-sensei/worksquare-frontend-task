/**
 * Property interface defining the structure of a property listing
 */
export interface Property {
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
 * Filter interface defining the structure of property filters
 */
export interface PropertyFilters {
  propertyType: string;
  location: string;
  priceRange: string;
  statusType: string; // 'buy', 'rent', 'lease'
} 