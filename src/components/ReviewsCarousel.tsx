import { Link } from 'react-router-dom';
import { Star, ArrowRight, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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
];

const ReviewsCarousel = () => {
  return (
    <section className="py-12 md:py-16 bg-card animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Star className="w-6 h-6 text-primary fill-primary" />
            </div>
            <div>
              <h2 className="font-philosopher text-2xl md:text-3xl font-bold text-foreground">
                Customer Reviews
              </h2>
              <p className="text-muted-foreground text-sm">
                What our customers say about us
              </p>
            </div>
          </div>
          <Button asChild variant="default" className="hidden sm:flex gap-2 font-philosopher bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="https://www.instagram.com/abuhurayrahessentials" target="_blank" rel="noopener noreferrer">
              <Instagram size={16} />
              See More
            </a>
          </Button>
        </div>

        <div className="max-w-5xl mx-auto px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-muted/50 rounded-xl p-5 h-full border border-border hover:border-primary/30 transition-colors">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-sm text-foreground mb-4 line-clamp-4">
                      "{review.text}"
                    </p>
                    
                    {/* Reviewer Info */}
                    <div className="mt-auto">
                      <p className="font-semibold text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">Purchased: {review.product}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button asChild className="font-philosopher bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="https://www.instagram.com/abuhurayrahessentials" target="_blank" rel="noopener noreferrer">
              <Instagram size={16} className="mr-2" />
              See More Reviews
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
