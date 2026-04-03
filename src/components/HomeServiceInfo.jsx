export default function HomeServiceInfo() {
  return (
    <section className="service-info-section">
      <div className="service-info-container">
        
        {/* Free Delivery */}
        <div className="service-card">
          <div className="service-icon-wrapper">
            <div className="service-icon truck">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                <path d="M15 18H9"></path>
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                <circle cx="17" cy="18" r="2"></circle>
                <circle cx="7" cy="18" r="2"></circle>
              </svg>
            </div>
          </div>
          <div className="service-text">
            <p className="service-title">Free Delivery</p>
            <p className="service-subtitle">On all orders over $150</p>
          </div>
        </div>

        {/* 30-Day Returns */}
        <div className="service-card">
          <div className="service-icon-wrapper">
            <div className="service-icon back">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
            </div>
          </div>
          <div className="service-text">
            <p className="service-title">30-Day Returns</p>
            <p className="service-subtitle">No questions asked policy</p>
          </div>
        </div>

        {/* Secure Checkout */}
        <div className="service-card">
          <div className="service-icon-wrapper">
            <div className="service-icon badge">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
            </div>
          </div>
          <div className="service-text">
            <p className="service-title">Secure Checkout</p>
            <p className="service-subtitle">SSL encrypted & PCI compliant</p>
          </div>
        </div>

      </div>
    </section>
  );
}