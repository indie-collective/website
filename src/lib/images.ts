import type { ImageMetadata } from 'astro';

// Photos live in src/assets so Astro resizes them; data files name them by path.
const images = import.meta.glob<{ default: ImageMetadata }>('../assets/**/*.{jpg,jpeg,png}', { eager: true });

export const asset = (path: string): ImageMetadata => {
  const image = images[`../assets/${path}`];
  if (!image) throw new Error(`No image at src/assets/${path}`);
  return image.default;
};
