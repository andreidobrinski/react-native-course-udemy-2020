import React, { createContext, useState } from 'react';

export default BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog post #${blogPosts.length + 1}` }
    ]);
  };

  const value = {
    data: blogPosts,
    addBlogPost,
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};