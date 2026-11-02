import product1 from '../../src/assets/products/product1.jpg';
import product2 from '../../src/assets/products/product2.jpg';

export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  description: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Rolex Submariner",
    image: product1,
    price: 8500,
    rating: 4.7,
    description:
      "The Rolex Submariner is a timeless luxury watch featuring a stylish design, durable build, and excellent water resistance. Perfect for both special occasions and everyday wear.",
  },

  {
    id: 2,
    name: "Casio Edifice",
    image: product2,
    price: 3500,
    rating: 4.7,
    description:
      "The Casio Edifice combines modern style with reliable performance. Its elegant design makes it a great choice for everyday use, work, and special occasions.",
  },
];

export default products;