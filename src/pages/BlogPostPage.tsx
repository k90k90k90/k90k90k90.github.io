// src/pages/BlogPostPage.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '../blogPosts'; // Import the function
import { Post } from '../types'; // Import the type

const BlogPostPage: React.FC = () => {
  const { postSlug } = useParams<{ postSlug: string }>(); // Changed from postId to postSlug
  const post: Post | undefined = postSlug ? getPostBySlug(postSlug) : undefined;

  if (!post) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold">Post not found!</h2>
        <p className="mt-4">
          <Link to="/" className="text-sky-600 hover:text-sky-800 font-semibold transition-colors">
            &larr; Back to Home
          </Link>
        </p>
      </div>
    );
  }

  return (
    <article className="bg-white p-6 sm:p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">Posted on {post.date}</p>
      {/* Ensure Tailwind Typography plugin is active for 'prose' styling */}
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {/* This assumes post.content is pre-formatted HTML or Markdown that prose can style.
            For simple string content with newlines, you might need to process it.
            If content is plain text with newlines, splitting into paragraphs is better:
        */}
        {post.content.trim().split('\n\n').map((paragraph, index) => (
          paragraph.startsWith('## ') ? <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{paragraph.substring(3)}</h2> :
          paragraph.startsWith('### ') ? <h3 key={index} className="text-xl font-bold mt-5 mb-2">{paragraph.substring(4)}</h3> :
          <p key={index} className="mb-4">{paragraph.split('\n').map((line, i) => <React.Fragment key={i}>{line.trim()}<br/></React.Fragment>)}</p>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-gray-200">
        <Link to="/" className="text-sky-600 hover:text-sky-800 font-semibold transition-colors">
          &larr; Back to Home
        </Link>
      </div>
    </article>
  );
};

export default BlogPostPage;
