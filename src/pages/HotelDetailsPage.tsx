import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Phone, Mail, Wifi, Car, Coffee, Waves, ArrowLeft, Calendar, Users } from 'lucide-react';
import { getHotelById } from '../data/hotels';

const HotelDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const hotel = id ? getHotelById(id) : null;
  const [selectedImage, setSelectedImage] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  if (!hotel) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Hotel not found</h1>
          <Link
            to="/hotels"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Back to Hotels
          </Link>
        </div>
      </div>
    );
  }

  const amenityIcons: { [key: string]: React.ReactNode } = {
    'Free WiFi': <Wifi className="h-5 w-5" />,
    'Parking': <Car className="h-5 w-5" />,
    'Restaurant': <Coffee className="h-5 w-5" />,
    'Swimming Pool': <Waves className="h-5 w-5" />,
  };

  const handleCallNow = () => {
    window.location.href = `tel:${hotel.phone}`;
  };

  const handleBookNow = () => {
    // In a real app, this would integrate with a booking system
    alert(`Booking request for ${hotel.name}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        {/* Back Button */}
        <Link
          to="/hotels"
          className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 mb-4 sm:mb-6 text-xs sm:text-base"
        >
          <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          <span>Back to Hotels</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-4 sm:mb-8">
              <div className="relative mb-2 sm:mb-4">
                <img
                  src={hotel.images[selectedImage]}
                  alt={hotel.name}
                  className="w-full h-40 sm:h-96 object-cover rounded-lg sm:rounded-xl"
                />
                {hotel.originalPrice && (
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-red-500 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm">
                    <span>Save ₹{(hotel.originalPrice - hotel.price).toLocaleString()}</span>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-4 gap-1 sm:gap-2">
                {hotel.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${hotel.name} ${index + 1}`}
                    className={`h-10 sm:h-20 object-cover rounded-md sm:rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedImage === index ? 'ring-2 ring-green-500' : 'hover:opacity-80'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>

            {/* Hotel Info */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-8 mb-4 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-3 sm:mb-6">
                <div>
                  <h1 className="text-lg sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">{hotel.name}</h1>
                  <div className="flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-4">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                    <span className="text-xs sm:text-base text-gray-600">{hotel.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-current" />
                      <span className="font-semibold text-xs sm:text-base">{hotel.rating}</span>
                    </div>
                    <span className="text-xs sm:text-base text-gray-600">({hotel.reviewCount} reviews)</span>
                  </div>
                </div>
                <div className="text-right mt-2 sm:mt-0">
                  <div className="text-lg sm:text-3xl font-bold text-green-600">
                    ₹{hotel.price.toLocaleString()}
                  </div>
                  <div className="text-xs sm:text-base text-gray-600">per night</div>
                  {hotel.originalPrice && (
                    <div className="text-xs sm:text-base text-gray-500 line-through">
                      ₹{hotel.originalPrice.toLocaleString()}
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t pt-3 sm:pt-6">
                <h3 className="text-base sm:text-xl font-semibold mb-2 sm:mb-4">About this property</h3>
                <p className="text-xs sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-6">{hotel.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-3 sm:mb-6">
                  {hotel.features.map((feature) => (
                    <div
                      key={feature}
                      className="bg-green-100 text-green-800 px-2 py-1 sm:px-3 sm:py-2 rounded text-center text-xs sm:text-sm font-medium"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-8 mb-4 sm:mb-8">
              <h3 className="text-base sm:text-xl font-semibold mb-3 sm:mb-6">Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                {hotel.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2 sm:space-x-3">
                    <div className="text-green-600">
                      {amenityIcons[amenity] || <div className="h-4 w-4 sm:h-5 sm:w-5 bg-green-600 rounded-full" />}
                    </div>
                    <span className="text-xs sm:text-base text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Types */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-8">
              <h3 className="text-base sm:text-xl font-semibold mb-3 sm:mb-6">Room Types</h3>
              <div className="space-y-3 sm:space-y-6">
                {hotel.roomTypes.map((room) => (
                  <div key={room.id} className="border border-gray-200 rounded-lg p-3 sm:p-6">
                    <div className="flex flex-col md:flex-row gap-3 sm:gap-6">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full md:w-32 sm:md:w-48 h-20 sm:h-32 object-cover rounded-md sm:rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">{room.name}</h4>
                        <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-2 sm:mb-4 text-xs sm:text-sm text-gray-600">
                          <div>Size: {room.size}</div>
                          <div>Capacity: {room.capacity} guests</div>
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                          {room.amenities.map((amenity) => (
                            <span
                              key={amenity}
                              className="bg-gray-100 text-gray-700 px-1 py-[2px] sm:px-2 sm:py-1 rounded text-[10px] sm:text-xs"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                        <div className="text-base sm:text-xl font-bold text-green-600">
                          ₹{room.price.toLocaleString()}/night
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-6 sticky top-20 sm:top-24">
              <h3 className="text-base sm:text-xl font-semibold mb-3 sm:mb-6">Book Your Stay</h3>
              
              <div className="space-y-2 sm:space-y-4 mb-3 sm:mb-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Check-in Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full pl-8 sm:pl-10 pr-2 sm:pr-4 py-1 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-xs sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Check-out Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full pl-8 sm:pl-10 pr-2 sm:pr-4 py-1 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-xs sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      className="w-full pl-8 sm:pl-10 pr-2 sm:pr-4 py-1 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-xs sm:text-base"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-6">
                <button
                  onClick={handleBookNow}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-3 px-2 sm:px-6 rounded-lg transition-colors duration-200 text-xs sm:text-base"
                >
                  Book Now
                </button>
                
                <button
                  onClick={handleCallNow}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-2 sm:px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-base"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Call Now</span>
                </button>
              </div>

              {/* Contact Info */}
              <div className="border-t pt-3 sm:pt-6">
                <h4 className="font-semibold mb-2 sm:mb-4 text-xs sm:text-base">Contact Information</h4>
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                    <span>{hotel.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                    <span>{hotel.email}</span>
                  </div>
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 mt-0.5" />
                    <span>{hotel.address}</span>
                  </div>
                </div>
              </div>

              {/* Hotel Policies */}
              <div className="border-t pt-3 sm:pt-6 mt-3 sm:mt-6">
                <h4 className="font-semibold mb-2 sm:mb-4 text-xs sm:text-base">Hotel Policies</h4>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Check-in:</span> {hotel.checkIn}
                  </div>
                  <div>
                    <span className="font-medium">Check-out:</span> {hotel.checkOut}
                  </div>
                  <div>
                    <span className="font-medium">Cancellation:</span> {hotel.cancellation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsPage;