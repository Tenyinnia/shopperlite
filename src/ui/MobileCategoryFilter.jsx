// src/components/MobileCategoryFilter.jsx

import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { CapitalizeCategory } from '../components/Capitalized.jsx';

export default function FilterDropdown({
  categories,
  selectedCategory,
  onCategoryChange
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (cat) => {
    onCategoryChange(cat);
    setIsOpen(false); // Close after selection
  };

  return (
    <div className="mobile-category-filter">
      <button 
        className="mobile-filter-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Filter size={18} />
        <span className="filter-text">
          {selectedCategory === 'All' 
            ? 'All Categories' 
            : CapitalizeCategory(selectedCategory)}
        </span>
        {isOpen ? <X size={18} /> : <span className="arrow">▼</span>}
      </button>

      {isOpen && (
        <div className="mobile-filter-dropdown">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleSelect(cat)}
              className={`mobile-filter-option ${selectedCategory === cat ? 'active' : ''}`}
            >
              {CapitalizeCategory(cat)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}