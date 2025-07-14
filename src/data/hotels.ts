import { Hotel } from '../types/hotel';

export const hotels: Hotel[] = [
  {
    id: '1',
    name: 'Backwater Bliss Resort',
    location: 'Alappuzha',
    district: 'alappuzha',
    landscape: 'backwaters',
    price: 12000,
    originalPrice: 15000,
    rating: 4.8,
    reviewCount: 324,
    image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Pool', 'Spa', 'Restaurant', 'Free WiFi'],
    amenities: ['Swimming Pool', 'Spa & Wellness', 'Restaurant', 'Room Service', 'Free WiFi', 'Parking', 'Laundry', 'Concierge'],
    description: 'Experience the serene beauty of Kerala\'s backwaters at our luxury resort. Nestled along the pristine waterways of Alappuzha, our resort offers an authentic Kerala experience with modern amenities. Wake up to the gentle sounds of water and birds, enjoy traditional Kerala cuisine, and relax in our world-class spa.',
    phone: '+91 9876543210',
    email: 'info@backwaterbliss.com',
    address: 'Backwater Road, Alappuzha, Kerala 688001',
    checkIn: '2:00 PM',
    checkOut: '12:00 PM',
    cancellation: 'Free cancellation up to 24 hours before check-in',
    roomTypes: [
      {
        id: '1-1',
        name: 'Deluxe Backwater View',
        price: 12000,
        capacity: 2,
        size: '35 sqm',
        amenities: ['King Bed', 'Backwater View', 'AC', 'Mini Bar', 'Balcony'],
        image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: '1-2',
        name: 'Premium Suite',
        price: 18000,
        capacity: 4,
        size: '55 sqm',
        amenities: ['King Bed', 'Living Area', 'Backwater View', 'AC', 'Mini Bar', 'Balcony', 'Jacuzzi'],
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  {
    id: '2',
    name: 'Hill Station Retreat',
    location: 'Munnar',
    district: 'idukki',
    landscape: 'mountains',
    price: 8500,
    originalPrice: 10000,
    rating: 4.7,
    reviewCount: 256,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1574829/pexels-photo-1574829.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1769737/pexels-photo-1769737.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Mountain View', 'Trekking', 'Bonfire', 'Tea Plantation Tours'],
    amenities: ['Mountain View', 'Trekking Guides', 'Bonfire Area', 'Restaurant', 'Free WiFi', 'Parking', 'Tea Plantation Tours'],
    description: 'Escape to the misty hills of Munnar at our charming hill station retreat. Surrounded by lush tea plantations and rolling hills, our resort offers breathtaking views and cool mountain air. Perfect for nature lovers and adventure enthusiasts.',
    phone: '+91 9876543211',
    email: 'info@hillretreat.com',
    address: 'Tea Estate Road, Munnar, Idukki, Kerala 685612',
    checkIn: '1:00 PM',
    checkOut: '11:00 AM',
    cancellation: 'Free cancellation up to 48 hours before check-in',
    roomTypes: [
      {
        id: '2-1',
        name: 'Mountain View Room',
        price: 8500,
        capacity: 2,
        size: '30 sqm',
        amenities: ['Queen Bed', 'Mountain View', 'Heater', 'Tea/Coffee Maker', 'Balcony'],
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  {
    id: '3',
    name: 'Coastal Paradise',
    location: 'Kovalam',
    district: 'thiruvananthapuram',
    landscape: 'beaches',
    price: 15000,
    rating: 4.9,
    reviewCount: 412,
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Beach Access', 'Water Sports', 'Ayurveda', 'Infinity Pool'],
    amenities: ['Private Beach', 'Water Sports', 'Ayurveda Spa', 'Infinity Pool', 'Beach Restaurant', 'Free WiFi', 'Valet Parking'],
    description: 'Indulge in luxury at our beachfront paradise in Kovalam. With direct access to the pristine beach, world-class Ayurveda treatments, and stunning ocean views, this is the perfect destination for a rejuvenating getaway.',
    phone: '+91 9876543212',
    email: 'info@coastalparadise.com',
    address: 'Lighthouse Beach, Kovalam, Thiruvananthapuram, Kerala 695527',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM',
    cancellation: 'Free cancellation up to 24 hours before check-in',
    roomTypes: [
      {
        id: '3-1',
        name: 'Ocean View Suite',
        price: 15000,
        capacity: 2,
        size: '45 sqm',
        amenities: ['King Bed', 'Ocean View', 'AC', 'Mini Bar', 'Private Balcony', 'Jacuzzi'],
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  {
    id: '4',
    name: 'Wildlife Lodge',
    location: 'Thekkady',
    district: 'idukki',
    landscape: 'forests',
    price: 9800,
    rating: 4.6,
    reviewCount: 189,
    image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1574829/pexels-photo-1574829.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Safari', 'Nature Walks', 'Bird Watching', 'Spice Tours'],
    amenities: ['Safari Tours', 'Nature Walks', 'Bird Watching', 'Spice Garden Tours', 'Restaurant', 'Free WiFi', 'Parking'],
    description: 'Immerse yourself in the wild beauty of Periyar National Park at our eco-friendly wildlife lodge. Experience close encounters with elephants, tigers, and exotic birds while staying in comfortable accommodations surrounded by pristine forest.',
    phone: '+91 9876543213',
    email: 'info@wildlifelodge.com',
    address: 'Periyar Tiger Reserve, Thekkady, Idukki, Kerala 685536',
    checkIn: '2:00 PM',
    checkOut: '11:00 AM',
    cancellation: 'Free cancellation up to 72 hours before check-in',
    roomTypes: [
      {
        id: '4-1',
        name: 'Forest View Cottage',
        price: 9800,
        capacity: 3,
        size: '40 sqm',
        amenities: ['Twin Beds', 'Forest View', 'Fan', 'Mosquito Net', 'Private Bathroom'],
        image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  {
    id: '5',
    name: 'Heritage House',
    location: 'Fort Kochi',
    district: 'ernakulam',
    landscape: 'cities',
    price: 11200,
    rating: 4.8,
    reviewCount: 298,
    image: 'https://images.pexels.com/photos/1769737/pexels-photo-1769737.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1769737/pexels-photo-1769737.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Heritage', 'Cultural Tours', 'Art Gallery', 'Traditional Architecture'],
    amenities: ['Heritage Architecture', 'Cultural Tours', 'Art Gallery', 'Traditional Restaurant', 'Free WiFi', 'Parking', 'Concierge'],
    description: 'Step back in time at our beautifully restored heritage house in the historic Fort Kochi. Experience the rich cultural heritage of Kerala while enjoying modern comforts in this architectural gem.',
    phone: '+91 9876543214',
    email: 'info@heritagehouse.com',
    address: 'Princess Street, Fort Kochi, Ernakulam, Kerala 682001',
    checkIn: '2:00 PM',
    checkOut: '12:00 PM',
    cancellation: 'Free cancellation up to 24 hours before check-in',
    roomTypes: [
      {
        id: '5-1',
        name: 'Heritage Room',
        price: 11200,
        capacity: 2,
        size: '32 sqm',
        amenities: ['Queen Bed', 'Heritage Decor', 'AC', 'Antique Furniture', 'Garden View'],
        image: 'https://images.pexels.com/photos/1769737/pexels-photo-1769737.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  {
    id: '6',
    name: 'Spice Garden Resort',
    location: 'Wayanad',
    district: 'wayanad',
    landscape: 'forests',
    price: 7500,
    rating: 4.7,
    reviewCount: 167,
    image: 'https://images.pexels.com/photos/1574829/pexels-photo-1574829.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1574829/pexels-photo-1574829.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Spice Tours', 'Plantation', 'Organic Food', 'Nature Walks'],
    amenities: ['Spice Plantation Tours', 'Organic Restaurant', 'Nature Walks', 'Ayurveda Treatments', 'Free WiFi', 'Parking'],
    description: 'Discover the aromatic world of spices at our plantation resort in Wayanad. Surrounded by cardamom, pepper, and coffee plantations, enjoy farm-to-table dining and immersive spice tours.',
    phone: '+91 9876543215',
    email: 'info@spicegarden.com',
    address: 'Spice Plantation Road, Wayanad, Kerala 673121',
    checkIn: '1:00 PM',
    checkOut: '11:00 AM',
    cancellation: 'Free cancellation up to 48 hours before check-in',
    roomTypes: [
      {
        id: '6-1',
        name: 'Plantation Cottage',
        price: 7500,
        capacity: 2,
        size: '28 sqm',
        amenities: ['Double Bed', 'Plantation View', 'Fan', 'Organic Toiletries', 'Private Terrace'],
        image: 'https://images.pexels.com/photos/1574829/pexels-photo-1574829.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  // Additional hotels for different landscapes and districts
  {
    id: '7',
    name: 'Emerald Bay Resort',
    location: 'Varkala',
    district: 'thiruvananthapuram',
    landscape: 'beaches',
    price: 13500,
    rating: 4.6,
    reviewCount: 234,
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Cliff View', 'Beach Access', 'Yoga', 'Ayurveda'],
    amenities: ['Cliff Top Location', 'Private Beach', 'Yoga Classes', 'Ayurveda Spa', 'Restaurant', 'Free WiFi'],
    description: 'Perched on the dramatic cliffs of Varkala, our resort offers stunning views of the Arabian Sea and direct access to the famous Varkala Beach.',
    phone: '+91 9876543216',
    email: 'info@emeraldbay.com',
    address: 'Cliff Road, Varkala, Thiruvananthapuram, Kerala 695141',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM',
    cancellation: 'Free cancellation up to 24 hours before check-in',
    roomTypes: [
      {
        id: '7-1',
        name: 'Cliff View Room',
        price: 13500,
        capacity: 2,
        size: '38 sqm',
        amenities: ['King Bed', 'Sea View', 'AC', 'Mini Bar', 'Balcony'],
        image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  {
    id: '8',
    name: 'Houseboat Paradise',
    location: 'Kumarakom',
    district: 'kottayam',
    landscape: 'backwaters',
    price: 16000,
    rating: 4.9,
    reviewCount: 156,
    image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Houseboat', 'Backwater Cruise', 'Traditional Meals', 'Bird Watching'],
    amenities: ['Traditional Houseboat', 'Backwater Cruise', 'Kerala Meals', 'Bird Watching', 'Fishing'],
    description: 'Experience the magic of Kerala\'s backwaters aboard our traditional houseboats in Kumarakom. Cruise through serene waters while enjoying authentic Kerala cuisine.',
    phone: '+91 9876543217',
    email: 'info@houseboatparadise.com',
    address: 'Kumarakom Backwaters, Kottayam, Kerala 686563',
    checkIn: '12:00 PM',
    checkOut: '9:00 AM',
    cancellation: 'Free cancellation up to 48 hours before check-in',
    roomTypes: [
      {
        id: '8-1',
        name: 'Deluxe Houseboat',
        price: 16000,
        capacity: 4,
        size: '50 sqm',
        amenities: ['2 Bedrooms', 'Living Area', 'Kitchen', 'Upper Deck', 'AC'],
        image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  }
];

export const getHotelsByLandscape = (landscape: string) => {
  return hotels.filter(hotel => hotel.landscape === landscape);
};

export const getHotelsByDistrict = (district: string) => {
  return hotels.filter(hotel => hotel.district === district);
};

export const getHotelById = (id: string) => {
  return hotels.find(hotel => hotel.id === id);
};

export const getFeaturedHotels = () => {
  return hotels.slice(0, 6);
};