import React from 'react';

/**
 * Newsletter component for email subscription
 * 
 * @returns {React.ReactElement} The rendered Newsletter component
 */
const Newsletter = (): React.ReactElement => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-yellow-100 opacity-60 -ml-10 -mb-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-blue-500 text-white rounded-3xl max-w-6xl mx-auto px-12 py-16 flex flex-col md:flex-row md:items-center">
          {/* Left section - Heading and text */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sign up for<br />
              our Newsletter
            </h2>
            <p className="text-sm opacity-90 max-w-md">
              Stay informed about our latest properties at
              DreamDwell Estates by subscribing to regular updates
              directly to your inbox.
            </p>
          </div>
          
          {/* Right section - Form */}
          <div className="md:w-1/2 flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-6 py-4 rounded-full text-gray-600 focus:outline-none border border-transparent focus:border-blue-200 bg-blue-50/90 text-base"
            />
            <button className="w-full md:w-max md:self-end mt-2 bg-white text-blue-500 hover:bg-blue-50 px-10 py-4 rounded-full font-medium transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 