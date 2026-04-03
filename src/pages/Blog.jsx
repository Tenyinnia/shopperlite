import { useState, useEffect } from 'react';
import BlogSearch from '../components/blog/BlogSearch';
import BlogPostCard from '../components/blog/BlogPostCard';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://dummyjson.com/posts?limit=30');
        const data = await res.json();
        setPosts(data.posts); 
      } catch (err) {
        setError('Failed to load blog posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts based on search
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="post-container">
      <div className="post-wrapper">
        <div className="blog-title">
          <h2>Blog</h2>
          <p>Style tips, product news & more</p>
        </div>
        <BlogSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="mt-10 space-y-8">
          {loading && <p className="text-center py-10">Loading posts...</p>}
          
          {error && <p className="text-red-500 text-center py-10">{error}</p>}

          {!loading && !error && filteredPosts.length === 0 && (
            
            <p className="no-post-found">No posts found.</p>
          )}

          {filteredPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}