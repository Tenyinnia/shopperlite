// utils/formatCategory.js
export function CapitalizeCategory(str) {
  if (!str || typeof str !== 'string') return '';

  return str
    .toLowerCase()
    .split(/[\s&-]/)                  // split on spaces, &, or -
    .map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(' ');
}