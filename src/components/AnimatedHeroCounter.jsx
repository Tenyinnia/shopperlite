// components/AnimatedCounter.jsx
import { useState, useEffect } from 'react';

export default function AnimatedCounter({ 
  end, 
  start = 0, 
  duration = 1000, 
  suffix = "" 
}) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = null;
    const startValue = start;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const eased = 1 - Math.pow(1 - progress, 3);
      
      const current = Math.floor(startValue + (end - startValue) * eased);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure it ends exactly at target
      }
    };

    requestAnimationFrame(animate);
  }, [end, start, duration]);

  return (
    <span className="stat-number">
      {count.toLocaleString()}{suffix}
    </span>
  );
}