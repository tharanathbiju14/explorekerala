import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const [heroData, setHeroData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Default offers data as fallback
  const defaultOffers = [
    {
      id: 1,
      title: "25% off this Onam!",
      description: "Celebrate Onam with exclusive discounts on premium resorts across Kerala",
      image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1600",
      buttonText: "Book Now"
    },
    {
      id: 2,
      title: "Monsoon Magic Getaway",
      description: "Experience Kerala's monsoon beauty with special packages starting from ₹5,999",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600",
      buttonText: "Explore Deals"
    },
    {
      id: 3,
      title: "Backwater Bliss",
      description: "Serene houseboat experiences in Alleppey with complimentary Kerala meals",
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1600",
      buttonText: "Book Experience"
    }
  ];

  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://192.168.1.14:8080/hotel/super-admin/get-active-images');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Transform the API data to match your component structure
        const transformedData = data.map((item, index) => ({
          id: item.carouselImageId || item.id || index + 1,
          title: item.title || defaultOffers[index]?.title || `Special Offer ${index + 1}`,
          description: item.description || defaultOffers[index]?.description || "Discover amazing deals and experiences",
          image: item.carouselImage ? `data:image/jpeg;base64,${item.carouselImage}` : defaultOffers[index]?.image,
          buttonText: item.buttonText || defaultOffers[index]?.buttonText || "Book Now"
        }));

        setHeroData(transformedData.length > 0 ? transformedData : defaultOffers);
      } catch (err) {
        console.error('Error fetching hero images:', err);
        setError(err.message);
        // Use default offers as fallback
        setHeroData(defaultOffers);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroImages();
  }, []);

  // Loading state
  if (loading) {
    return (
      <section className="relative h-[180px] md:h-[60vh] bg-gray-200 flex items-center justify-center mt-4 md:mt-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </section>
    );
  }

  // Error state (still shows default content)
  if (error) {
    console.warn('Using fallback data due to API error:', error);
  }

  return (
  <section className="relative h-[200px] md:h-[80vh] mt-4 md:mt-8 px-2 md:px-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={heroData.length > 1}
        pagination={{ clickable: true }}
        autoplay={heroData.length > 1 ? { delay: 5000, disableOnInteraction: false } : false}
        loop={heroData.length > 2}
        className="h-full rounded-xl overflow-hidden"
      >
        {heroData.map((offer) => (
          <SwiperSlide key={offer.id}>
            <div className="relative h-full">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover rounded-xl"
                onError={(e) => {
                  // Fallback image if the API image fails to load
                  e.target.src = "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1600";
                }}
              />
              <div className="absolute inset-0 bg-black/40 rounded-xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl mx-auto px-4">
                  <h1 className="text-lg md:text-6xl font-bold mb-2 md:mb-6 leading-tight">
                    {offer.title}
                  </h1>
                  <p className="text-xs md:text-2xl mb-2 md:mb-8 leading-relaxed max-w-2xl mx-auto">
                    {offer.description}
                  </p>
                  <Link
                    to="/hotels"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-1 px-2 md:py-4 md:px-8 rounded-lg text-xs md:text-lg transition-colors duration-200 transform hover:scale-105"
                  >
                    {offer.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;