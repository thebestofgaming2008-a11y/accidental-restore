// IMPORTANT: glob from /images/* (NOT /public/images/*)

export const productImages = import.meta.glob(
  '/images/**/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

/**
 * Returns the first available image for a product folder.
 */
export function getFirstImage(category: string, slug: string): string {
  const folder = `/images/${category}/${slug}/`;

  const matches = Object.keys(productImages)
    .filter((path) => path.startsWith(folder))
    .sort();

  if (matches.length === 0) {
    return '/placeholder.jpg';
  }

  return matches[0]; // already correct URL
}
