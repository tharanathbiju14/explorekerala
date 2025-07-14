export interface Hotel {
  id: string;
  name: string;
  location: string;
  district: string;
  landscape: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  features: string[];
  amenities: string[];
  description: string;
  phone: string;
  email: string;
  address: string;
  checkIn: string;
  checkOut: string;
  cancellation: string;
  roomTypes: RoomType[];
}

export interface RoomType {
  id: string;
  name: string;
  price: number;
  capacity: number;
  size: string;
  amenities: string[];
  image: string;
}

export type LandscapeType = 'beaches' | 'mountains' | 'backwaters' | 'forests' | 'cities';
export type DistrictType = 'thiruvananthapuram' | 'kollam' | 'pathanamthitta' | 'alappuzha' | 'kottayam' | 'idukki' | 'ernakulam' | 'thrissur' | 'palakkad' | 'malappuram' | 'kozhikode' | 'wayanad' | 'kannur' | 'kasaragod';