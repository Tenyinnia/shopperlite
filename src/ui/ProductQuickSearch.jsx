// SortDropdown.jsx
export default function SortDropdown({ value, onChange }) {
  return (
    <div className="sort-container">
      <select
        id="sort-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="featured">Featured</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="top-rated">Top Rated</option>
      </select>
    </div>
  );
}