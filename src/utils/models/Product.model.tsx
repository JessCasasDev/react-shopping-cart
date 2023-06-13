export interface Images {
  original: string;
  thumbnail: string;
}

export interface Product {
  title: string;
  description: string;
  price: string;
  tags: string[];
  discountPercentage: string | null;
  finalPrice: string;
  id: string;
  images: Images[];
}
