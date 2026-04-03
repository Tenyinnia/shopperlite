import { useState, useEffect } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true); // start fade animation

      setTimeout(() => {
        setIsLoading(false); // remove preloader
      }, 600);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`preloader ${fade ? "fade-out" : ""}`}>
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