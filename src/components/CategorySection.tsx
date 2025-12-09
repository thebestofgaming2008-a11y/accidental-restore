import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Shirt, Package } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

const categories = [
  {
    name: 'Books',
    description: 'Authentic Islamic books on Aqeedah, Tafsir, Hadith, Fiqh, Seerah & more',
    icon: BookOpen,
    link: '/shop?category=Books',
    gradient: 'from-amber-500/20 to-amber-600/20',
    featured: true
  },
  {
    name: 'Clothing',
    description: 'Traditional Islamic attire: Khimars, Thobes, Niqabs & Abayas',
    icon: Shirt,
    link: '/shop?category=Clothing',
    gradient: 'from-emerald-500/20 to-emerald-600/20'
  },
  {
    name: 'Essentials',
    description: 'Pure Honey, Saffron, Attars, Miswak & daily essentials',
    icon: Package,
    link: '/shop?category=Honey',
    gradient: 'from-yellow-500/20 to-yellow-600/20'
  }
];

const bookSubjects = [
  { name: 'Aqeedah', description: 'Islamic Creed & Theology', link: '/shop?search=aqeedah' },
  { name: 'Fiqh', description: 'Islamic Jurisprudence', link: '/shop?search=fiqh' },
  { name: 'Tafsir', description: 'Quranic Exegesis', link: '/shop?search=tafsir' },
  { name: 'Hadith', description: 'Prophetic Traditions', link: '/shop?search=hadith' },
  { name: 'Seerah', description: 'Life of the Prophet ﷺ', link: '/shop?search=seerah' },
  { name: 'Tawheed', description: 'Monotheism & Oneness of Allah', link: '/shop?search=tawheed' },
  { name: 'Women', description: 'For Muslim Women', link: '/shop?search=women' },
  { name: 'Children', description: 'For Young Muslims', link: '/shop?search=children' },
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleSubjectClick = (link: string) => {
    navigate(link);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="container mx-auto px-4 py-12 animate-fade-in">
      <h2 className="font-philosopher text-2xl md:text-3xl font-bold text-center mb-8">
        Shop by Category
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.link}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`group relative bg-card rounded-xl p-6 text-center border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 ${
              category.featured ? 'md:row-span-1' : ''
            }`}
          >
            <div className={`${category.featured ? 'w-20 h-20' : 'w-16 h-16'} mx-auto rounded-full bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <category.icon className={`${category.featured ? 'w-10 h-10' : 'w-7 h-7'} text-foreground`} />
            </div>
            <h3 className="font-philosopher font-semibold text-lg mb-2">{category.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
          </Link>
        ))}
      </div>

      {/* Book Subjects Carousel */}
      <div className="mt-10">
        <h3 className="font-philosopher text-xl font-semibold text-center mb-6">
          Browse Books by Subject
        </h3>
        <div className="max-w-4xl mx-auto px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {bookSubjects.map((subject) => (
                <CarouselItem key={subject.name} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4">
                  <Button
                    variant="outline"
                    onClick={() => handleSubjectClick(subject.link)}
                    className="w-full h-auto py-4 px-3 flex flex-col items-center gap-1 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  >
                    <span className="font-philosopher font-semibold text-sm">{subject.name}</span>
                    <span className="text-xs text-muted-foreground group-hover:text-primary-foreground/80">{subject.description}</span>
                  </Button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
