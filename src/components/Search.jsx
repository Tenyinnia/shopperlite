import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search({ isVisible, onClose }) {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);

  const handleSearch = () => {
    const query = inputRef.current?.value.trim();

    if (query) {
      navigate(`/shop?search=${encodeURIComponent(query)}`);
      
      if (onClose) onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="search-container">
      <div className="search-content">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search products..."
          className="search-text-input"
          onKeyDown={handleKeyDown}
        />
        
        <button 
          className="search-btn"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}