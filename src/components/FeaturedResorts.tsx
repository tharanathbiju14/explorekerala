import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { getFeaturedHotels } from '../data/hotels';

const FeaturedResorts = () => {
  const resorts = getFeaturedHotels();

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-lg sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 sm:mb-4">
            Featured Resorts
          </h2>
          <p className="text-xs sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked luxury stays across Kerala
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {resorts.map((resort) => (
            <Link
              to={`/hotel/${resort.id}`}
              key={resort.id}
              className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={resort.image}
                  alt={resort.name}
                  className="w-full h-24 sm:h-48 object-cover"
                />
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  ₹{resort.price.toLocaleString()}/night
                </div>
              </div>
              
              <div className="p-3 sm:p-6">
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <h3 className="text-xs sm:text-xl font-semibold text-gray-800">{resort.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-current" />
                    <span className="text-xs sm:text-sm text-gray-600">{resort.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-4">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                  <span className="text-xs sm:text-gray-600">{resort.location}</span>
                </div>
                
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                  {resort.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <span className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-3 px-2 sm:px-6 rounded-lg transition-colors duration-200 text-center text-xs sm:text-base">
                  Book Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedResorts;