import { Star } from 'lucide-react';

export default function StarRating({ rating = 0, size = 14 }) {

  const roundedRating = Math.round(rating * 2) / 2;   
  const fullStars = Math.floor(roundedRating);

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={`transition-colors ${
            star <= fullStars 
              ? 'fill-yellow-400 text-yellow-400'   
              : 'text-gray-300'                     
          }`}
        />
      ))}
      
     
      <span className="ml-2 text-sm text-gray-600 font-medium">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}