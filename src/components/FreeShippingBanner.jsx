export default function FreeShippingBanner() {
  return (
    <section className="promo-banner">
      {/* Background Pattern */}
      <div className="promo-pattern" />

      <div className="promo-content">
        <p className="promo-label">Limited Time Offer</p>
        
        <h2 className="promo-title">
          Free shipping on<br />
          <span className="promo-highlight">every order</span> over $150
        </h2>

        <p className="promo-description">
          No code needed. Just add to cart and watch the magic happen.
        </p>

        <a 
          href="/shop" 
          className="promo-cta-button"
        >
          Shop Now
          <span className="promo-arrow">→</span>
        </a>
      </div>
    </section>
  );
}