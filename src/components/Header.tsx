// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-sky-400 to-blue-500 text-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-sky-200 transition-colors">
          My Awesome Blog
        </Link>
        {/* Future navigation links can go here, perhaps styled as buttons or links */}
        {/* <div className="space-x-4">
          <Link to="/about" className="hover:text-sky-200">About</Link>
          <Link to="/contact" className="hover:text-sky-200">Contact</Link>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
