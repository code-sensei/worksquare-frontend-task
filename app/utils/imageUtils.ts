/**
 * Utility functions for generating random property images
 */

/**
 * Property image categories for generating more realistic property images
 */
const PROPERTY_CATEGORIES = [
  'house', 'apartment', 'condo', 'interior', 'real-estate', 'architecture', 'home'
];

/**
 * Generate a random property image URL
 * 
 * @param {number} width - Width of the image
 * @param {number} height - Height of the image
 * @param {number} id - Property ID to ensure consistent image for the same property
 * @returns {string} Random property image URL
 */
export const getRandomPropertyImage = (width: number = 640, height: number = 480, id: number): string => {
  // Use property ID as seed for consistent images per property ID
  const seed = id || Math.floor(Math.random() * 1000);
  
  // Different image services to choose from
  const imageServices = [
    // Unsplash source with specific categories
    () => {
      const category = PROPERTY_CATEGORIES[seed % PROPERTY_CATEGORIES.length];
      return `https://source.unsplash.com/${width}x${height}/?${category}&sig=${seed}`;
    },
    
    // Lorem Picsum (consistent based on id)
    () => `https://picsum.photos/seed/${seed}/${width}/${height}`,
    
    // Placeholder.com with property-like colors
    () => {
      const colors = ['E8ECEF/213B59', '9FBCCF/436280', 'D1D5DB/1F2937', 'E5E7EB/111827'];
      const colorPair = colors[seed % colors.length];
      return `https://via.placeholder.com/${width}x${height}/${colorPair}?text=Property+${id}`;
    }
  ];

  // Select a service based on ID to ensure consistency
  const serviceIndex = seed % imageServices.length;
  return imageServices[serviceIndex]();
};

/**
 * Get property image URL from property data
 * 
 * @param {string} imagePath - Image path from property data
 * @param {number} id - Property ID for fallback image generation
 * @param {number} width - Width of the image
 * @param {number} height - Height of the image
 * @returns {string} Property image URL
 */
export const getPropertyImageUrl = (
  imagePath: string, 
  id: number, 
  width: number = 640, 
  height: number = 480
): string => {
  // Check if the image path is a full URL
  if (imagePath?.startsWith('http')) {
    return imagePath;
  }
  
  // Check if the image is a local file
  if (imagePath && typeof window !== 'undefined') {
    try {
      return new URL(`/images/${imagePath}`, window.location.origin).toString();
    } catch (error) {
      console.error('Error creating image URL:', error);
    }
  }
  
  // Fallback to random property image
  return getRandomPropertyImage(width, height, id);
}; 