// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import BlogPostPage from './pages/BlogPostPage'; // Ensure this is the correct path
import './index.css'; // Tailwind CSS

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          {/* Changed :postId to :postSlug to match usage */}
          <Route path="post/:postSlug" element={<BlogPostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
