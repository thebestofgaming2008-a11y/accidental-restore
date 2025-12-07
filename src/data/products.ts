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
  priceNote?: string;
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
    reviews: 12,
    priceNote: "Contact for Price"
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
    reviews: 8,
    priceNote: "Contact for Price"
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
    reviews: 6,
    priceNote: "Free with 4 books"
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
    reviews: 22,
    priceNote: "Contact for Price"
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
    reviews: 25,
    priceNote: "Contact for Price"
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
    reviews: 14,
    priceNote: "Contact for Price"
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
    reviews: 28,
    priceNote: "Contact for Price"
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
    reviews: 11,
    priceNote: "Contact for Price"
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
    reviews: 20,
    priceNote: "Contact for Price"
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
    description: "Both Sahih Bukhari and Sahih Muslim in one bundle. Save ₹350!",
    image: "/images/books/bukhari-muslim-combo/1.jpg",
    badge: "Save ₹350",
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
    reviews: 21
  },
  {
    id: "premium-kufi",
    name: "Premium Kufi Cap",
    price: 299,
    category: "Clothing",
    description: "Handcrafted kufi caps in traditional designs.",
    image: "/images/books/premium-kufi/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 16
  },
  {
    id: "arabic-caps",
    name: "Arabic Style Caps",
    price: 249,
    category: "Clothing",
    description: "Traditional Arabic caps for daily prayer and wear.",
    image: "/images/books/arabic-caps/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 13
  },
  {
    id: "modest-gloves",
    name: "Modest Gloves",
    price: 199,
    category: "Clothing",
    description: "Comfortable gloves for complete modest covering.",
    image: "/images/books/modest-gloves/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 8
  },
  {
    id: "arm-sleeves",
    name: "Arm Sleeves",
    price: 175,
    category: "Clothing",
    description: "Stretchy arm sleeves for additional coverage.",
    image: "/images/books/arm-sleeves/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 10
  },

  // HONEY (4 products)
  {
    id: "wild-forest-honey",
    name: "Wild Forest Honey",
    price: 749,
    category: "Honey",
    description: "Pure wild forest honey collected from natural beehives. 100% organic.",
    image: "/images/books/wild-forest-honey/1.jpg",
    badge: "Natural",
    inStock: true,
    rating: 5.0,
    reviews: 28
  },
  {
    id: "sidr-honey",
    name: "Sidr Honey",
    price: 1299,
    category: "Honey",
    description: "Premium Sidr honey known for its healing properties and rich taste.",
    image: "/images/books/sidr-honey/1.jpg",
    badge: "Premium",
    inStock: true,
    rating: 5.0,
    reviews: 35
  },
  {
    id: "bambozia-honey",
    name: "Bambozia Honey",
    price: 599,
    category: "Honey",
    description: "Unique bambozia honey with distinct flavor profile.",
    image: "/images/books/bambozia-honey/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 14
  },
  {
    id: "multiflora-honey",
    name: "Multiflora Honey",
    price: 549,
    category: "Honey",
    description: "Delicious multiflora honey from diverse flower sources.",
    image: "/images/books/multiflora-honey/1.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 19
  },

  // SAFFRON (1 product)
  {
    id: "kashmiri-saffron",
    name: "Kashmiri Saffron",
    price: 899,
    category: "Saffron",
    description: "Authentic Kashmiri saffron, the finest quality available. Grade A+.",
    image: "/images/books/kashmiri-saffron/1.jpg",
    badge: "Authentic",
    inStock: true,
    rating: 5.0,
    reviews: 42
  },

  // ATTARS (1 product)
  {
    id: "premium-attars",
    name: "Premium Attars Collection",
    price: 649,
    category: "Attars",
    description: "Alcohol-free perfume oils in various traditional scents. Long-lasting fragrance.",
    image: "/images/books/premium-attars/1.jpg",
    badge: "Alcohol-Free",
    inStock: true,
    rating: 5.0,
    reviews: 26
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All") return products;
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowercaseQuery) ||
    p.description.toLowerCase().includes(lowercaseQuery) ||
    p.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.badge).slice(0, 8);
};

export const getProductsByBadge = (badge: string): Product[] => {
  return products.filter(p => p.badge === badge);
};
