// src/App.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-8">
        <Outlet /> {/* Child routes will render here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
