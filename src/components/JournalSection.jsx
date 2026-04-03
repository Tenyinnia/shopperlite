import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function JournalSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://dummyjson.com/posts?limit=3');
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
  const fashionPlaceholders = [
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&auto=format&fit=crop&q=80", 
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&auto=format&fit=crop&q=80", 
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&auto=format&fit=crop&q=80"  
  ];
  if (loading) {
    return <div className="text-center py-20 text-gray-500">Loading journal posts...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  return (
    <section className="journal-section">
      <div className="journal-container">
        <div className="journal-header">
          <div>
            <p className="journal-subtitle">THE JOURNAL</p>
            <h2 className="journal-title">
              Style stories<br />
              <span className="journal-highlight">&amp; news.</span>
            </h2>
          </div>

          <Link to="/blog" className="all-posts-link">
            All posts 
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true">
                <path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
            </svg>
          </Link>
        </div>

        <div className="journal-grid">
          {posts.map((post, index) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`} 
              className="journal-card"
            >
              <div className="journal-image-wrapper">
                
                <img 
                  src={fashionPlaceholders[index % fashionPlaceholders.length]} 
                  alt={post.title}
                  className="journal-image"
                />
              </div>

              <div className="journal-content">
                <p className="journal-author">AUTHOR #{post.userId}</p>
                <h3 className="journal-post-title">{post.title}</h3>
                <p className="journal-excerpt">
                  {post.body.length > 120 
                    ? post.body.substring(0, 120) + '...' 
                    : post.body}
                </p>

                <div className="journal-read-more">
                  Read article <span className="read-more-arrow">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}