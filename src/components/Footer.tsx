// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} My Awesome Blog. All rights reserved.</p>
        <p className="text-sm text-gray-500 mt-1">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
