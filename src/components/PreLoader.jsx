import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Preloader() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    
    setIsVisible(true);
    setFade(false);

    
    const timer = setTimeout(() => {
      setFade(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 500); 
    }, 600); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isVisible) return null;

  return (
    <div className={`preloader ${fade ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="loader-container">
          <div className="loader-ring"></div>
          <div className="loader-letter">S</div>
        </div>
        <p className="preloader-text">ShopperLite</p>
      </div>
    </div>
  );
}