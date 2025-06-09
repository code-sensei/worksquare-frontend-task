import React from 'react';

/**
 * Interface for Pagination props
 */
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/**
 * Pagination component for navigating between pages
 * 
 * @param {PaginationProps} props - Component props
 * @returns {React.ReactElement} The rendered Pagination component
 */
const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: PaginationProps): React.ReactElement => {
  
  /**
   * Generate an array of page numbers to display
   * 
   * @returns {Array<number|string>} Array of page numbers or ellipsis
   */
  const getPageNumbers = (): Array<number | string> => {
    const pages: Array<number | string> = [];
    
    if (totalPages <= 7) {
      // If there are 7 or fewer pages, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      // Calculate start and end of visible pages
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust in case we're at the beginning or end
      if (currentPage <= 3) {
        endPage = 4;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
      }
      
      // Add ellipsis before start page if needed
      if (startPage > 2) {
        pages.push('...');
      }
      
      // Add visible pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      // Add ellipsis after end page if needed
      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      
      // Always show last page
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="flex justify-center my-8">
      <div className="flex space-x-2">
        {/* Previous button */}
        <button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`pagination-btn w-8 h-8 flex items-center justify-center rounded-md border ${
            currentPage === 1 
              ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
              : 'border-gray-300 hover:bg-gray-100'
          }`}
          aria-label="Previous page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Page numbers */}
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            className={`pagination-btn w-8 h-8 flex items-center justify-center rounded-md ${
              page === currentPage
                ? 'active-page'
                : page === '...'
                  ? 'text-gray-500 cursor-default'
                  : 'border border-gray-300 hover:bg-gray-100'
            }`}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}
        
        {/* Next button */}
        <button
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`pagination-btn w-8 h-8 flex items-center justify-center rounded-md border ${
            currentPage === totalPages
              ? 'border-gray-200 text-gray-400 cursor-not-allowed'
              : 'border-gray-300 hover:bg-gray-100'
          }`}
          aria-label="Next page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination; 