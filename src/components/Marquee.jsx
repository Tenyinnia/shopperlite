export default function Marquee() {
  const items = [
    "FREE SHIPPING $150+",
    "CURATED STYLE",
    "NEW ARRIVALS",
    "FREE RETURNS",
    "SECURE CHECKOUT",
    "NEW ARRIVALS",
    "CURATED STYLE",
    "FREE SHIPPING $150+"
  ];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="marquee-item">
            <li>{item}</li>
          </span>
        ))}
      </div>
    </div>
  );
}