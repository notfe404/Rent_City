export interface MockVehicle {
  id: string;
  name: string;
  brand: string;
  type: string;
  category: string;
  price: number;
  image: string;
  passengers: number;
  doors: number;
  transmission: string;
  luggage: number;
}

export const MOCK_VEHICLES: MockVehicle[] = [
  {
    id: '1',
    name: 'Mercedes-Benz S-Class',
    brand: 'Mercedes-Benz',
    type: 'Luxury Sedan',
    category: 'Luxury',
    price: 150,
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=800&auto=format&fit=crop',
    passengers: 4,
    doors: 4,
    transmission: 'Automatic',
    luggage: 3,
  },
  {
    id: '2',
    name: 'Porsche Taycan',
    brand: 'Porsche',
    type: 'Electric Sports',
    category: 'Sports',
    price: 200,
    image: 'https://images.unsplash.com/photo-1503378414167-bd1ad040c5f0?q=80&w=800&auto=format&fit=crop',
    passengers: 4,
    doors: 4,
    transmission: 'Automatic',
    luggage: 2,
  },
  {
    id: '3',
    name: 'Range Rover Velar',
    brand: 'Land Rover',
    type: 'Premium SUV',
    category: 'SUV',
    price: 180,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0b16?q=80&w=800&auto=format&fit=crop',
    passengers: 5,
    doors: 4,
    transmission: 'Automatic',
    luggage: 4,
  },
  {
    id: '4',
    name: 'BMW 4 Series Cabriolet',
    brand: 'BMW',
    type: 'Convertible',
    category: 'Convertible',
    price: 160,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop',
    passengers: 4,
    doors: 2,
    transmission: 'Automatic',
    luggage: 2,
  },
  {
    id: '5',
    name: 'Audi Q8',
    brand: 'Audi',
    type: 'Crossover SUV',
    category: 'SUV',
    price: 170,
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop',
    passengers: 5,
    doors: 4,
    transmission: 'Automatic',
    luggage: 5,
  },
  {
    id: '6',
    name: 'Toyota Camry',
    brand: 'Toyota',
    type: 'Sedan',
    category: 'Sedan',
    price: 80,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=800&auto=format&fit=crop',
    passengers: 5,
    doors: 4,
    transmission: 'Automatic',
    luggage: 3,
  },
];
