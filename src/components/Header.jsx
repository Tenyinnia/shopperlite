import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '../ui/SearchIcon';
import { useCart } from '../context/CartContext';

export default function SmartHeader() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // ← New state

  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);

      const advert = document.querySelector('.app-advert');
      if (advert) {
        document.documentElement.style.setProperty('--advert-height', `${advert.offsetHeight}px`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isAdvertHidden = scrollDirection === 'down';

  // Close mobile menu when route changes or search opens
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [showSearch]);

  return (
    <>
      <div className={`app-advert ${isAdvertHidden ? 'hidden' : ''}`}>
        <p>Free shipping on orders over $150 · Easy 30-day returns</p>
      </div>

      <nav className={`nav-container ${isAdvertHidden ? 'at-top' : ''}`}>
        <div className="nav-content">
          <div className="nav-text">
            <Link to="/" className="company-logo">ShopperLite</Link>
            
            {/* Desktop Navigation */}
            <ol className="desktop-nav">
              <li><Link to='/shop' className="nav-link">Shop</Link></li>
              <li><Link to='/blog' className="nav-link">Post</Link></li>                
            </ol>
          </div>

          <div className="nav-icons">
            <SearchIcon 
              isOpen={showSearch} 
              onClick={() => setShowSearch(!showSearch)} 
            />

            <Link to="/cart" className="shoppingbag-cart-link">
              <ShoppingBag size={20} strokeWidth={2} />
              {cartCount > 0 && (
                <span className="cart">{cartCount}</span>
              )}
            </Link>

            {/* Hamburger Button - Visible on mobile */}
            <button 
              className="hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <Link to="/shop" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Shop
            </Link>
            <Link to="/blog" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Post
            </Link>
          </div>
        )}

        <Search isVisible={showSearch} />
      </nav>
    </>
  );
}