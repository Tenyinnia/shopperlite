import { RotateCcw } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function NoProductsFound() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const hasActiveFilters = searchParams.toString().length > 0;

  const handleClearFilters = () => {
    // Most reliable method - forces full page reload with clean URL
    window.location.href = '/shop';
  };

  return (
    <div className="no-products-found">
      <div className="no-products-icon">
        🔍
      </div>

      <h3 className="no-products-title">No products found</h3>
      
      <p className="no-products-message">
        We couldn't find any products matching your current filters.
      </p>

      <div className="no-products-actions">
        {hasActiveFilters && (
          <button 
            onClick={handleClearFilters}
            className="clear-filters-btn"
          >
            <RotateCcw size={16} />
            Clear all filters
          </button>
        )}
      </div>
    </div>
  );
}