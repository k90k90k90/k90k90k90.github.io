// src/blogPosts.ts
import { Post } from './types';

export const posts: Post[] = [
  {
    id: '1',
    slug: 'my-first-post',
    title: 'My First Actual Post!',
    date: '2023-11-01',
    excerpt: 'This is the first real blog post using our new React and Tailwind setup. It feels great!',
    content: `
      ## Welcome to My First Real Post!

      After setting up the structure with React, TypeScript, Vite, and Tailwind CSS, it's time to write some actual content.
      This blog is shaping up nicely. The styling is clean, and the development experience with Vite is super fast.

      ### What's Next?
      - More posts, of course!
      - Perhaps some more advanced features.
      - Continuous improvement of the design.

      Stay tuned for more updates on this journey.
    `,
  },
  {
    id: '2',
    slug: 'exploring-tailwind-css',
    title: 'Exploring the Power of Tailwind CSS',
    date: '2023-11-03',
    excerpt: 'A deeper dive into why Tailwind CSS is a great choice for utility-first styling and rapid UI development.',
    content: `
      ## Why Tailwind CSS Rocks

      Tailwind CSS has been a joy to work with on this project. Its utility-first approach means I can build custom designs without writing custom CSS files for every component.

      ### Key Advantages:
      *   **Rapid Prototyping:** Quickly mock up UIs.
      *   **Consistency:** Design tokens ensure consistency.
      *   **Performance:** Only generates the CSS you actually use when purging.
      *   **No Naming Conventions:** Avoids debates about BEM or other CSS naming schemes.

      While there's a learning curve to remember the utility classes, the productivity gains are significant once you get the hang of it. The \`@tailwindcss/typography\` plugin is also fantastic for styling Markdown-like content, which we're using here.
    `,
  },
  {
    id: '3',
    slug: 'react-router-for-spa',
    title: 'Client-Side Routing with React Router',
    date: '2023-11-05',
    excerpt: 'How React Router helps in creating a seamless single-page application (SPA) experience.',
    content: `
      ## Seamless Navigation with React Router

      For any Single Page Application (SPA), client-side routing is essential. We've integrated \`react-router-dom\` to handle navigation between our blog's home page and individual posts.

      ### Core Concepts Used:
      *   \`<BrowserRouter>\`: Wraps the application to enable routing.
      *   \`<Routes>\` and \`<Route>\`: Define the URL paths and the components they render.
      *   \`<Link>\`: For declarative navigation, avoiding full page reloads.
      *   \`useParams\`: To access URL parameters, like the \`postId\` (or \`slug\` in our case).
      *   \`<Outlet>\`: Used in our main \`App.tsx\` to render the matched child route.

      This setup allows for a fast and smooth user experience, as only the necessary components are re-rendered when navigating.
    `,
  },
];

// Function to get all posts (could be extended for sorting, filtering)
export const getAllPosts = (): Post[] => {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date descending
};

// Function to get a post by its slug
export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};
