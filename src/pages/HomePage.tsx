// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../blogPosts'; // Import the function
import { Post } from '../types'; // Import the type

const HomePage: React.FC = () => {
  const posts: Post[] = getAllPosts();

  return (
    <div className="space-y-12">
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
        The Bright Side Blog
      </h1>
      <div className="space-y-8">
        {posts.map(post => (
          <article key={post.slug} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-2">
              <Link to={`/post/${post.slug}`} className="text-sky-600 hover:text-sky-800 transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 mb-3">Posted on {post.date}</p>
            <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
            <Link to={`/post/${post.slug}`} className="inline-block mt-4 text-sky-500 hover:text-sky-700 font-semibold transition-colors">
              Read more &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
