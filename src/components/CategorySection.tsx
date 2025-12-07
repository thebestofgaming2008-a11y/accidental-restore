import { Link } from 'react-router-dom';
import { BookOpen, Shirt, Droplet, Sparkles } from 'lucide-react';

const categories = [
  {
    name: 'Books',
    description: 'Aqeedah, Tafsir, Hadith & more',
    icon: BookOpen,
    link: '/shop?category=Books',
    gradient: 'from-amber-500/20 to-amber-600/20'
  },
  {
    name: 'Clothing',
    description: 'Khimars, Thobes, Niqabs',
    icon: Shirt,
    link: '/shop?category=Clothing',
    gradient: 'from-emerald-500/20 to-emerald-600/20'
  },
  {
    name: 'Honey',
    description: 'Pure & Natural Honey',
    icon: Droplet,
    link: '/shop?category=Honey',
    gradient: 'from-yellow-500/20 to-yellow-600/20'
  },
  {
    name: 'Saffron & Attars',
    description: 'Premium Quality',
    icon: Sparkles,
    link: '/shop?category=Saffron',
    gradient: 'from-purple-500/20 to-purple-600/20'
  }
];

const CategorySection = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="font-philosopher text-2xl md:text-3xl font-bold text-center mb-8">
        Shop by Category
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.link}
            className="group relative bg-card rounded-xl p-6 text-center border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <category.icon className="w-7 h-7 text-foreground" />
            </div>
            <h3 className="font-philosopher font-semibold text-lg mb-1">{category.name}</h3>
            <p className="text-xs text-muted-foreground">{category.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
