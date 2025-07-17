import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

const HotelDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    fetch('http://192.168.1.4:8080/user/fetch-all-hotels')
      .then((res) => res.json())
      .then((data) => {
        const found = Array.isArray(data)
          ? data.find((h) => String(h.hotelId) === String(id))
          : null;
        setHotel(found || null);
      })
      .catch(() => setHotel(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-600"></div>
          <span className="mt-3 text-green-600 text-sm">Loading hotel details...</span>
        </div>
      </div>
    );
  }

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

  // Combine all images
  const images: string[] = [
    ...(hotel.hotelImageUrls || []),
    ...(hotel.hotelImageUploadBase64
      ? hotel.hotelImageUploadBase64.map((img: string) => `data:image/png;base64,${img}`)
      : [])
  ];
  const hasImages = images.length > 0;

  const handlePrev = () => {
    setCurrentImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:justify-between mb-4 sm:mb-6">
          <Link
            to="/hotels"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-xs sm:text-base mb-2 sm:mb-0"
          >
            ← Back to Hotels
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Carousel */}
            <div className="mb-4 sm:mb-8">
              <div className="relative w-full h-48 sm:h-96 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                {hasImages ? (
                  <>
                    <img
                      src={images[currentImg]}
                      alt={`${hotel.hotelName} ${currentImg + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={handlePrev}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="h-6 w-6 text-gray-700" />
                        </button>
                        <button
                          onClick={handleNext}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100"
                          aria-label="Next image"
                        >
                          <ChevronRight className="h-6 w-6 text-gray-700" />
                        </button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                          {images.map((_, idx) => (
                            <span
                              key={idx}
                              className={`inline-block w-2 h-2 rounded-full ${idx === currentImg ? 'bg-green-600' : 'bg-gray-300'}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <img
                    src="https://via.placeholder.com/600x400?text=No+Image"
                    alt="No hotel images"
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
              </div>
            </div>

            {/* Hotel Info */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-8 mb-4 sm:mb-8">
              <h1 className="text-lg sm:text-3xl font-bold text-gray-800 mb-2">{hotel.hotelName}</h1>
              <div className="flex items-center space-x-2 mb-2">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="font-semibold text-xs sm:text-base">{hotel.hotelRating}</span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-xs sm:text-base text-gray-600">{hotel.hotelAddress}</span>
              </div>
              <div className="mb-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs sm:text-sm mr-2">
                  {hotel.landscapeTypeName}
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs sm:text-sm mr-2">
                  {hotel.hotelTypeName}
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs sm:text-sm">
                  {hotel.district}
                </span>
              </div>
              <div className="text-lg sm:text-2xl font-bold text-green-600 mb-2">
                ₹{hotel.hotelBasicPricePerNight}/night
              </div>
              <p className="text-xs sm:text-base text-gray-600 leading-relaxed mb-3">{hotel.hotelDescription}</p>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-6 sticky top-20 sm:top-24">
              <h3 className="text-base sm:text-xl font-semibold mb-3 sm:mb-6">Contact Information</h3>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span>{hotel.hotelPhoneNumber}</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span>{hotel.hotelEmail}</span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                  <span>{hotel.hotelAddress}</span>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <a
                  href={`tel:${hotel.hotelPhoneNumber}`}
                  className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center text-xs sm:text-base"
                >
                  Call Now
                </a>
                <a
                  href={`mailto:${hotel.hotelEmail}`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center text-xs sm:text-base"
                >
                  Email
                </a>
                <a
                  href={hotel.location}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center text-xs sm:text-base"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsPage;