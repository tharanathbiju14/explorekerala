import { useState, useEffect, } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, MapPin, Filter, Grid, List } from 'lucide-react';

const HotelsPage = () => {
  const [searchParams] = useSearchParams();
  const [hotels, setHotels] = useState<any[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const isMobile = window.innerWidth < 1024;

  const landscape = searchParams.get('landscape');
  const district = searchParams.get('district');

  useEffect(() => {
    setLoading(true);
    let url = '';
    if (district) {
      url = `http://192.168.1.14:8080/user/fetch-hotels-by-district?district=${district}`;
    } else if (landscape) {
      url = `http://192.168.1.14:8080/hotel/fetch-hotels-by-landscape?landscape=${landscape}`;
    } else {
      url = 'http://192.168.1.14:8080/user/fetch-all-hotels';
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => setHotels(Array.isArray(data) ? data : []))
      .catch(() => setHotels([]))
      .finally(() => setLoading(false));
  }, [district, landscape]);

  // Filtering and sorting logic
  useEffect(() => {
    let filtered = hotels.filter((hotel) => {
      // Price filter (if price is a range, take min value)
      let price = 0;
      if (typeof hotel.hotelBasicPricePerNight === 'string') {
        price = parseInt(hotel.hotelBasicPricePerNight.split('-')[0]);
      } else {
        price = Number(hotel.hotelBasicPricePerNight);
      }
      const priceMatch = price >= priceRange[0] && price <= priceRange[1];

      // Rating filter
      const ratingMatch = selectedRating === 0 || hotel.hotelRating >= selectedRating;

      return priceMatch && ratingMatch;
    });

    // Sorting
    if (sortBy === 'name') {
      filtered = filtered.sort((a, b) => a.hotelName.localeCompare(b.hotelName));
    } else if (sortBy === 'price-low') {
      filtered = filtered.sort((a, b) => {
        const aPrice = typeof a.hotelBasicPricePerNight === 'string' ? parseInt(a.hotelBasicPricePerNight.split('-')[0]) : Number(a.hotelBasicPricePerNight);
        const bPrice = typeof b.hotelBasicPricePerNight === 'string' ? parseInt(b.hotelBasicPricePerNight.split('-')[0]) : Number(b.hotelBasicPricePerNight);
        return aPrice - bPrice;
      });
    } else if (sortBy === 'price-high') {
      filtered = filtered.sort((a, b) => {
        const aPrice = typeof a.hotelBasicPricePerNight === 'string' ? parseInt(a.hotelBasicPricePerNight.split('-')[0]) : Number(a.hotelBasicPricePerNight);
        const bPrice = typeof b.hotelBasicPricePerNight === 'string' ? parseInt(b.hotelBasicPricePerNight.split('-')[0]) : Number(b.hotelBasicPricePerNight);
        return bPrice - aPrice;
      });
    } else if (sortBy === 'rating') {
      filtered = filtered.sort((a, b) => b.hotelRating - a.hotelRating);
    }

    setFilteredHotels(filtered);
  }, [hotels, sortBy, priceRange, selectedRating]);

  const getPageTitle = () => {
    if (landscape) {
      const landscapeNames: any = {
        beaches: 'Beach Hotels',
        mountains: 'Mountain Resorts',
        backwaters: 'Backwater Stays',
        forests: 'Forest Lodges',
        cities: 'City Hotels'
      };
      return landscapeNames[landscape] || 'Hotels';
    }
    if (district) {
      return `Hotels in ${district.charAt(0).toUpperCase() + district.slice(1)}`;
    }
    return 'All Hotels';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">{getPageTitle()}</h1>
          <p className="text-sm sm:text-gray-600">
            {filteredHotels.length} {filteredHotels.length === 1 ? 'property' : 'properties'} found
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8">
          {/* Mobile Filter Toggle */}
          {isMobile && (
            <button
              onClick={() => setShowMobileFilter(!showMobileFilter)}
              className="mb-4 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold"
            >
              {showMobileFilter ? 'Hide Filters' : 'Show Filters'}
            </button>
          )}

          {/* Filters Sidebar */}
          {(showMobileFilter || !isMobile) && (
            <div className={`lg:w-1/4 mb-4 lg:mb-0 ${isMobile ? 'w-full' : ''}`}>
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 sticky top-20 sm:top-24 z-20">
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                  <h3 className="text-base sm:text-lg font-semibold">Filters</h3>
                </div>

                {/* Sort By */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-1 sm:p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-xs sm:text-base"
                  >
                    <option value="name">Name</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>

                {/* Price Range */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Price Range (₹)
                  </label>
                  <div className="space-y-1 sm:space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="20000"
                      step="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs sm:text-sm text-gray-600">
                      <span>₹0</span>
                      <span>₹{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Minimum Rating
                  </label>
                  <div className="space-y-1 sm:space-y-2">
                    {[0, 4, 4.5].map((rating) => (
                      <label key={rating} className="flex items-center">
                        <input
                          type="radio"
                          name="rating"
                          value={rating}
                          checked={selectedRating === rating}
                          onChange={(e) => setSelectedRating(parseFloat(e.target.value))}
                          className="mr-1 sm:mr-2"
                        />
                        <span className="text-xs sm:text-sm">
                          {rating === 0 ? 'Any Rating' : `${rating}+ Stars`}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSortBy('name');
                    setPriceRange([0, 20000]);
                    setSelectedRating(0);
                  }}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-2 sm:px-4 rounded-lg transition-colors duration-200 text-xs sm:text-base"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}

          {/* Hotels List */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1 sm:p-2 rounded-lg ${
                    viewMode === 'grid' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  <Grid className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1 sm:p-2 rounded-lg ${
                    viewMode === 'list' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  <List className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>

            {/* Loader */}
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-600"></div>
                <span className="ml-3 text-green-600 text-sm">Loading hotels...</span>
              </div>
            ) : (
              <div className={`grid gap-3 sm:gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredHotels.map((hotel) => (
                  <Link
                    key={hotel.hotelId}
                    to={`/hotel/${hotel.hotelId}`}
                    className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                      viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
                    }`}
                  >
                    <div className={`relative ${viewMode === 'list' ? 'w-full sm:w-1/3' : ''}`}>
                      <img
                        src={hotel.hotelImageUrls?.[0] || ''}
                        alt={hotel.hotelName}
                        className={`object-cover ${
                          viewMode === 'list' ? 'w-full h-32 sm:h-full' : 'w-full h-32 sm:h-48'
                        }`}
                      />
                      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-orange-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                        ₹{hotel.hotelBasicPricePerNight}/night
                      </div>
                    </div>
                    
                    <div className={`p-3 sm:p-6 ${viewMode === 'list' ? 'w-full sm:w-2/3' : ''}`}>
                      <div className="flex items-center justify-between mb-1 sm:mb-2">
                        <h3 className="text-base sm:text-xl font-semibold text-gray-800">{hotel.hotelName}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-current" />
                          <span className="text-xs sm:text-sm text-gray-600">{hotel.hotelRating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-4">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                        <span className="text-xs sm:text-gray-600">{hotel.hotelAddress}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                        {hotel.landscapeTypeName && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs sm:text-sm">
                            {hotel.landscapeTypeName}
                          </span>
                        )}
                        {hotel.hotelTypeName && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs sm:text-sm">
                            {hotel.hotelTypeName}
                          </span>
                        )}
                        {hotel.district && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs sm:text-sm">
                            {hotel.district}
                          </span>
                        )}
                      </div>
                      
                      <span className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-3 px-2 sm:px-6 rounded-lg transition-colors duration-200 text-center text-xs sm:text-base">
                        View Details
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {!loading && filteredHotels.length === 0 && (
              <div className="text-center py-8 sm:py-12">
                <p className="text-gray-500 text-base sm:text-lg">No hotels found matching your criteria.</p>
                <Link
                  to="/hotels"
                  className="inline-block mt-2 sm:mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg transition-colors duration-200 text-xs sm:text-base"
                >
                  View All Hotels
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsPage;