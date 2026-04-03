import { Link } from 'react-router-dom';

export default function BlogPostCard({ post }) {
  // Truncate body for excerpt
  const excerpt = post.body.length > 200 
    ? post.body.substring(0, 200) + '...' 
    : post.body;

  return (
    <>
    <Link 
        to={`/blog/${post.id}`}
        className="view-more-link"
    >
        <div className="post-content">
        <h2>{post.title}</h2>
        <p>{excerpt}</p>
        
            Read more →
        </div>
    </Link>
    </>
  );
}