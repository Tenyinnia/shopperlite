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
          className={`rating-star ${
            star <= fullStars 
              ? 'rated'   
              : 'unrated'                     
          }`}
        />
      ))}
      
     
      <span className="ml-2 text-sm text-gray-600 font-medium">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}