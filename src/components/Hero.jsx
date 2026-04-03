import AnimatedCounter from './AnimatedHeroCounter';
import ExploreProducts from '../ui/ExploreLink';
import Marquee from './Marquee';

export default function HeroSection() {
  return (
    <section className="hero-section">

      {/* Background Image */}
      <div className="hero-bg">
        <img 
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=2000&auto=format&fit=crop&q=85" 
          alt="Fashion lifestyle"
          className="hero-image"
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <p className="new-season-label">-  NEW SEASON ARRIVALS</p>

        <h1 className="hero-main-title">
          Dress the<br />
          <span className="hero-highlight">life</span><br />
          you want.
        </h1>

        <p className="hero-description">
          Curated fashion, footwear and electronics all in one place. 
          Free shipping on orders over $150.
        </p>

        <div className="hero-cta-buttons">
          <ExploreProducts />
        </div>
      </div>

      {/* Stats Bar */}
      <div className="hero-stats-bar">
        <div className="stats-grid">
          <div className="stat-item">
            <AnimatedCounter end={194} suffix="+" start={50} />
            <div className="stat-label">Products</div>
          </div>
          <div className="stat-item">
            <AnimatedCounter end={48000} suffix="+" start={27800} />
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-item">
            <AnimatedCounter end={20} start={5} />
            <div className="stat-label">Categories</div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="hero-marquee">
        <Marquee />
      </div>

    </section>
  );
}