/**
 * Format a price with a suffix representing thousands, millions. etc.
 * 
 * 100K, 1M, 1.5M, 2.5B, etc.
 */
export const formatPriceWithSuffix = (price) => {
  const k = 1000; // size of 1K
  const dm = 2; // decimal places
  const sizes = ['', 'K', 'M', 'B', 'T', 'P', 'E', 'Z', 'Y'];

  if (price === 0) return `0`;

  const i = Math.floor(Math.log(price) / Math.log(k));
  const formattedPrice = Number.parseFloat((price / k ** i).toFixed(dm));

  return `${formattedPrice}${sizes[i]}`;
};
