export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  badge?: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const categories = [
  "All",
  "Aqeedah",
  "Tafsir",
  "Hadith",
  "Fiqh",
  "Seerah",
  "Books",
  "Combos",
  "Clothing",
  "Honey",
  "Saffron",
  "Attars"
];

export const products: Product[] = [
  // AQEEDAH (6 products)
  {
    id: "usool-as-sunnah",
    name: "Usool as-Sunnah",
    price: 349,
    category: "Aqeedah",
    description: "Available in Urdu and English prints. A comprehensive guide to the foundations of the Sunnah by Imam Ahmad ibn Hanbal.",
    image: "/images/books/usool-as-sunnah/1.jpg",
    badge: "Bestseller",
    inStock: true,
    rating: 5.0,
    reviews: 12
  },
  {
    id: "foundation-of-sunnah",
    name: "Foundation of the Sunnah",
    price: 425,
    category: "Aqeedah",
    description: "Restocked in bulk. Essential reading on the principles and foundations of Ahlus Sunnah wal Jama'ah.",
    image: "/images/books/foundation-of-sunnah/1.jpg",
    badge: "Restocked",
    inStock: true,
    rating: 5.0,
    reviews: 8
  },
  {
    id: "kitab-at-tawhid",
    name: "Kitab at-Tawhid",
    price: 450,
    category: "Aqeedah",
    description: "The Book of Monotheism by Shaykh Muhammad ibn Abdul Wahhab.",
    image: "/images/books/kitab-at-tawhid/1.jpg",
    badge: "Popular",
    inStock: true,
    rating: 5.0,
    reviews: 15
  },
  {
    id: "sharh-aqeedah-wasitiyyah",
    name: "Sharh of Aqeedah al-Wasitiyyah",
    price: 549,
    category: "Aqeedah",
    description: "Detailed explanation of the Wasitiyyah Creed by Shaykh al-Islam Ibn Taymiyyah.",
    image: "/images/books/sharh-aqeedah-wasitiyyah/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 6
  },
  {
    id: "justice-of-companions",
    name: "Justice of the Companions",
    price: 200,
    category: "Aqeedah",
    description: "Affirming the justice of the noble Companions of the Prophet ﷺ.",
    image: "/images/books/justice-of-companions/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 4
  },
  {
    id: "be-salafi",
    name: "Be Salafi on Straight Path",
    price: 160,
    category: "Aqeedah",
    description: "Proofread by Shaykh Al-Fawzan. A guide to following the way of the Salaf us-Salih.",
    image: "/images/books/be-salafi/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 9
  },

  // TAFSIR (3 products)
  {
    id: "tafsir-as-sadi",
    name: "Tafsir As-Sa'di",
    price: 2999,
    category: "Tafsir",
    description: "10 volumes beginner-friendly. Complete Tafsir by Shaykh Abdur-Rahman as-Sa'di, explaining the Quran in a clear manner.",
    image: "/images/books/tafsir-as-sadi/1.jpg",
    badge: "Premium",
    inStock: true,
    rating: 5.0,
    reviews: 22
  },
  {
    id: "tafseer-ahsan-ul-bayan",
    name: "Tafseer Ahsan ul Bayan",
    price: 1499,
    category: "Tafsir",
    description: "Last piece, premium quality. Beautiful explanation of the Quran with concise and beneficial commentary.",
    image: "/images/books/tafseer-ahsan-ul-bayan/1.jpg",
    badge: "Last One",
    inStock: true,
    rating: 5.0,
    reviews: 18
  },
  {
    id: "tafseer-ibn-kathir",
    name: "Tafseer Ibn Kathir",
    price: 3499,
    category: "Tafsir",
    description: "10 volumes comprehensive. The renowned Tafsir by Imam Ibn Kathir, one of the most authentic explanations.",
    image: "/images/books/tafseer-ibn-kathir/1.jpg",
    badge: "Classic",
    inStock: true,
    rating: 5.0,
    reviews: 25
  },

  // HADITH (5 products)
  {
    id: "sahih-bukhari",
    name: "Sahih al-Bukhari",
    price: 2200,
    category: "Hadith",
    description: "9 volumes top quality. The most authentic collection of Hadith compiled by Imam Bukhari.",
    image: "/images/books/sahih-bukhari/1.jpg",
    badge: "Essential",
    inStock: true,
    rating: 5.0,
    reviews: 35
  },
  {
    id: "summarised-bukhari",
    name: "Summarised Sahih al-Bukhari",
    price: 799,
    category: "Hadith",
    description: "A concise summary of Sahih Bukhari for easier reading.",
    image: "/images/books/summarised-bukhari/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 14
  },
  {
    id: "sahih-muslim",
    name: "Sahih Muslim",
    price: 1899,
    category: "Hadith",
    description: "7 volumes authentic. The second most authentic collection of Hadith by Imam Muslim.",
    image: "/images/books/sahih-muslim/1.jpg",
    badge: "Essential",
    inStock: true,
    rating: 5.0,
    reviews: 28
  },
  {
    id: "summarised-muslim",
    name: "Summarised Sahih Muslim",
    price: 749,
    category: "Hadith",
    description: "2 volumes beginner edition. A concise summary of Sahih Muslim for easier study.",
    image: "/images/books/summarised-muslim/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 11
  },
  {
    id: "riyad-as-saliheen",
    name: "Riyad as-Saliheen",
    price: 649,
    category: "Hadith",
    description: "Urdu print 2 volumes. Gardens of the Righteous - a collection of authentic Hadith by Imam Nawawi.",
    image: "/images/books/riyad-as-saliheen/1.jpg",
    badge: "Popular",
    inStock: true,
    rating: 5.0,
    reviews: 20
  },

  // FIQH (3 products)
  {
    id: "explanation-important-lessons",
    name: "Explanation of Important Lessons",
    price: 450,
    category: "Fiqh",
    description: "Essential lessons for every Muslim by Shaykh Ibn Baz with detailed explanation.",
    image: "/images/books/explanation-important-lessons/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 16
  },
  {
    id: "prayer-description",
    name: "Prophet's Prayer Described",
    price: 375,
    category: "Fiqh",
    description: "Detailed description of how the Prophet ﷺ performed his prayer.",
    image: "/images/books/prayer-description/1.jpg",
    badge: "Essential",
    inStock: true,
    rating: 5.0,
    reviews: 32
  },
  {
    id: "bulugh-al-maram",
    name: "Bulugh al-Maram",
    price: 599,
    category: "Fiqh",
    description: "Attainment of the Objective according to Evidence of the Ordinances.",
    image: "/images/books/bulugh-al-maram/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 9
  },

  // SEERAH (3 products)
  {
    id: "sealed-nectar",
    name: "The Sealed Nectar",
    price: 599,
    category: "Seerah",
    description: "Ar-Raheeq Al-Makhtum - Award-winning biography of Prophet Muhammad ﷺ.",
    image: "/images/books/sealed-nectar/1.jpg",
    badge: "Award Winner",
    inStock: true,
    rating: 5.0,
    reviews: 45
  },
  {
    id: "when-moon-split",
    name: "When the Moon Split",
    price: 449,
    category: "Seerah",
    description: "A biography of Prophet Muhammad ﷺ written in simple language for all ages.",
    image: "/images/books/when-moon-split/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 28
  },
  {
    id: "stories-prophets",
    name: "Stories of the Prophets",
    price: 549,
    category: "Seerah",
    description: "Qasas ul-Anbiya by Ibn Kathir - Stories of all the Prophets mentioned in the Quran.",
    image: "/images/books/stories-prophets/1.jpg",
    badge: "Classic",
    inStock: true,
    rating: 5.0,
    reviews: 33
  },

  // BOOKS (8 products)
  {
    id: "diseases-of-hearts",
    name: "Diseases of the Hearts & Their Cures",
    price: 325,
    category: "Books",
    description: "Understanding and curing spiritual diseases of the heart by Ibn Taymiyyah.",
    image: "/images/books/diseases-of-hearts/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 17
  },
  {
    id: "sincere-counsel",
    name: "Sincere Counsel to Seekers of Knowledge",
    price: 275,
    category: "Books",
    description: "Beneficial advice for every Muslim seeking sacred knowledge.",
    image: "/images/books/sincere-counsel/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 12
  },
  {
    id: "disciplining-soul",
    name: "Disciplining the Soul",
    price: 399,
    category: "Books",
    description: "Methods and ways to discipline and purify the soul by Ibn al-Jawzi.",
    image: "/images/books/disciplining-soul/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 14
  },
  {
    id: "diseases-and-cure",
    name: "The Disease & The Cure",
    price: 449,
    category: "Books",
    description: "Ibn al-Qayyim's masterpiece on spiritual ailments and their remedies.",
    image: "/images/books/diseases-and-cure/1.jpg",
    badge: "Recommended",
    inStock: true,
    rating: 5.0,
    reviews: 21
  },
  {
    id: "masala-takfeer",
    name: "Mas'ala Takfeer",
    price: 500,
    category: "Books",
    description: "Understanding the issue of Takfeer according to Ahlus Sunnah.",
    image: "/images/books/masala-takfeer/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 7
  },
  {
    id: "they-are-enemy",
    name: "They Are The Enemy So Beware",
    price: 150,
    category: "Books",
    description: "Warning against the plots and schemes of the enemies of Islam.",
    image: "/images/books/they-are-enemy/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 5
  },
  {
    id: "great-women",
    name: "Great Women of Islam",
    price: 475,
    category: "Books",
    description: "Stories and lessons from the noble women in Islamic history.",
    image: "/images/books/great-women/1.jpg",
    badge: "For Sisters",
    inStock: true,
    rating: 5.0,
    reviews: 19
  },
  {
    id: "commentary-tawheed",
    name: "Commentary on Kitab at-Tawheed",
    price: 850,
    category: "Books",
    description: "Detailed explanation and commentary on the Book of Monotheism by Ibn Uthaymeen.",
    image: "/images/books/commentary-tawheed/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 11
  },

  // COMBOS (5 products)
  {
    id: "six-books-combo",
    name: "6 Books + 1 Free Combo",
    price: 1499,
    category: "Combos",
    description: "Get 6 essential Islamic books plus 1 free book. Best value for building your library.",
    image: "/images/books/six-books-combo/1.jpg",
    badge: "Best Value",
    inStock: true,
    rating: 5.0,
    reviews: 24
  },
  {
    id: "bukhari-muslim-combo",
    name: "Bukhari + Muslim Combo",
    price: 3999,
    category: "Combos",
    description: "Both Sahih Bukhari and Sahih Muslim in one bundle. Great savings!",
    image: "/images/books/bukhari-muslim-combo/1.jpg",
    badge: "Popular",
    inStock: true,
    rating: 5.0,
    reviews: 18
  },
  {
    id: "beginner-combo",
    name: "Beginner's Combo",
    price: 899,
    category: "Combos",
    description: "Perfect starter pack for those new to studying authentic Islam.",
    image: "/images/books/beginner-combo/1.jpg",
    badge: "For Beginners",
    inStock: true,
    rating: 5.0,
    reviews: 31
  },
  {
    id: "four-books-combo",
    name: "4 Books + 2 Free Combo",
    price: 1299,
    category: "Combos",
    description: "Buy 4 books and get 2 additional books absolutely free.",
    image: "/images/books/four-books-combo/1.jpg",
    badge: "Popular",
    inStock: true,
    rating: 5.0,
    reviews: 27
  },
  {
    id: "sisters-combo",
    name: "3 Sisters Books Combo",
    price: 1099,
    category: "Combos",
    description: "Curated collection of books especially for Muslim sisters.",
    image: "/images/books/sisters-combo/1.jpg",
    badge: "For Sisters",
    inStock: true,
    rating: 5.0,
    reviews: 22
  },

  // CLOTHING (10 products)
  {
    id: "black-khimar",
    name: "Premium Black Khimar",
    price: 849,
    category: "Clothing",
    description: "High-quality black khimar for modest dressing. Comfortable and breathable fabric.",
    image: "/images/books/black-khimar/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 15
  },
  {
    id: "khimar-colors",
    name: "Khimar - Multiple Colors",
    price: 799,
    category: "Clothing",
    description: "Beautiful khimars available in various colors to match your style.",
    image: "/images/books/khimar-colors/1.jpg",
    badge: "New Colors",
    inStock: true,
    rating: 5.0,
    reviews: 12
  },
  {
    id: "round-single-layer",
    name: "Round Single-Layer Khimar",
    price: 699,
    category: "Clothing",
    description: "Comfortable single-layer round khimar for daily wear.",
    image: "/images/books/round-single-layer/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 9
  },
  {
    id: "khadija-niqab",
    name: "Khadija Niqab",
    price: 449,
    category: "Clothing",
    description: "Classic niqab design named after the Mother of Believers.",
    image: "/images/books/khadija-niqab/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 18
  },
  {
    id: "khadija-white",
    name: "Khadija Niqab - White",
    price: 499,
    category: "Clothing",
    description: "Elegant white version of the Khadija niqab for special occasions.",
    image: "/images/books/khadija-white/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 11
  },
  {
    id: "premium-thobes",
    name: "Premium Thobes",
    price: 1299,
    category: "Clothing",
    description: "High-quality thobes for brothers in various sizes and colors.",
    image: "/images/books/premium-thobes/1.jpg",
    badge: "Premium",
    inStock: true,
    rating: 5.0,
    reviews: 14
  },
  {
    id: "emirati-thobe",
    name: "Emirati Style Thobe",
    price: 1599,
    category: "Clothing",
    description: "Elegant Emirati style thobe with collar design.",
    image: "/images/books/emirati-thobe/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 8
  },
  {
    id: "childrens-thobe",
    name: "Children's Thobe",
    price: 699,
    category: "Clothing",
    description: "Comfortable thobes for children in various sizes.",
    image: "/images/books/childrens-thobe/1.jpg",
    badge: "For Kids",
    inStock: true,
    rating: 5.0,
    reviews: 16
  },
  {
    id: "prayer-cap",
    name: "Prayer Caps - Pack of 3",
    price: 299,
    category: "Clothing",
    description: "Comfortable prayer caps in a pack of 3 different colors.",
    image: "/images/books/prayer-cap/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 22
  },
  {
    id: "miswak-set",
    name: "Miswak Set",
    price: 149,
    category: "Clothing",
    description: "Natural miswak sticks in a convenient set.",
    image: "/images/books/miswak-set/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 35
  },

  // HONEY (4 products)
  {
    id: "sidr-honey",
    name: "Pure Sidr Honey",
    price: 1299,
    category: "Honey",
    description: "Premium quality Sidr honey sourced from Yemen. Known for its medicinal properties.",
    image: "/images/books/sidr-honey/1.jpg",
    badge: "Premium",
    inStock: true,
    rating: 5.0,
    reviews: 28
  },
  {
    id: "black-seed-honey",
    name: "Black Seed Honey",
    price: 899,
    category: "Honey",
    description: "Pure honey infused with black seed (Habbatus Sauda) for added benefits.",
    image: "/images/books/black-seed-honey/1.jpg",
    badge: "Popular",
    inStock: true,
    rating: 5.0,
    reviews: 19
  },
  {
    id: "mountain-honey",
    name: "Mountain Honey",
    price: 749,
    category: "Honey",
    description: "Natural mountain honey collected from pristine mountain regions.",
    image: "/images/books/mountain-honey/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 15
  },
  {
    id: "multiflora-honey",
    name: "Multiflora Honey",
    price: 499,
    category: "Honey",
    description: "Pure multiflora honey - a blend of nectars from various flowers.",
    image: "/images/books/multiflora-honey/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 24
  },

  // SAFFRON (2 products)
  {
    id: "kashmiri-saffron",
    name: "Kashmiri Saffron",
    price: 599,
    category: "Saffron",
    description: "Premium Kashmiri saffron - 1 gram pack. Authentic and aromatic.",
    image: "/images/books/kashmiri-saffron/1.jpg",
    badge: "Premium",
    inStock: true,
    rating: 5.0,
    reviews: 12
  },
  {
    id: "spanish-saffron",
    name: "Spanish Saffron",
    price: 449,
    category: "Saffron",
    description: "High-quality Spanish saffron - 0.5 gram pack.",
    image: "/images/books/spanish-saffron/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 8
  },

  // ATTARS (3 products)
  {
    id: "oud-attar",
    name: "Oud Attar",
    price: 799,
    category: "Attars",
    description: "Premium oud attar - long-lasting and captivating fragrance.",
    image: "/images/books/oud-attar/1.jpg",
    badge: "Premium",
    inStock: true,
    rating: 5.0,
    reviews: 18
  },
  {
    id: "musk-attar",
    name: "White Musk Attar",
    price: 449,
    category: "Attars",
    description: "Pure white musk attar with a clean, fresh scent.",
    image: "/images/books/musk-attar/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 22
  },
  {
    id: "rose-attar",
    name: "Rose Attar",
    price: 549,
    category: "Attars",
    description: "Authentic rose attar with a beautiful floral fragrance.",
    image: "/images/books/rose-attar/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 14
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All') return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.badge).slice(0, 8);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    product =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery)
  );
};