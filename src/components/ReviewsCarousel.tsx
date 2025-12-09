import { Link } from 'react-router-dom';
import { Star, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

const reviews = [
  {
    id: 1,
    name: 'Ahmed K.',
    rating: 5,
    text: 'Excellent quality books! The Tafsir Ibn Kathir set is beautifully printed and bound. Fast shipping to my location.',
    product: 'Tafsir Ibn Kathir',
  },
  {
    id: 2,
    name: 'Fatima S.',
    rating: 5,
    text: 'The honey is pure and delicious. My family loves it! Will definitely order again. جزاكم الله خيرا',
    product: 'Pure Sidr Honey',
  },
  {
    id: 3,
    name: 'Mohammed A.',
    rating: 5,
    text: 'Great selection of authentic Islamic books. The packaging was excellent and books arrived in perfect condition.',
    product: 'Sahih Bukhari Set',
  },
  {
    id: 4,
    name: 'Khadija M.',
    rating: 5,
    text: 'Beautiful khimars! The quality exceeded my expectations. The colors are exactly as shown in the pictures.',
    product: 'Premium Khimar',
  },
  {
    id: 5,
    name: 'Yusuf H.',
    rating: 5,
    text: 'The saffron is authentic and aromatic. Best quality I have found online. Highly recommend this store!',
    product: 'Kashmiri Saffron',
  },
  {
    id: 6,
    name: 'Aisha R.',
    rating: 5,
    text: 'Mashallah, the books are exactly what I was looking for. Authentic content with beautiful binding.',
    product: 'Riyad us Saliheen',
  },
];

const ReviewsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const scroll = () => {
      scrollPosition += speed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      scrollPosition = scrollContainer.scrollLeft;
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-6 bg-card/50">
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-card/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-card/50 to-transparent z-10 pointer-events-none" />
        
        {/* Auto-scrolling container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden px-4 scrollbar-hide"
          style={{ scrollBehavior: 'auto' }}
        >
          {/* Duplicate reviews for infinite scroll effect */}
          {[...reviews, ...reviews].map((review, index) => (
            <div 
              key={`${review.id}-${index}`}
              className="flex-shrink-0 w-72 bg-card rounded-xl p-4 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={12} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-sm text-foreground mb-3 line-clamp-3">
                "{review.text}"
              </p>
              
              {/* Reviewer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-xs">{review.name}</p>
                  <p className="text-[10px] text-muted-foreground">{review.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* See More Button */}
      <div className="mt-4 text-center">
        <Button asChild variant="outline" size="sm" className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
          <a href="https://www.instagram.com/abuhurayrahessentials" target="_blank" rel="noopener noreferrer">
            <Instagram size={14} />
            See More
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ReviewsCarousel;