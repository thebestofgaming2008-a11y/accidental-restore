// Dynamic image loader for product images
// Images are stored in src/assets/images/books/

// Import all images from src/assets/images/books
const bookImages = import.meta.glob(
  '/src/assets/images/books/**/*.{jpg,jpeg,png,webp}',
  { eager: true, as: 'url' }
);

// Create a map of product slugs to their first image
const productImageMap: Record<string, string> = {};

// Process all imported images
Object.entries(bookImages).forEach(([path, url]) => {
  // Extract folder name from path
  // Path format: /src/assets/images/books/[folder-name]/[filename]
  const parts = path.split('/');
  const booksIndex = parts.indexOf('books');
  if (booksIndex !== -1 && parts.length > booksIndex + 1) {
    const folderName = parts[booksIndex + 1];
    // Only store first image found for each folder
    if (!productImageMap[folderName]) {
      productImageMap[folderName] = url as string;
    }
  }
});

// Mapping of product IDs to their folder names in assets
const productFolderMap: Record<string, string> = {
  // Aqeedah
  'usool-as-sunnah': 'Usuul as sunnah by imam ahmad in arabic',
  'foundation-of-sunnah': 'Imam Ahmed foundations of the sunnah english',
  'kitab-at-tawhid': 'kitab at-tawheed',
  'sharh-aqeedah-wasitiyyah': 'sharh-al-aqeedah-al-wasitiyyah english',
  'be-salafi': 'manhaj as-salaf',
  
  // Tafsir
  'tafsir-as-sadi': 'tafsir Sa\'di',
  'tafseer-ahsan-ul-bayan': 'tafsir ahanul bayan urdu',
  'tafseer-ibn-kathir': 'Tafsir ibn kathir',
  
  // Hadith
  'sahih-bukhari': 'Sahih Bukhari english',
  'sahih-muslim': 'Sahih muslim english',
  'riyad-as-saliheen': 'Ryad-us-Saliheen english',
  
  // Seerah
  'sealed-nectar': 'the sealed nectar',
  'when-moon-split': 'When the moon split',
  'stories-prophets': 'imam ibn kathir stories of the prophets in arabic',
  
  // Books
  'diseases-of-hearts': 'the diseases of the hearts and their cures',
  'sincere-counsel': 'Sincere counsel to the seekers of sacred knowledge',
  'disciplining-soul': 'disciplining the soul',
  'diseases-and-cure': 'the disease and the cure',
  'commentary-tawheed': 'Commentary on kitab at tawhid by ibn al uthaymeen',
  'great-women': 'Great women of al Islam',
  
  // Fiqh
  'explanation-important-lessons': 'explanation of important lessons for every muslim',
  
  // Women's books
  'important-lessons-women': 'Important lessons for muslim women',
  'my-advice-women': 'My advice to the women',
  'rights-spouses': 'Rights of the spouses',
  'dress-code-women': 'the dress code for the muslim women in the quran and sunnah',
  'marriage-guide': 'The marriage guide according to the sunnah of the prophet',
};

/**
 * Returns the first available image for a product.
 * Searches by product ID in the folder mapping.
 */
export function getFirstImage(category: string, productId: string): string {
  // First try direct folder mapping
  const folderName = productFolderMap[productId];
  if (folderName && productImageMap[folderName]) {
    return productImageMap[folderName];
  }
  
  // Try to find by partial match in folder names
  const lowerProductId = productId.toLowerCase().replace(/-/g, ' ');
  for (const [folder, imageUrl] of Object.entries(productImageMap)) {
    const lowerFolder = folder.toLowerCase();
    if (lowerFolder.includes(lowerProductId) || lowerProductId.includes(lowerFolder.split(' ')[0])) {
      return imageUrl;
    }
  }
  
  // Return a placeholder if no image found
  return '/placeholder.svg';
}

// Export the image map for debugging
export const productImages = productImageMap;