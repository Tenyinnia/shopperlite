import {CapitalizeCategory} from './Capitalized.jsx'
export default function SideBar({
  categories,
  selectedCategory,
  onCategoryChange
}) {
  return (
    <div style={{display:'flex', flexDirection:'column', textAlign:'left'}} className="sidebar-content">
      <p style={{ margin: '0 0 1rem', fontSize: '.90rem', fontWeight: '500' }}>
        {selectedCategory === 'All' ? 'All Products' : `${CapitalizeCategory(selectedCategory)}`}
      </p>

      <p style={{ color: 'var(--color-secondary-300)', margin:'0 0 1rem', fontSize: '.78rem'}}>
        CATEGORY
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection:'column',
          gap:'.75rem',
          textAlign:'left',
        }}
      >
        
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className="CategorySelectButton"
            style={{
              display: 'flex',
              flexDirection:'column',
              textAlign:'left',
              padding: '0.65rem 1.4rem',
              borderRadius: '5px',
              border:'none',
              background: selectedCategory === cat ? '#333' : 'transparent',
              color: selectedCategory === cat ? 'white' : '#333',
              cursor: 'pointer',
              fontWeight: selectedCategory === cat ? '600' : 'normal',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {CapitalizeCategory(cat)}
            
          </button>
        ))}
      </div>
    </div>
  );
}