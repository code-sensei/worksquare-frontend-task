import React from 'react';
import Link from 'next/link';

/**
 * Footer component for the website
 * 
 * @returns {React.ReactElement} The rendered Footer component
 */
const Footer = (): React.ReactElement => {
  return (
    <footer className="bg-blue-500 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">DreamDwell</h2>
          <p className="text-2xl md:text-3xl font-light">Estates</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-4">Home</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/listing" className="hover:underline">
                  Listing
                </Link>
              </li>
              <li>
                <Link href="/agent" className="hover:underline">
                  Agent
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-4">Whitepaper</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-400 text-center">
          <p className="text-sm">© Copyright 2025 DreamDwell Estates - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 