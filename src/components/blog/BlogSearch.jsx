import { Search } from 'lucide-react';

export default function BlogSearch({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-blog-container">
      {/* Search Icon */}
      <div className="search-icon-placeholder">
        <Search size={16} strokeWidth={2} />
      </div>

      <input
        type="text"
        placeholder="Search posts..."   // You can keep or remove this
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="blog-search-input"
      />
    </div>
  );
}
