import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const offers = [
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

  return (
    <section className="relative h-[250px] md:h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {offers.map((offer) => (
          <SwiperSlide key={offer.id}>
            <div className="relative h-full">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
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