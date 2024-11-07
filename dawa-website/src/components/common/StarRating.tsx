import { useEffect, useRef } from 'react';
import 'rater-js/rater-js.css';

interface StarRatingProps {
  initialRating?: number;
  maxRating?: number;
  onRate?: (rating: number) => void;
  starSize?: number;
  className?: string;
}

interface RaterOptions {
  element: HTMLElement;
  max: number;
  step: number;
  rating: number;
  starSize: number;
  readOnly: boolean;
  onRate: (rating: number) => void;
  rateCallback: (rating: number, done: (rating: number) => void) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  initialRating = 0,
  maxRating = 5,
  onRate,
  starSize = 24,
  className = '',
}) => {
  const ratingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import('rater-js').then((module) => {
      const createRater = module.default as (options: RaterOptions) => void;

      if (ratingRef.current) {
        createRater({
          element: ratingRef.current,
          max: maxRating,
          step: 1,
          rating: initialRating,
          starSize: starSize,
          readOnly: false,
          onRate: (rating: number) => {
            if (onRate) onRate(rating);
          },
          rateCallback: (rating, done) => {
            done(rating);
            // Apply selected and unselected colors based on rating
            const stars = ratingRef.current?.querySelectorAll<HTMLElement>('i');
            stars?.forEach((star, index) => {
              star.style.color = index < rating ? '#FFA200' : '#D8D8D8';
            });
          },
        });
      }
    });
  }, [initialRating, maxRating, onRate, starSize]);

  return <div ref={ratingRef} className={className} />;
};

export default StarRating;
