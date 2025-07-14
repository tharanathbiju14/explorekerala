import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const DistrictSection = () => {
  const districts = [
    { name: "Thiruvananthapuram", slug: "thiruvananthapuram", image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Kollam", slug: "kollam", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Pathanamthitta", slug: "pathanamthitta", image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Alappuzha", slug: "alappuzha", image: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Kottayam", slug: "kottayam", image: "https://images.pexels.com/photos/1769737/pexels-photo-1769737.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Idukki", slug: "idukki", image: "https://images.pexels.com/photos/1574829/pexels-photo-1574829.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Ernakulam", slug: "ernakulam", image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Thrissur", slug: "thrissur", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Palakkad", slug: "palakkad", image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Malappuram", slug: "malappuram", image: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Kozhikode", slug: "kozhikode", image: "https://images.pexels.com/photos/1769737/pexels-photo-1769737.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Wayanad", slug: "wayanad", image: "https://images.pexels.com/photos/1574829/pexels-photo-1574829.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Kannur", slug: "kannur", image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Kasaragod", slug: "kasaragod", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400" }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-lg sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 sm:mb-4">
            Explore by District
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover handpicked stays in all 14 districts of Kerala
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
          {districts.map((district) => (
            <Link
              to={`/hotels?district=${district.slug}`}
              key={district.name}
              className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={district.image}
                alt={district.name}
                className="w-full h-16 object-cover group-hover:scale-110 transition-transform duration-300 md:h-48"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-1 md:bottom-4 md:left-4 md:right-4 md:items-start md:justify-end">
                <div className="flex items-center space-x-1 mb-0 md:space-x-2 md:mb-2">
                  {/* <MapPin className="h-2 w-2 md:h-4 md:w-4" /> */}
                  {/* <span className="text-[8px] opacity-90 md:text-sm">District</span> */}
                </div>
                <h3 className="text-[8px] font-semibold mb-0 text-center md:text-xl md:mb-2">{district.name}</h3>
                <span className="bg-green-600 hover:bg-green-700 text-white px-1 py-[2px] rounded-lg text-[8px] transition-colors duration-200 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 inline-block md:px-4 md:py-2 md:text-sm">
                  View Hotels
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistrictSection;