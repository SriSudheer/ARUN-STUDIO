export interface Testimonial {
  name: string;
  service: string;
  rating: number;
  quote: string;
  image: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
  width: number;
  height: number;
}