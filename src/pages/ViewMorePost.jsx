import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ViewMorePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/posts/${id}`);
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error("Failed to fetch post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Post not found</p>
      </div>
    );
  }

  return (
    <div className="view-more-container">

        <div className="max-w-3xl mx-auto px-6 py-10">
       
            <Link 
            to="/blog" 
            className="back-buttons"
            >
            <ArrowLeft size={18} />
            Back to blog
            </Link>
        </div>
        {/* Blog Title */}
        <h1>
          {post.title}
        </h1>

        {/* Blog Content */}
        <div>
          <p>{post.body}</p>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((index) => (
              <span 
                key={index}
                className="px-4 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-full"
              >
              </span>
            ))}
          </div>
        )}
    </div>
  );
}